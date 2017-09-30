import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private modal: NgbModal) {}
  count: number = null;
    @ViewChild('modalContent') modalContent: TemplateRef<any>;

  ngOnInit() {
    setTimeout(()=> this.count=1, 2000);
      setTimeout(()=> this.count++, 6000);
  }

  onNotificationClick (): void {
    this.modal.open(this.modalContent, { size: 'lg' });
}

}
