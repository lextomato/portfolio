FROM node:22-alpine AS builder

WORKDIR /src
COPY package*.json ./
RUN npm ci --silent
COPY . .
RUN npm run build

FROM nginx:1.25-alpine
COPY --from=builder /src/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
HEALTHCHECK CMD wget -qO- http://localhost || exit 1
