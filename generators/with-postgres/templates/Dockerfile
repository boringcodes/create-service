# Base Image GitHub https://github.com/boringcodes/dev-runner
# Default WORKDIR /app
# Default CMD yarn dev

# builder stage
FROM boringcodes/dev-runner:node-<%= elementNodeVersion %>-alpine as builder
COPY . .
RUN yarn && yarn build && yarn purge && yarn --production

# runner stage
FROM boringcodes/dev-runner:node-<%= elementNodeVersion %>-alpine
COPY --from=builder /app/build build
COPY --from=builder /app/node_modules node_modules
CMD node build/index.js
