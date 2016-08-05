.PHONY: stop down run

run:
	docker-compose run --rm development

stop:
	docker-compose stop

down: stop-container
	docker-compose down
