import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor() { }
  count: number = null;

  ngOnInit() {
    setTimeout(()=> this.count=1, 2000);
      setTimeout(()=> this.count++, 6000);
  }

}
