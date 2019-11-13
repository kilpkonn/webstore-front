FROM nginx

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html
## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folde
COPY dist/frontend/* /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
