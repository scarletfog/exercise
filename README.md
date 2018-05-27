### Start front-end React application
Application is divided into two parts. One is pure React front-end, powered by `webpack-dev-server` in development mode.

To start this application run command below and open your app on `http://localhost:8080`

```javascript
npm start
```

To test application, run

* `npm run test` - single run - good for CI or precook
* `npm run test:watch` - watches for changes, good for development




OPTIONAL FOR NOW:

### Start Express back-end
Second part of this application is back end written in Express. This is a place, where you provide API for front-end or/and server yours production application.

To start backend server, run npm command bellow and open `http://localhost:8181`

```javascript
npm run server
```
This is also watching for changes, so when you update some code on backend, you don’t have to restart the server, it does that automatically

__Every call which goes to `/api` is proxied to this backend__ so for example when you make a request to `/api/locales` on front-end, it will go to this express backend server using the same path

## Production

Running `npm run build` will create production ready application into `dist` folder
