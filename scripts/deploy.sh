#!/bin/bash

export TERM=xterm-256color
echo $TERM

# Reset
export Color_Off='\033[0m'       # Text Reset

# Regular Colors
export Black='\033[0;30m'        # Black
export Red='\033[0;31m'          # Red
export Green='\033[0;32m'        # Green
export Yellow='\033[0;33m'       # Yellow
export Blue='\033[0;34m'         # Blue
export Purple='\033[1;95m'       # Purple
export Cyan='\033[0;36m'         # Cyan

echo -e "${Cyan}Copying placeholder.jpg to ~/images...${Color_Off}"
sudo cp images/placeholder.jpg ~/images

echo -e "${Cyan}Pulling image ${Color_Off}"
docker pull "$CI_REGISTRY_USER"/"$CI_REGISTRY_REPOSITORY":"$CI_COMMIT_SHORT_SHA"

echo -e "${Cyan}Moving container${Yellow} $APP_CONTAINER_NAME ${Cyan}to ${Yellow}$APP_CONTAINER_NAME-old ${Color_Off}"
docker rename "$APP_CONTAINER_NAME" "$APP_CONTAINER_NAME-old"

# TODO: use different ports etc for rolling upgrade
echo -e "${Cyan}Stopping container $APP_CONTAINER_NAME-old${Color_Off}"
docker container ls -a -s
docker stop "$APP_CONTAINER_NAME-old" || true
echo -e "${Cyan}Removing $APP_CONTAINER_NAME-old${Color_Off}"
docker rm "$APP_CONTAINER_NAME-old" || true
docker container ls -a -s

echo -e "${Cyan}Creating internal network bridge for proxy-back-database (if none exsists)${Color_Off}"
docker network create --driver bridge api-internal-network || true # Create only if none exists

echo -e "${Cyan}Starting new container: $APP_CONTAINER_NAME${Color_Off}"
docker run \
   --name "$APP_CONTAINER_NAME" \
   -p 80:80 \
   -p 443:443 \
   -v /etc/letsencrypt/:/etc/letsencrypt/ \
   -v ~/images:/usr/share/nginx/html/images \
   --network="api-internal-network" \
   --restart=always \
   -d "$CI_REGISTRY_USER"/"$CI_REGISTRY_REPOSITORY":"$CI_COMMIT_SHORT_SHA"

echo -e "${Green}"
docker container ls -a -s
echo -e "${Color_Off}"

echo -e "${Cyan}Removing old images${Color_Off}"
docker image ls
echo -e "${Purple}"
docker system prune -a -f # Needed for unnamed images / containers / etc
echo -e "${Color_Off}"
docker image ls
