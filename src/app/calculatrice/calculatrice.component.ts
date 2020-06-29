import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'mon-entete-personnalise':'maValeur'
  })
};
@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent implements OnInit {

  constructor(private  httpClient:HttpClient) { }

  ngOnInit() {
  }

  public num1:number;
  public num2:number;
  public result:any;
  public a :number;
  public res: any;

  addition() {

   // this.result = this.num1 + this.num2;
   this.httpClient.get("http://localhost:9090"+"/add/"+this.num1+"/"+this.num2).subscribe(n => this.result = n);
    this.res = parseInt(this.result, 10);


  }
  subtract() {
    this.result = this.num1 - this.num2;
  }
  multiply() {
    this.result = this.num1 * this.num2;
  }
  divide() {
    this.result = (this.num1) / (this.num2);
  }
  factoriel()
  {
    this.httpClient.get("http://localhost:9090"+"/factoriel/"+this.a).subscribe(n => this.result = n);
    this.res = parseInt(this.result, 10);
  }
}
