FROM alpine
RUN apk update && apk add nginx
RUN rm /etc/nginx/nginx.conf && rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/
COPY default.conf /etc/nginx/conf.d/
RUN mkdir -p /run/nginx
CMD [ "nginx"]

 

