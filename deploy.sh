#!/usr/bin/env sh

export NODE_ENV="production"

# build and generate the static files
yarn "build" && yarn "export"

# push to github
[ $? -eq 0 ] && git add -f out/ && git commit -m "Deploy gh-pages" &&\
  git subtree push --prefix out origin gh-pages
