#!/bin/bash
export NG_CLI_ANALYTICS=ci

apt-get dist-upgrade -y
apt-get install -y nodejs npm

cd /usr/local/homepage/
/bin/bash /usr/local/homepage/gradlew bootJar --no-daemon
