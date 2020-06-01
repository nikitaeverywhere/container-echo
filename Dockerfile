FROM node:alpine

WORKDIR /app
COPY . /app
RUN npm install

EXPOSE 80

CMD ["node", "-r", "esm", "/app/index.js"]