FROM mongo:latest

RUN apt-get -qq update && apt-get install -y curl
RUN curl https://install.meteor.com/ | sh

EXPOSE 3000

ENV MONGO_URL mongodb://127.0.0.1:27017/sample
