**I. Codebase**  
One codebase tracked in revision control, many deploys  
The codebase is revisioned via git and and only one app is created out of the same codebase. (https://github.com/kepitto/12factor_performance)

**II. Dependencies**  
Explicitly declare and isolate dependencies  
Dependancies are specified in the package.json/package-lock.json files and are installed via the Dockerfile.   
A docker runtime is sufficient to run the application.  

**III. Config**  
Store config in the environment  
Docker credentials are saved within env variables on github.  
Postgres database credentials are created via env variables within the docker-compose.yml.  
I guess the credentials could be supplied to the application via env variables too, but it kinda disturbs the simplicity of running the app for this assignment.  

**IV. Backing services**  
Treat backing services as attached resources  
Postgres SQL database is used for the storage of data which will also be run via the docker-compose.yml file.  
 
**V. Build, release, run**  
Strictly separate build and run stages  
A build of the containerized app is initiated every time a commit is pushed onto the main branch.  
Running the app can be done as explained in README.md.  

**VI. Processes**  
Execute the app as one or more stateless processes  
The app can be run by installing the node runtime, which is installed within the docker image.   
The processes of the app and the db are run within the docker image and can be easily stopped via SIGINT on the terminal.  
Any data that must persist is saved within a db.   

**VII. Port binding**  
Export services via port binding  
Port Binding was achieved via the docker-compose.yml file.  
The container runs on 8080 which is also binded to 8080 on the host machine, so it can be accessed outside the container.  
Same goes for the database with port 5432.  

**VIII. Concurrency**  
Scale out via the process model  
Not implemented, but could be achieved with some load balancer which distributes tasks to multiple apps run on parallel.  
for example: https://medium.com/@vinodkrane/microservices-scaling-and-load-balancing-using-docker-compose-78bf8dc04da9  

**IX. Disposability**  
Maximize robustness with fast startup and graceful shutdown  
The containerized app can be started as explained in README.md within a few seconds and can be easily stopped by sending a SIGTERM.  

**X. Dev/prod parity**  
Keep development, staging, and production as similar as possible  
Only one code repo is used for all environments.  
Dev dependancies can be still specified via the package.json file if needed.   

**XI. Logs**  
Treat logs as event streams  
All logging from both the app and the database service is done to stdout.  
For any environment stdout/stderr can be easily filtered and redirected to files if required.  

**XII. Admin processes**  
Run admin/management tasks as one-off processes  
Not implemented, but one time tasks or specific admin tasks can be added via scripts within the package.json file.  
for example: "npm run admintask"  