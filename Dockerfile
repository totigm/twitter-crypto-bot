# Build TS project into JS code
FROM node:18-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install \
    && npm run clean \
    && npm run build

# Get JS code and install production dependencies only
FROM node:18-alpine AS production

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder ./app/build ./build 
COPY package*.json .
COPY .env .

RUN npm install --production

CMD npm run start:prod