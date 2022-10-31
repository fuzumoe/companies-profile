# companies-profile
Cosuno coding challenge
Create a simple React application that shows a list of construction companies, each with the
following information:
- Company name
- Logo (you may use a placeholder image, e.g. using https://placekitten.com/)
- Specialties (e.g. Excavation, Plumbing, Electrical)
- City
***
## prerequisites
- nodejs
- docker [optional]
- docker-compose[optional]  
***
## Assumptions
It is assumed as for running the application you are using Linux OS
***
## Running application through docker
- add new virtual host entries to system hosts file  
 **N.B.**   
  --- for windows and MacOs use manual insertions but for linux use the commands below
```bash
 sudo -- sh -c "echo 127.0.0.1 app.localhost >> /etc/hosts" 
 sudo -- sh -c "echo 127.0.0.1 api.localhost >> /etc/hosts"
```
- build images
```bash
$ docker-compose build
```  
- run container suites  
```bash
$ docker-compose up
```  
- stop containers suites
```bash
$ ctr+x // press ctr+x
```  
- run api test
```bash
$ docker-compose run api npm run test  -- --watchAll=false
```
- run app test
```bash
$  docker-compose run app npm test  -- --watchAll=false
```
***
## Running application in bare matal
- install libraries
```bash
 $ cd api && npm install && cd ..
 $ cd app && npm install && cd ..
```
- In new terminal/cmd console spin up application API
```bash
 cd api && npm start
```
- In new terminal/cmd console spin up application UI
```bash
 cd app && npm start
```

