FROM node:latest as node-build

ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm install --silent --production=true --frozen-lockfile
RUN npm run build --silent

# ---> Server stage
FROM nginx:stable-alpine
COPY --from=node-build /usr/src/app/dist /usr/share/nginx/html