FROM node:lts

EXPOSE 3000

WORKDIR /workspace

COPY package.json /workspace/
COPY package-lock.json /workspace/

RUN npm install