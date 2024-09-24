FROM node:18.17.0

WORKDIR /app

RUN npm install -g pnpm  && \
    apt-get update && \
    apt-get install -y postgresql-client

COPY ./*.json .
COPY pnpm*.yaml .
RUN pnpm install --no-frozen-lockfile

COPY . .

WORKDIR /app/apps/web
CMD ["pnpm", "run", "dev"]