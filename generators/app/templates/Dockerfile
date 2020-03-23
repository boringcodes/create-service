FROM node:<%= elementNodeVersion %>-alpine as builder
WORKDIR /app
COPY . .
RUN yarn && yarn build && yarn purge && yarn --production

FROM node:<%= elementNodeVersion %>-alpine
RUN apk add --no-cache curl
WORKDIR /app
COPY --from=builder /app/build build
COPY --from=builder /app/node_modules node_modules
HEALTHCHECK --interval=30s --timeout=30s --retries=3 CMD curl --fail http://${HOST}:${PORT}/health || exit 1
CMD ["node", "build/index.js"]
