FROM node:alpine

WORKDIR /app

RUN npm install -g pnpm && \
    apk add --no-cache postgresql-client

COPY ./*.json .
COPY pnpm*.yaml .
RUN pnpm install --no-frozen-lockfile

COPY . . 

WORKDIR /app/apps/api
CMD ["sh", "-c", "until pg_isready -h pg -p 5432; do echo waiting for database; sleep 2; done && pnpm prisma generate && pnpm run db:migrate && pnpm run start"]
    