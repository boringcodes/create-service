# https://github.com/boringcodes/prod-builder

# build stage
FROM boringcodes/prod-builder:node-<%= elementNodeVersion %>-alpine as builder
COPY . .
RUN yarn && yarn build && yarn purge && yarn --production

# run stage
FROM node:<%= elementNodeVersion %>-alpine
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=80
WORKDIR /app
COPY --from=builder /app/build build
COPY --from=builder /app/node_modules node_modules
CMD node build
