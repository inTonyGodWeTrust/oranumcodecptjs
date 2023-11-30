# Oranum CodeceptJS Framework
 This framework developed for Oranum platform validation.  
 Framework based on CodeceptJs, with Playwright engine, BDD Gherkin approach and written in Javascript.

## Get Started with Make:
### Build the project:
#### 1. Go to the folder where you want to download the project:
    cd ${SpecificPlace}
#### 2. Clone repopository by the git command to specific place:
    git clone https://github.com/tonygod11/oranumcodecptjs.git
#### 3. Go to the project folder:
    cd oranumcodecptjs
#### 4. Build the project in container:
    make build-docker-image

### Run the project:
#### 1. Run the project by make command:
    make run-docker-container

#### 2. Open Allure report on the page:
    http://localhost:4999/

## Get Started with Docker:
#### Build the project by docker:
    docker build -t tonygod/oranumcodecptjs:latest https://github.com/inTonyGodWeTrust/oranumcodecptjs.git#main
#### Run the project by docker:
    docker run -t -p 4999:4999 tonygod/oranumcodecptjs:latest
#### Open Allure report on the page:
    http://localhost:4999/    

## Local run:
###  Do the 1-3 steps from Get Started with Make
#### Install dependencies:
    npm install
#### Run the tests by the command:
    npm test
