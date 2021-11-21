FROM maximilianwollnik/homepage-image

WORKDIR /usr/local/homepage
ADD . .
RUN /bin/bash /usr/local/homepage/gradlew bootJar --no-daemon && \
    cp /usr/local/homepage/build/libs/*.jar $HOME/
WORKDIR $HOME
RUN rm -rf /usr/local/homepage $HOME/.gradle

CMD java -Djava.security.egd=file:/dev/./urandom -jar $HOME/*.jar

