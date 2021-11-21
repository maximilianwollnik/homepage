function prop {
    grep "${1}" gradle.properties|cut -d'=' -f2
}

docker build -t maximilianwollnik/homepage .
docker tag maximilianwollnik/homepage:latest maximilianwollnik/homepage:$(prop 'version')