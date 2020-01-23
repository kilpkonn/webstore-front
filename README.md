# webstore-front
_Originally created in ITI0203 course (2019)_

[![pipeline status](https://gitlab.com/kilpkonn/webstore-front/badges/master/pipeline.svg)](https://gitlab.com/kilpkonn/webstore-front/commits/master)
## Description

An Angular frontend for a webstore created for ITI0203 course.  
Backend can be found [here](https://github.com/kilpkonn/webstore-api)

**Currently deployed to: [https://www.flowerstore.ee](https://www.flowerstore.ee)**  
Public IP: [13.53.135.244](http://13.53.135.244) 

## How to run locally:

__Make sure you have:__
* Node.js (latest)
* npm

cd to project root  

Install npm modules:
```bash
npm install
```

Start frontend:

```bash
ng serve
```
You can find frontend at `localhost:4200`

Note that `proxy.conf.json` (in project root) is for development.  
To change production settings edit `./nginx/angular_proxy/proxy.conf.json`!

Analysis and server installation guides can be found in backend repo!

## Contributors
* Tavo Annus
* Taavi Jõõts
