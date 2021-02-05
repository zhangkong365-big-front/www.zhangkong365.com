FROM nginx:1.19.0

COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/ /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]
