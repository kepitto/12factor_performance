I. Codebase
One codebase tracked in revision control, many deploys
The codebase is revisioned via git.

II. Dependencies
Explicitly declare and isolate dependencies
Dependancies are specified in the package.json file and are installed via the Dockerfile. 
A docker runtime is sufficient to run the application.

III. Config
Store config in the environment


IV. Backing services
Treat backing services as attached resources
Postgres SQL database is used for the storage of data which will also be run via the docker-compose.yml file.

V. Build, release, run
Strictly separate build and run stages


VI. Processes
Execute the app as one or more stateless processes


VII. Port binding
Export services via port binding
Port Binding was achieved via the docker-compose.yml file.

VIII. Concurrency
Scale out via the process model


IX. Disposability
Maximize robustness with fast startup and graceful shutdown


X. Dev/prod parity
Keep development, staging, and production as similar as possible


XI. Logs
Treat logs as event streams
Logging can be seen via stdout.


XII. Admin processes
Run admin/management tasks as one-off processes