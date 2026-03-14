FROM node:20-alpine

WORKDIR /app

# 1. Copy root package files
COPY package*.json ./
COPY package-lock.json* ./

# 2. Copy shared packages and the api app
COPY packages ./packages
COPY apps/api ./apps/api

# 3. Install
RUN npm install

# 4. Build NestJS
# This runs the build script inside apps/api
RUN npm run build -w apps/api

EXPOSE 5000

# NestJS prod build usually lives in apps/api/dist/main.js
CMD ["node", "apps/api/dist/main.js"]