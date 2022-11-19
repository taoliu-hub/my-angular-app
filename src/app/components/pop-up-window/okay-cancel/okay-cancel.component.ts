import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-okay-cancel',
  templateUrl: './okay-cancel.component.html',
  styleUrls: ['./okay-cancel.component.css']
})
export class OkayCancelComponent implements OnInit {

  title:string = '';
  message:string = '';

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }


  cancel() {
    this.activeModal.close('cancel');
  }

  proceed() {
    this.activeModal.close('proceed');
  }

}
