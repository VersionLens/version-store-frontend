.PHONY: build

build:
	docker build -t version-store-frontend .

run:
	docker run --rm -p 5173:5173 version-store-frontend