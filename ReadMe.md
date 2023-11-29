# Oranum CodeceptJS Framework
 This framework developed for Oranum platform validation.  
 Framework based on CodeceptJs, with Playwright engine, BDD Gherkin approach and written in Javascript.

## Getting Started:
#### 1. Go to the folder where you want to download the project:
    cd ${SpecificPlace}
#### 2. Clone repopository by the git command to specific place:
    git clone https://github.com/tonygod11/oranumcodecptjs.git
#### 3. Go to the project folder and build the project in container
    cd oranumcodecptjs
#### 4. Build the project in container
    make build-docker-image

## Run the project:
### Run the project by make command:
    make run-docker-container

### Open Allure report on the page
    http://localhost:4999/

## Local run
### You can run this project locally, just go to the:
    cd oranumcodecptjs
    npm install

### Run the test by the command:
    npm test
