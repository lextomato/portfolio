FROM node:22-alpine AS builder

WORKDIR /src
COPY package*.json ./
RUN npm ci --silent
COPY . .
RUN npx quasar build -m spa

FROM nginx:1.25-alpine
COPY --from=builder /src/dist/spa /usr/share/nginx/html

# Nginx ya expone 80 por defecto
HEALTHCHECK CMD wget -qO- http://localhost || exit 1
