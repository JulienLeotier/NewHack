FROM mongo:latest

RUN apt-get -qq update && apt-get install -y curl
RUN curl https://install.meteor.com/ | sh

EXPOSE 3000

ENV MONGO_URL mongodb://julien:newhack2017@ds133311.mlab.com:33311/newhack
