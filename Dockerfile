FROM node 21.7.3-alpine as build
 
WORKDIR /user/src/app
 
COPY . .

RUN npm ci --omit=dev
