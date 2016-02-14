FROM maximilianwollnik/java8

RUN locale-gen de_DE.UTF-8
ENV LANG       de_DE.UTF-8
ENV LC_ALL     de_DE.UTF-8
ENV LANGUAGE de_DE:de
ENV DEBIAN_FRONTEND noninteractive
ENV HOME /root

CMD java -Djava.security.egd=file:/dev/./urandom -jar $HOME/*.jar

ADD *.jar $HOME/
