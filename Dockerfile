FROM maximilianwollnik/homepage-image

ADD build/libs/*.jar $HOME/

CMD java -Djava.security.egd=file:/dev/./urandom -jar $HOME/*.jar

