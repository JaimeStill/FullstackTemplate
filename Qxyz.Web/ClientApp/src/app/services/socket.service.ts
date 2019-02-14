import { Injectable } from '@angular/core';
import { HubConnectionBuilder } from '@aspnet/signalr';
import { BehaviorSubject } from 'rxjs';
import { SnackerService } from './snacker.service';

@Injectable()
export class SocketService {
  private connection = new HubConnectionBuilder().withUrl('/socket').build();
  private connected = new BehaviorSubject<boolean>(false);
  private error = new BehaviorSubject<boolean>(false);

  connected$ = this.connected.asObservable();
  error$ = this.error.asObservable();

  constructor(
    private snacker: SnackerService
  ) {
    this.connection.on('action', (message: string) => {
      snacker.sendWarningMessage(message);
    });

    this.connection.start()
      .then(() => this.connected.next(true))
      .catch((err) => {
        snacker.sendErrorMessage(err);
        this.error.next(true);
      });
  }

  trigger = (message: string) => {
    if (!(this.error.value)) {
      this.connection.invoke('trigger', message);
    }
  }
}
