#!/bin/sh

payload=$1
branch=$(echo $payload | jq '.ref')
headCommit=$(echo $payload | jq '.head_commit.message')
commitToCompare=maven-release-plugin

if [ $branch != \"refs/heads/master\" ] || [ "${headCommit/$commitToCompare}" = "$headCommit" ] ; then 
  echo no
  exit 1
fi
