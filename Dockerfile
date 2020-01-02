FROM nginx

## Copy our default deploy config
COPY deploy/nginx/* /etc/nginx/conf.d/

## Remove default deploy website
RUN ls
RUN cd /usr && ls
RUN cd /usr/share && ls
RUN cd /usr/share/nginx && ls -alt
RUN cd /usr/share/nginx/html && ls -alt

RUN rm -rf /usr/share/nginx/html/*
## From ‘builder’ stage copy over the artifacts in dist folder to default deploy public folde
COPY dist/frontend /usr/share/nginx/html

VOLUME /usr/share/nginx/html/images

CMD ["nginx", "-g", "daemon off;"]
