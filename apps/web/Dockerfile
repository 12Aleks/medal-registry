FROM node:20-bullseye

WORKDIR /app

# 1. Copy root package files
COPY package*.json ./
# Only copy the lockfile you actually have
COPY package-lock.json* ./

# 2. Copy the shared packages and the specific app
COPY packages ./packages
COPY apps/web ./apps/web

# 3. Install dependencies
RUN npm install

# 4. Build the app
# Note: Next.js build usually happens for the specific workspace
# RUN npm run build -w apps/web

EXPOSE 3000
CMD ["npm", "run", "dev", "-w", "apps/web"]