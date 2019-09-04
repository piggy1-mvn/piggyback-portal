FROM node:10

# Create app directory inside src, which will be the working directory
WORKDIR /usr/src

COPY package*.json ./

RUN npm install -g serve

COPY . .

EXPOSE 5000

CMD [ "serve", "-s", "build" ]