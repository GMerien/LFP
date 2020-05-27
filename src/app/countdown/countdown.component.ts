import { Component, OnInit } from '@angular/core';
import { ShutterService } from '../shutter.service';

@Component({
  selector: 'lfp-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  duration: string = "0";
  buttonDisabled: boolean = false;

  constructor(private shutterService: ShutterService) { }

  ngOnInit(): void {
  }

  takePicture(): void { 
    this.shutterService.takePicture(this.duration); 
    //this.buttonDisabled = true;
  }

}