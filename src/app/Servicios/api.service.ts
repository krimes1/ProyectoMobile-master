import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // Método para enviar una solicitud desde el teléfono emisor
  sendRequest(sender: string, receiver: string, data: any): Observable<any> {
    const url = `http://receiver-url.com/api/receive-request`; // Cambia con la URL del receptor
    const body = {
      sender: sender,
      receiver: receiver,
      data: data,
    };
    return this.http.post(url, body);
  }

  // Método para recibir la solicitud en el teléfono receptor
  receiveRequest(requestData: any): Observable<any> {
    const url = `http://sender-url.com/api/send-request`; // Cambia con la URL del emisor
    return this.http.post(url, requestData);
  }
}

