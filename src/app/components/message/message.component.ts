import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  message:any = {
    '0000': 'System Error, please contact administrator',
    '0001': 'You are not authorized',
    '0002': 'Authentication Expired',
    '0003': 'You have no access.'
  };

  type: string = '';
  code: string = '';


  ngOnInit() {
    this.type = this.route.snapshot?.queryParams['type'];
    this.code = this.route.snapshot?.queryParams['code'];
  }

}
