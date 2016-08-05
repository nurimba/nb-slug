FROM malera/es6

MAINTAINER Nurimba <https://github.com/nurimba>

RUN echo "%sudo ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers && \
    useradd -u 1000 -G users,sudo -d /nbSlug --shell /bin/bash -m nbSlug && \
    echo "secret\nsecret" | passwd nbSlug

USER nbSlug

WORKDIR /nbSlug

CMD [ "bash" ]
