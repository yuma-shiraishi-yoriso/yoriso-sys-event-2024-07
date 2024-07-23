.PHONY: setup
setup:
	composer install \
        && cp .env.example .env \
        && ./vendor/bin/sail up -d \
        && ./vendor/bin/sail artisan key:generate \
        && ./vendor/bin/sail artisan migrate:fresh --seed \
        && ./vendor/bin/sail artisan install:api

.PHONY: up
up:
	./vendor/bin/sail up -d

.PHONY: down
down:
	./vendor/bin/sail down

.PHONY: mysql
mysql:
	docker exec -it backend-mysql-1 mysql -usail -ppassword

.PHONY: fpm
fpm:
	docker exec -it backend-laravel.test-1 bash

