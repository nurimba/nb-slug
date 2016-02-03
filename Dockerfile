FROM debian:jessie
MAINTAINER Nurimba <https://github.com/nurimba>

ENV DEBIAN_FRONTEND noninteractive

RUN echo "America/Sao_Paulo" > /etc/timezone
RUN dpkg-reconfigure -f noninteractive tzdata
RUN apt-get update && apt-get upgrade -qqy --force-yes && apt-get dist-upgrade -qqy --force-yes
RUN apt-get install -qqy --force-yes apt-utils htop sudo libfontconfig1 bzip2 tar build-essential python-software-properties vim git curl locales
RUN apt-get autoremove -qqy --force-yes && apt-get autoclean -qqy --force-yes && apt-get clean && apt-get update

RUN echo "LANGUAGE=pt_BR.UTF-8" >> /etc/environment
RUN echo "LANG=pt_BR.UTF-8"     >> /etc/environment
RUN echo "LC_ALL=pt_BR.UTF-8"   >> /etc/environment
RUN locale-gen pt_BR.UTF-8
RUN dpkg-reconfigure locales

# gpg keys listed at https://github.com/nodejs/node
RUN set -ex \
  && for key in \
    9554F04D7259F04124DE6B476D5A82AC7E37093B \
    94AE36675C464D64BAFA68DD7434390BDBE9B9C5 \
    0034A06D9D9B0064CE8ADF6BF1747F4AD2306D93 \
    FD3A5288F042B6850C66B31F09FE44734EB7990E \
    71DCFD284A79C3B38668286BC97EC7A07EDE3FC1 \
    DD8F2338BAE7501E3DD5AC78C273792F7D83545D \
    B9AE9905FFD7803F25714661B63B535A4C206CA9 \
    C4F0DFFF4E8C1A8236409D08E73BC641CC11F4C8 \
  ; do \
    gpg --keyserver ha.pool.sks-keyservers.net --recv-keys "$key"; \
  done

#NodeJS v4.2.6 - Long Term Support Release
ENV NODE_VERSION 4.2.6
ENV NODE_ENV development

RUN curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz" \
  && curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/SHASUMS256.txt.asc" \
  && gpg --verify SHASUMS256.txt.asc \
  && grep " node-v$NODE_VERSION-linux-x64.tar.gz\$" SHASUMS256.txt.asc | sha256sum -c - \
  && tar -xzf "node-v$NODE_VERSION-linux-x64.tar.gz" -C /usr/local --strip-components=1 \
  && rm "node-v$NODE_VERSION-linux-x64.tar.gz" SHASUMS256.txt.asc

RUN npm update -g npm

RUN echo "%sudo ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers && \
    useradd -u 5001 -G users,sudo -d /nbSlug --shell /bin/bash -m nbSlug && \
    echo "secret\nsecret" | passwd nbSlug

RUN usermod -u 1000 nbSlug

USER nbSlug

WORKDIR /nbSlug

CMD [ "bash" ]
