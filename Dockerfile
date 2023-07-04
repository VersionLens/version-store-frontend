FROM node:18-alpine3.15

WORKDIR /app
COPY package.json .
RUN npm install

COPY . /app
RUN mkdir /code

WORKDIR /code

EXPOSE 5173
CMD [ "/app/docker-entrypoint.sh" ]