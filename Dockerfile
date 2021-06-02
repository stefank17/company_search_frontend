FROM node:12.18.3

COPY . .

RUN npm install
CMD [ "npm", "run", "dev"]