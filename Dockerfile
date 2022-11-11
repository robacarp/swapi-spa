FROM crystallang/crystal:1.6.1-alpine AS crystal
WORKDIR /app
COPY shard.yml shard.lock ./
RUN shards install
COPY simple_server.cr ./
RUN mkdir -p bin
RUN crystal build --static -o bin/simple_server ./simple_server.cr

FROM node:18-alpine AS node
COPY package.json yarn.lock ./
RUN yarn install
COPY public ./public
COPY tailwind.config.js ./
RUN npx tailwindcss -i ./public/css/main.css -o ./public/dist/css/main.css

FROM alpine
WORKDIR /app
COPY public ./public
COPY --from=crystal /app/bin/simple_server ./simple_server
COPY --from=node public/dist/css/main.css ./public/dist/css/main.css
CMD ["./simple_server"]
