// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: "AIzaSyBc0yW-LZYmUAQ9TuFxH8uHgMDLbjwCKnw",
      authDomain: "firechat-39e6f.firebaseapp.com",
      databaseURL: "https://firechat-39e6f.firebaseio.com",
      projectId: "firechat-39e6f",
      storageBucket: "firechat-39e6f.appspot.com",
      messagingSenderId: "750352860415"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
