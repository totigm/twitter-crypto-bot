# Build TS project into JS code
FROM node:16-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install \
    && npm run clean \
    && npm run build

# Get JS code and install production dependencies only
FROM node:16-alpine AS production

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder ./app/dist ./dist 
COPY package*.json .
COPY .env .

RUN npm install --production

CMD npm run start:prod
