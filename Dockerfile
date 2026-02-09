Dockerfile
FROM node:22-alpine
LABEL "language"="nodejs"
LABEL "framework"="next.js"

WORKDIR /src

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["sh", "-c", "npm run start -- -p ${PORT:-3000}"]
