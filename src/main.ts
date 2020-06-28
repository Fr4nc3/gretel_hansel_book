import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
// import { Cordova } from "angular-cordova";
// declare var device;
if (environment.production) {
  enableProdMode();
}

// const bootstrap = () => {
//   platformBrowserDynamic()
//     .bootstrapModule(AppModule)
//     .catch((err) => console.log(err));
// };

// Cordova.deviceready.subscribe(() => {
//   alert("ready");
//   console.log("we are ready!");
// });
// if (typeof window["cordova"] !== "undefined") {
//   document.addEventListener(
//     "deviceready",
//     () => {
//       alert("alert here" + device.platform);
//       bootstrap();
//     },
//     false
//   );
// } else {
//   bootstrap();
// }
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
