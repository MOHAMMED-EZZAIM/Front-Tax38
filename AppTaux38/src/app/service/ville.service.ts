import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ville } from '../module/ville';

@Injectable({
  providedIn: 'root'
})
export class VilleService{

  public villes: any; // Use $ to indicate it's an Observable

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

  }
  getVilles(): any {
    return   this.villes = this.http.get("http://localhost:8090/api/ville/");
  }

  public deleteVille(code: string):any{
    return this.http.delete(`http://localhost:8090/api/ville/code/${code}`);
  }
}
