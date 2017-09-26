FROM node:8.5
MAINTAINER Nurimba <https://github.com/nurimba>

RUN echo "%sudo ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers && echo "secret\nsecret" | passwd node

USER node

WORKDIR /home/node

CMD [ "bash" ]
