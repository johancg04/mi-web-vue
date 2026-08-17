FROM nginx:1.30.4-alpine3.24
COPY dist/ /usr/share/nginx/html
RUN find /usr/share/nginx/html -type d -exec chmod 755 {} \;
RUN find /usr/share/nginx/html -type f -exec chmod 644 {} \;
EXPOSE 80