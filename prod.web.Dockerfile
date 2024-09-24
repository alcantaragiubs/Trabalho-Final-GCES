FROM node:alpine

WORKDIR /app

RUN npm install -g pnpm && \
    apk add --no-cache postgresql-client

COPY ./*.json .
COPY pnpm*.yaml .
RUN pnpm install --no-frozen-lockfile

COPY . . 

WORKDIR /app/apps/web
CMD ["sh", "-c", "pnpm run build && pnpm run start"]
