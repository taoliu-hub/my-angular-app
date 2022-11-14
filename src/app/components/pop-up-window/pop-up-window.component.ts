import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pop-up-window',
  templateUrl: './pop-up-window.component.html',
  styleUrls: ['./pop-up-window.component.css']
})
export class PopUpWindowComponent implements OnInit {

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
