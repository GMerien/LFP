import { Component, OnInit } from '@angular/core';
import { ShutterService } from '../shutter.service';

@Component({
  selector: 'lfp-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})

export class StatusComponent implements OnInit {

  connectionStatus: string;

  constructor(private shutterService: ShutterService) {
    this.connectionStatus = "not connected"
   }

  ngOnInit(): void {
    setInterval(() => { this.connectionStatus = (this.shutterService.status ? "connected" : "not connected"); }, 2000);
  }

}
