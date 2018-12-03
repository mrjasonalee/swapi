import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // private submitForm: FormControl
name:string = '';


constructor(private httpClient: HttpClient) { }
public data : any
  submit(event:any){
    this.name = event.target.value;
  }

  ngOnInit(){ }
search(menu: string, getData: string) {
    this.httpClient.get(`https://swapi.co/api/${menu}/?search=${getData}`)
    .subscribe(
      (data) => {
        this.data = data;
        console.log(data)

      }
    )
  
    }
  }