FROM node

WORKDIR /usr/src

COPY package*.json ./

RUN npm install -g serve

COPY . .

EXPOSE 5000

CMD [ "serve", "-s", "build" ]