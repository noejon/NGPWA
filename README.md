# NGPWA
Playing around with PWA in Angular 5


https://medium.com/google-developer-experts/a-new-angular-service-worker-creating-automatic-progressive-web-apps-part-2-practice-3221471269a1

https://medium.com/codingthesmartway-com-blog/angular-5-service-worker-b722e571e306

npm install -g @angular/cli 1.6+

ng new [name] --service-worker

## Checks

If the installation was successful the .angular-cli.json file should have
```json
"apps": [{
  "serviceWorker": true
}]
```

## Work in production

Service workers are only working in production mode.

Install serve to serve production:
npm install -g serve

run: ng build --prod
then: serve ./dist

In the terminal you should now see

Serving!
- Local: http://localhost:5000
- On your Network: http://xxx.xxx.xxx.xxx:5000