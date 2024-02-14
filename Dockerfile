FROM krmp-d2hub-idock.9rum.cc/goorm/node:16
WORKDIR /usr/src/app
COPY . .
RUN npm ci
EXPOSE 3000
CMD ["node", "server.js"]