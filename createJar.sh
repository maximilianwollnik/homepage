#!/bin/bash
export NG_CLI_ANALYTICS=ci

apt-get dist-upgrade -y
apt-get install -y curl
curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs npm

cd /usr/local/homepage/
/bin/bash /usr/local/homepage/gradlew bootJar --no-daemon
