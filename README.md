This simple app is able to add/delete/read performancedata for cameras.
A database is added as a backing service to save the performance data.

Prerequisites:
- docker 
- docker-compose

following commands are needed to run the application:
git clone https://github.com/kepitto/12factor_performance.git - to aquire docker-compose.yml file
sudo docker-compose up

The docker-compose.yml file is needed to run the service within a docker runtime.

Usage:

add data:
example: curl "http://localhost:8080/addData?cam=cam1&cpu=50&latency=70"

delete data by id:
example: curl "http://localhost:8080/deleteData?id=3"

read all data:
example: curl "http://localhost:8080/performanceData"