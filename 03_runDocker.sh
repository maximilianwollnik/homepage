function prop {
    grep "${1}" gradle.properties|cut -d'=' -f2
}

docker run -d --name homepage --network spring maximilianwollnik/homepage:$(prop 'version')