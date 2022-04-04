# NodeJS Microservices Application with CI/CD Pipeline for Managed K8s Cluster on DigitalOcean

## About the repo
This repo contains a nodejs microservices application with fully automated CI/CD pipeline built using Github Actions.
The purpose of this repo is to demo the Deployment Pipeline to show how a microservice is deployed to a managed kubernetes cluster on digital ocean.
This demo is built as a part of [KTH DevOps Course](https://github.com/KTH/devops-course) with collaboration of [Valdimar Björnsson](https://github.com/valdimarb13).

## Instructions/ How to Run

- Clone this repo into your local machine.
- Make sure Docker Client is installed on your local machine and Kubernetes is also enabled.
- Create a account on DigitalOcean
- You will need a debit/credit card for verification but you can also get free 100 credits easily so for this demo you won't be charged with real money.
- To get the free credits use [DigitalOcean Free Trail](https://try.digitalocean.com/freetrialoffer/)
- After Verification on DigitalOcean there will be a default project created for you. If not create a new project.
- After creating the project, create a new Managed Kubernetes Cluster (by default 3 Nodes).
- After the cluster is created you need to change the kubernetes context in your local machine. (For Debugging and Logging Purposes)
- For that DigitalOcean Client API tool, doctl is required. To install doctl follow the guidelines mentioned in the repo [doctl](https://github.com/digitalocean/doctl)
- Once doctl is installed, first step is to authenticate. For that go to API section in your digital ocean account and create a public access token and run command doctl auth init and this will ask for token, just paste your token and click enter. 
- After auth setup run the command "doctl kubernetes cluster kubeconfig save <Your_Cluster_Name>" to change the context.
- Now replace kubernetes cluster name in all the files inside the repo with your kubernetes cluster name in digital ocean. The easy way is to search for "myticketing" and replace it with your cluster name. 
- Also replace docker user name with your docker user name in all the files. The easy way is to search for "abdullahcsedocker1428" in all files and replace it with your username.
- Now the next step is to configure ingress nginx for digital ocean, for that run command "kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.3/deploy/static/provider/do/deploy.yaml"
- Now next step is to initialize a repo in your github where you can push this code.
- Before pushing the code, you need to create 3 secrets that are used in the Github Actions.
- To create secrets go to settings of your repo and generate secrets over there.
- Make sure the secret names are "DOCKER_USERNAME", "DOCKER_PASSWORD" and "DIGITALOCEAN_ACCESS_TOKEN". 
- For secret values you will need your docker username, docker password and DigitalOcean token which you can generate from API section on DigitalOcean website.
- After this hopefully the final step will be to push the code on master branch and see the github actions/workflows execution which will deploy the code to your DigitalOcean Managed K8s Cluster.

## Going on Forward, How to Make Changes Strategy

After this to change the code in any microservice, the steps are

- Create a new branch on local machine and checkout with git. 
- Change the code where required.
- Push the branch to remote origin
- Go to your repo and create a Pull Request for your newly commited code. This will trigger the CI part where the tests for the microservice that you changed will be ran.
- After the test passes, you can merge the pull request into master which will trigger the CD part which will deploy the changed serivce to the cluster.
