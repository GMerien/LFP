import { Component, OnInit } from '@angular/core';
import { ShutterService } from '../shutter.service';

@Component({
  selector: 'lfp-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent implements OnInit {

  constructor(private shutterService: ShutterService) { }

  ngOnInit(): void {
  }

  open(): void { this.shutterService.openShutter(); }
  close(): void { this.shutterService.closeShutter(); }
}
