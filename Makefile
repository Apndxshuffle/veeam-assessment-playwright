check_colima:
	@colima status >/dev/null 2>&1 || (echo "Colima is not running. Starting colima..." && colima start)

build: check_colima
	docker-compose build

start: check_colima
	docker-compose up -d

clean: check_colima
	docker-compose down --rmi all --volumes --remove-orphans

test-in-docker: build
	docker-compose run --rm playwright yarn e2e:chrome

test-in-colima: build check_colima
	docker-compose run --rm playwright yarn e2e:chrome