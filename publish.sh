#!/bin/bash

npm adduser <<!
$NPM_USERNAME
$NPM_PASSWORD
$NPM_EMAIL
!

npm publish

git remote add nurimba git@github.com:nurimba/nb-slug.git
git fetch nurimba
git rebase nurimba/master
git push nurimba master
