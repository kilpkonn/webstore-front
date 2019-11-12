#!/bin/bash

echo "Pulling image"
docker pull "$CI_REGISTRY_USER"/"$CI_REGISTRY_REPOSITORY":"$CI_COMMIT_SHORT_SHA"

echo "Moving container $APP_CONTAINER_NAME to $APP_CONTAINER_NAME-old"
docker rename "$APP_CONTAINER_NAME" "$APP_CONTAINER_NAME-old"

# TODO: use different ports etc for rolling upgrade
echo "Stopping container $APP_CONTAINER_NAME-old"
docker container ls -a -s
docker stop "$APP_CONTAINER_NAME-old" || true
echo "Removing $APP_CONTAINER_NAME-old"
docker rm "$APP_CONTAINER_NAME-old" || true
docker container ls -a -s

echo "Creating network bridge for proxy (if none exsists)"
docker network create --driver bridge proxy-network || true # Create only if none exists

echo "Starting new container: $APP_CONTAINER_NAME"
docker run \
   --name "$APP_CONTAINER_NAME" \
   -p 80:80 \
   -p 443:443 \
   -v /etc/letsencrypt/:/etc/letsencrypt/ \
   --network="proxy-network" \
   --restart=always \
   -d "$CI_REGISTRY_USER"/"$CI_REGISTRY_REPOSITORY":"$CI_COMMIT_SHORT_SHA"

docker container ls -a -s

echo "Removing old images"
docker image ls
# shellcheck disable=SC2046
yes | docker system prune
docker image ls
