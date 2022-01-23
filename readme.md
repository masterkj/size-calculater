# Box size calculater
this app include one service that take as input width, height, length of a box, and get back the box size

in order to containerize the project, you should run 

```
docker-compose up
```

the box-sizeing service endpoints: 
- path: '/', Method: 'post', calculate box size
- path: 'api-docs', Method: 'get', swagger docs