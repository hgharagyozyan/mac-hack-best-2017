import {Component, OnInit, TemplateRef, ViewChild, OnDestroy} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ChatService} from "./notification.service";

@Component({
  moduleId: module.id,
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  providers: [ChatService]
})
export class NotificationComponent implements OnInit, OnDestroy {

  constructor(private modal: NgbModal, private chatService: ChatService) {}
  count: number = null;

    messages = [];
    connection;
    message;

    @ViewChild('modalContent') modalContent: TemplateRef<any>;

  ngOnInit() {
      this.connection = this.chatService.getMessages().subscribe(message => {
          this.messages.push(message);
          console.log(message);
          this.count++;
      })
      // setTimeout(()=> this.count++, 4000);
  }

  onNotificationClick (): void {
      if (this.count){
        this.modal.open(this.modalContent, { size: 'lg' });
      }
      this.count=null;
}

    ngOnDestroy(): void {
        this.connection.unsubscribe();
    }

}
