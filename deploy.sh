#!/usr/bin/env sh


# build and generate the static files
yarn build && npx next export

[ $? ] && git add -f out/ && git commit -m "Deploy gh-pages" &&\
  git subtree push --prefix out origin gh-pages
