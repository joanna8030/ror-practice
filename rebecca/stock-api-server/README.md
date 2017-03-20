# stock-api-server
[![BuildStatus](https://travis-ci.org/rakuten-f2e/ror-practice.svg?branch=dev%2Frebecca)](https://travis-ci.org/rakuten-f2e/ror-practice)

This is a stock server for checking everyday top50 stock turnover.

## Prerequisites
- ruby 2.1.5
- rails 3.2.22.1
- rubocop (ruby lint)
- rspec (testing)
- angular 1.2.26
- eslint (lint)
- Karma
- jasmine (testing framework)
- docker (environment)

## Getting Started
Following these steps to run the project on your local machine for development or testing purposes:

``` sh
git clone git-url
cd ror-practice
git checkout dev/rebecca
cd ~/stock-api-server
```
To run the application (install docker first) on development(or production):
``` sh
export RAILS_ENV=development && sh run-docker.sh
```
This command will run a shell script(run-docker.sh) to pull image from docker hub, and start running a container named ror-practice. (Check out Dockerfile to see container environment)
It will directly get into the container.

To run rails server, input:
```
rails s
```
Then open your browser on `localhost:3000`

To remove this docker container, run
``` sh
docker rm ror-practice
docker ps -a
```
will got docker containers all clean!

## Running the test
Input command in terminal:
``` sh
npm run test
export RAILS_ENV=test && rspec
```
