USER=nbSlug
CONT=nb-slug-run
IMAGE=nb-slug-img

build-image:
	docker build --rm -t ${IMAGE} .

stop-container:
	( docker stop ${CONT} ) || ( echo "Container not found: ${CONT}" )

remove-container: stop-container
	( docker rm ${CONT} ) || ( echo "Container not found: ${CONT}" )

build-container: remove-container
	docker run \
		-v ${HOME}/.gitconfig:/${USER}/.gitconfig \
		-v ${HOME}/.ssh:/${USER}/.ssh \
		-v ${PWD}:/${USER}/src \
		-w /${USER}/src \
		-h dev \
		--dns=8.8.8.8 \
		-it \
		--name ${CONT} \
		${IMAGE}

attach-container: stop-container
	docker start ${CONT} && \
	docker attach ${CONT}
