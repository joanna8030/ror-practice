FROM ruby:2.1.5

# Install Node.js v 6.0.0
RUN apt-get update && \
    apt-get install -y nodejs --no-install-recommends && \
    apt-get install -y npm --no-install-recommends && \
    apt-get install -y vim --no-install-recommends && \
    rm -rf /var/lib/apt/lists/* &&\
    npm install -g n && \
    n 6.0.0 && \
    mkdir -p /vol/node/start

RUN apt-get update && \
    apt-get install -y mysql-client postgresql-client sqlite3 --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY Gemfile* ./
RUN bundle install
COPY . /usr/src/app

EXPOSE 3000
EXPOSE 9876
CMD ["bash", "./docker-cmd.sh"]
