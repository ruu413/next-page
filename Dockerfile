# Build the source code
FROM node:16.13.0-alpine
ARG NODE_ENV="production"
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

# This docker file will copy code from app directory
# including the node_modules and .next folder.
COPY . .

EXPOSE 3000
# This run the server at default port 3000
CMD sh -c "npm install --production --no-progress && \
npm run build && \
npm run start"