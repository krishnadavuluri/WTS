FROM node:10-alpine
RUN mkdir /app
WORKDIR /app
COPY package.json .
RUN npm install && npm clean-install react-scripts
COPY . .
CMD ["npm","start"]
EXPOSE 3000
