# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app

# Argumentos de construcción
ARG VITE_SEND_MAIL_URL
ARG VITE_TOKEN_CLOUD_FUNCTION

# Establecer las variables de entorno para el proceso de construcción
ENV VITE_SEND_MAIL_URL=https://southamerica-west1-
ENV VITE_TOKEN_CLOUD_FUNCTION=jhsjhdjasj

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

RUN mkdir -p /app/dist/assets/logos
RUN cp -R /app/src/assets/logos/* /app/dist/assets/logos/

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY --from=build-stage /app/deployment/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
