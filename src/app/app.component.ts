import { Component, OnInit, OnDestroy } from "@angular/core";
import { Cordova } from "angular-cordova";
declare var device;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  private title = "Gretel and Hansel";
  private deviceDetails = "";
  constructor() {}

  public onSubmit() {
    var device = (<any>window).device;
    this.deviceDetails = "";
    this.deviceDetails += "<br/>Cordova:" + device.cordova;
    this.deviceDetails += "<br/>model:" + device.model;
    this.deviceDetails += "<br/>platform:" + device.platform;
    this.deviceDetails += "<br/>uuid:" + device.uuid;
    this.deviceDetails += "<br/>version:" + device.version;
    this.deviceDetails += "<br/>manufacturer:" + device.manufacturer;
    this.deviceDetails += "<br/>isVirtual:" + device.isVirtual;
    this.deviceDetails += "<br/>serial:" + device.serial;
  }
  ngOnDestroy() {}
  ngOnInit() {
    this.title = "hanged";
    document.addEventListener(
      "deviceready",
      function () {
        alert("plain" + device.platform);
      },
      false
    );
    Cordova.deviceready.subscribe(() => {
      this.title = device.platform;
      alert("lala" + device.platform);
      console.log("ready from components");
    });
    // document.addEventListener(
    //   "deviceready",
    //   () => {
    //     console.log("component device");
    //     this.title = device.platform;
    //     console.log(device.platform);
    //   },
    //   false
    // );
    // (<any>document).addEventListener(
    //   "deviceready",
    //   function () {
    //     console.log("component devicew ");
    //     this.title = device.platform;
    //     console.log(device.platform);
    //   },
    //   false
    // );
    // document.addEventListener(
    //   "deviceready",
    //   function () {
    //     alert(device.platform);
    //   },
    //   false
    // );
  }
}
