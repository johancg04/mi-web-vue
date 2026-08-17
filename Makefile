ship: rmc rmi build image run

build:
	npm run build
image:
	docker build -t mi-web:1.0.0 .
rmi:
	docker rmi mi-web:1.0.0
run:
	docker container run --name mi-web -d -p 80:80 mi-web:1.0.0
rmc:
	docker container stop mi-web
	docker container rm mi-web
start:
	docker start mi-web
