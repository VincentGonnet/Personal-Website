FROM oven/bun:latest as bun-build

WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN bun install
RUN bun run build

# ---> Server stage
FROM nginx:stable-alpine
COPY --from=bun-build /usr/src/app/dist /usr/share/nginx/html