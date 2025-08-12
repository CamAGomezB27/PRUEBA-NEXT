# Etapa 1: Build con todas las dependencias
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json / 

RUN npm install

COPY . /

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]