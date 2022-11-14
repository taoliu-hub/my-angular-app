import { Injectable } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { MessageComponent } from './components/message/message.component';
import { PopUpWindowComponent } from './components/pop-up-window/pop-up-window.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  };

  /**
   * Ask user to confirm an action. `message` explains the action and choices.
   * Returns observable resolving to `true`=confirm or `false`=cancel
   */
  confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'Is it OK?');
    return of(confirmation);
  };

  noAccess(title: string, message: string) {
    const viewModal = this.modalService.open(PopUpWindowComponent, { size: 'lg' });
    // const viewModal = this.modalService.open(MessageComponent, { windowClass: 'pop-class' });  // Customize class style
    viewModal.componentInstance.title = title;
    viewModal.componentInstance.message = message;
    return viewModal;
  }

}
