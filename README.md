# NodeJS Microservices Application with CI/CD Pipeline for Managed K8s Cluster on DigitalOcean

## About the repo
This repo contains a nodejs microservices application with fully automated CI/CD pipeline built using Github Actions.
The purpose of this repo is to demo the Deployment Pipeline to show how a microservice is deployed to a managed kubernetes cluster on digital ocean.
This demo is built as a part of [KTH DevOps Course](https://github.com/KTH/devops-course) with collaboration of [Valdimar Björnsson](https://github.com/valdimarb13).

## Dependencies
To run this project you need to install

- [Docker Client](https://www.docker.com/get-started/) and making sure Kubernetes is also enabled.
- [Doctl](https://github.com/digitalocean/doctl)

## Digital Ocean Account and Setup
To deploy the application to Managed Kubernetes Cluster on Digital Ocean you will need to create an account.

- Create a account on DigitalOcean.
- You will need a debit/credit card for verification but you can also get free 100 credits easily so for this demo you won't be charged with real money.
- To get the free credits use [DigitalOcean Free Trail](https://try.digitalocean.com/freetrialoffer/).
- After Verification on DigitalOcean there will be a default project created for you. If not create a new project.
- After creating the project, create a new Managed Kubernetes Cluster and go through the settings and options. (by default 3 Nodes).
- After the Cluster is created you need to change the Kubernetes context in your local machine. (For Debugging and Logging Purposes). So to change the context DigitalOcean Client API tool, doctl is required with authentication step. After Doctl is installed first step is to authenticate. For that go to API section in your digital ocean account and create a public access token and run command 
```

doctl auth init

```
- After running this command you will be asked for a token, just copy ana paste your token generated and click enter.
- After the auth step is done now you can run the command to change Kubernetes context in the local machine through the command
```

doctl kubernetes cluster kubeconfig save <Your_Cluster_Name>"

```
to change the context.

- Now the next step is to configure ingress nginx for digital ocean, for that run the command in the root of the project.
```

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.3/deploy/static/provider/do/deploy.yaml"

```

## Instructions/ How to Run

- Fork this repo.

- Now replace kubernetes cluster name in the files mentioned below inside the repo with your kubernetes cluster name created in digital ocean.
```
deploy-auth.yml
deploy-client.yml
deploy-expiration.yml
deploy-manifests.yml
deploy-orders.yml
deploy-payments.yml
deploy-tickets.yml

To replace the name you need to modifiy line

doctl kubernetes cluster kubeconfig save "your_cluster_name"

```
- Also replace docker user name with your docker user name in all the files in the mentioned directories. 
```

.github/workflows/**
infra/k8s/**

```

- Now the next step is to test the deployment.
- Before pushing the code, you need to create 3 secrets that are used in the Github Actions.
- To create secrets go to settings of your repo and generate secrets over there.
- Make sure the secret names are 
```

"DOCKER_USERNAME", "DOCKER_PASSWORD" and "DIGITALOCEAN_ACCESS_TOKEN". 

```
- For secret values you will need your docker username, docker password and DigitalOcean token which you can generate from API section on DigitalOcean website.
- After this the final step will be to push the code on master branch and see the github actions/workflows execution which will deploy the code to your DigitalOcean Managed K8s Cluster.

## Going on Forward, How to Make Changes Strategy

After this to change the code in any microservice, the steps are

- Create a new branch on local machine and checkout with git. 
```
git checkout -b "your_branch_name"

```
- Change the code where required.
- Push the branch to remote origin
```
git push remote "your_branch_name"

```
- Go to your repo and create a Pull Request for your newly commited code. This will trigger the CI part where the tests for the microservice that you changed will be ran.
- After the test passes, you can merge the pull request into master which will trigger the CD part which will deploy the changed serivce to the cluster.
