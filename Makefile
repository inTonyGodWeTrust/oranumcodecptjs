build-docker-image:
	docker build -t tonygod/oranumcodecptjs:1.0 .

run-docker-container:
	docker run -t -p 4999:4999 tonygod/oranumcodecptjs:1.0
