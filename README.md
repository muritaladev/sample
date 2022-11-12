# Google Cloud Functions

### Features:

* Uses [Functions Framework](https://github.com/GoogleCloudPlatform/functions-framework-nodejs)
* Deploy shortcut

### Usage:

```bash
git clone https://github.com/Africa-FinTech-Ltd/afl.service.cloudfunctions cloudfunctions

cd cloudfunctions

npm run dev
```

deploy via gcloud as Cloud Function:

```bash
npm run deploy
```
As you develop a function, you should:

* Update the details in package.json


## Cloud Run

The same code which you can deploy on Cloud Functions can be deployed to the managed Cloud Run service.

To try it out on the web:

https://us-central1-inspired-victor-344313.cloudfunctions.net/test-func-project

(When deployed to gcp, it would be available)

## Technology stack

* TypeScript
* Node 18
* Google Cloud Functions