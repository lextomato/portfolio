FROM node:22-alpine AS builder

WORKDIR /src

ARG VITE_SEND_MAIL_URL
ARG VITE_TOKEN_CLOUD_FUNCTION

ENV VITE_SEND_MAIL_URL=$VITE_SEND_MAIL_URL
ENV VITE_TOKEN_CLOUD_FUNCTION=$VITE_TOKEN_CLOUD_FUNCTION

COPY package*.json ./
RUN npm ci --silent
COPY . .
RUN npm run build

FROM nginx:1.25-alpine
COPY --from=builder /src/dist /usr/share/nginx/html
HEALTHCHECK CMD wget -qO- http://localhost || exit 1
