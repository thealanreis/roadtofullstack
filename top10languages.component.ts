import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 't10l',
  templateUrl: './top10languages.component.html',
  styleUrls: ['./top10languages.component.scss']
})
export class Top10languagesComponent implements OnInit {

  languages;

  constructor(private http: HttpClient) {    
   }

  ngOnInit(): void {
  }

  getLanguages(){
        this.http.get('http://YOUR_GOOGLE_CLOUD_EXTERNAL_IP:5000').subscribe(result => this.languages = result);
        console.log(this.languages);
  }

}
