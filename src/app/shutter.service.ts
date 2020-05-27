import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ShutterService {
  adr: string;
  status: boolean;

  takePicture(duration: string): void {
    if (this.status) {
      this.httpClient
        .post(this.adr + '/shutter/take?duration=' + duration, null)
        .subscribe(
          () => {
            console.log("Taking picture")
          },
          (error) => {
            console.log(error);
          }
        );
    }
    else {
      console.log("Cannot open the shutter : disconected");
    }
  }

  openShutter(): void {
    if (this.status) {
      this.httpClient
        .post(this.adr + "/shutter/open", null)
        .subscribe(
          () => {
            console.log("Shutter opened")
          },
          (error) => {
            console.log(error);
          }
        );
    }
    else {
      console.log("Cannot open the shutter : disconected");
    }
  }

  closeShutter(): void {
    if (this.status) {
      this.httpClient
        .post(this.adr + "/shutter/close", null)
        .subscribe(
          () => {
            console.log("Shutter closed")
          },
          (error) => {
            console.log(error);
          }
        );
    }
    else {
      console.log("Cannot close the shutter : disconected");
    }
  }

  getStatus(): void {
    this.httpClient
      .get(this.adr + "/shutter/connected", { responseType: 'text'})
      .subscribe(
        (response) => {
          console.log(response);
          this.status = true;
        },
        (error) => {
          console.log(error);
          this.status = false;
        }
      )
  }

  constructor(private httpClient: HttpClient) {
    this.adr = "http://10.42.0.158"

    setInterval(() => { this.getStatus() }, 200);

  }
}
