function prop {
    grep "${1}" gradle.properties|cut -d'=' -f2
}

docker run -it --rm -v /mnt/data/scripts/docker/homepage:/usr/local/homepage maximilianwollnik/homepage-image /bin/bash /usr/local/homepage/createJar.sh

docker build -t maximilianwollnik/homepage .
docker tag maximilianwollnik/homepage:latest maximilianwollnik/homepage:$(prop 'version')