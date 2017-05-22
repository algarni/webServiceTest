import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  cities: any[];
  url: string = 'http://78.93.66.138/MadarMobileAppServicesMirror/WebServices/MadarWebServicesMirror.asmx/GetAllCities';

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    this.http.get(this.url)
      .subscribe(res => {
          this.cities = res.json();
          console.log(this.cities);
      });
  }
}
