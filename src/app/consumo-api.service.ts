import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {
  private apiUrl = 'http://localhost:4000'; // substitua pela sua URL da API

  constructor(private http: HttpClient) { }

  getUltimaCarteirinha(): Observable<any> {
    return this.http.get(`${this.apiUrl}/carteirinha`);
  }

  postCadastro(dados: any): Observable<any> {
    console.log(dados);
    return this.http.post(`${this.apiUrl}/usuario`, dados);
  }
}
