FROM ubuntu:14.10 

RUN echo "deb http://ppa.launchpad.net/webupd8team/java/ubuntu precise main" | tee -a /etc/apt/sources.list 
RUN echo "deb-src http://ppa.launchpad.net/webupd8team/java/ubuntu precise main" | tee -a /etc/apt/sources.list 
RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys EEA14886 
RUN apt-get update 

# auto accept oracle jdk license 
RUN echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections 
RUN apt-get install -y oracle-java8-installer ca-certificates

RUN locale-gen de_DE.UTF-8
ENV LANG       de_DE.UTF-8
ENV LC_ALL     de_DE.UTF-8
ENV LANGUAGE de_DE:de
ENV DEBIAN_FRONTEND noninteractive
ENV HOME /root

CMD java -jar $HOME/*.jar

ADD ../target/*.jar $HOME/