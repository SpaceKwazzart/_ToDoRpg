FROM node:17 as BUILD
WORKDIR /app
COPY ./app/package.json package.json
RUN npm i

ARG HOST=todobackend
ENV HOST $HOST

COPY ./app ./
RUN npm run build

FROM nginx

COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=BUILD /app/build/index.html /nginx/static/index.html
COPY --from=BUILD /app/build/static/css /nginx/static/
COPY --from=BUILD /app/build/static/js /nginx/static/
COPY --from=BUILD /app/build/static/media /nginx/static/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
