FROM node AS build
WORKDIR /usr/src/app
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g pnpm
COPY package*.json ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm i
COPY . .
ENV NODE_ENV=production
RUN pnpm run build

FROM node
WORKDIR /usr/bin/app
COPY package*.json ./
USER node
COPY --chown=node:node --from=build /usr/src/app/public ./public
COPY --chown=node:node --from=build /usr/src/app/.next/standalone ./
COPY --chown=node:node --from=build /usr/src/app/.next/static ./.next/static
EXPOSE 3000
CMD [ "node", "server.js" ]
