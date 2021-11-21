#!/bin/bash
export NG_CLI_ANALYTICS=ci

apt-get install -y curl
curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs

cd /usr/local/homepage/
/bin/bash /usr/local/homepage/gradlew bootJar --no-daemon
