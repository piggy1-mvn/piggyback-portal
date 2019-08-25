FROM node:10

# Create app directory inside src, which will be the working directory
WORKDIR /usr/src

COPY package*.json ./

RUN npm install
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]