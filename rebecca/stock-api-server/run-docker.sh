#!/bin/bash

if [ ! "$(docker images -q rebecca518/ror-practice)" ]; then
  echo "pull image from docker hub"
  docker pull rebecca518/ror-practice:latest
else
  if [ "$(docker ps -aq -f name=ror-practice)" ]; then
    docker stop ror-practice
    echo "rm ror-practice"
    docker rm ror-practice
  fi
fi

echo "run container on $RAILS_ENV"

if [ $RAILS_ENV == production ]; then
  docker run -p 3000:3000 -p 9876:9876 -v $PWD:/usr/src/app -e RAILS_ENV=$RAILS_ENV --name ror-practice -d rebecca518/ror-practice

else
  nohup docker run -it -p 3000:3000 -p 9876:9876 -v $PWD:/usr/src/app -e RAILS_ENV=$RAILS_ENV --name ror-practice -d rebecca518/ror-practice /bin/bash
  nohup docker exec -it ror-practice rake db:migrate
  docker exec -it ror-practice /bin/bash
fi
