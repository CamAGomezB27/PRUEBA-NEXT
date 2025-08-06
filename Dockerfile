# Etapa 1: Build con todas las dependencias
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY next.config.js ./
COPY tailwind.config.* ./
COPY postcss.config.* ./

COPY . .

RUN npm install
RUN npm run build

# Etapa 2: Producción con dependencias mínimas
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/app ./app
COPY --from=builder /app/tailwind.config.* ./
COPY --from=builder /app/postcss.config.* ./

EXPOSE 3000

CMD ["npm", "start"]
