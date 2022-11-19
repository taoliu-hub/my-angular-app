import { Injectable } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { OkayCancelComponent } from './components/pop-up-window/okay-cancel/okay-cancel.component';

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
    const viewModal = this.modalService.open(OkayCancelComponent, { size: 'lg' });
    // const viewModal = this.modalService.open(MessageComponent, { windowClass: 'pop-class' });  // Customize class style
    viewModal.componentInstance.title = title;
    viewModal.componentInstance.message = message;
    return viewModal;
  }

}
