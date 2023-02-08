# Docker setup (mac/linux)
### Ensure you have docker installed ( [macOS](https://docs.docker.com/desktop/install/mac-install/) / [linux](https://docs.docker.com/desktop/install/linux-install/) )

1. Clone the repo 
> git clone git@github.com:Desp0iler/voyant-exam.git
2. Build the image 
> docker build -t e2e .
3. Run it 
> docker run e2e
4. To review the reports 
> docker run -d -p 9323:9323 e2e npx playwright show-report --host 0.0.0.0
5. Then navigate to http://0.0.0.0:9323
6. Run the following to kill all running docker containers 
> docker kill $(docker container ls -q)

# NPM
### The following is assuming you've already installed npm/nvm on your machine. 
[how to install nvm](https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/)

1. Clone the repo
> git clone git@github.com:Desp0iler/voyant-exam.git
2. Change directories into the root folder and install the dependencies
> npm install 
3. Run the tests 
> npm test