import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class CoreService {
  getUploadOptions = (): HttpHeaders => {
    const headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.delete('Content-Type');
    return headers;
  }

  getTextOptions = (): HttpHeaders => {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'text/plain');
    headers.delete('Pragma');
    return headers;
  }
}
