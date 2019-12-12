# iti0203-2019-project (team 06)

[![pipeline status](https://gitlab.cs.ttu.ee/tajoot/iti0203-2019-project-front/badges/master/pipeline.svg)](https://gitlab.cs.ttu.ee/tajoot/iti0203-2019-project-front/commits/master)

## Description

An Angular frontend for a webstore created for ITI0203 course.

**Currently deployed to: [https://www.flowerstore.ee](https://www.flowerstore.ee)**  
Public IP: [13.48.149.235](http://13.48.149.235) 

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
