function prop {
    grep "${1}" gradle.properties|cut -d'=' -f2
}

docker run -d --name homepage -v /mnt/data/scripts/docker/homepage:/tmp --network spring -p 9000:9000 -w /tmp maximilianwollnik/homepage:$(prop 'version') /bin/bash /tmp/gradlew bootRun
#docker run -d --name homepage --network spring maximilianwollnik/homepage:$(prop 'version')