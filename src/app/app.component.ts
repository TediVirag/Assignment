import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'assignment';

  outsArr : Array<any> =[];
  constructor( private http : HttpClient, private dataService : DataService){
    
  }
 delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
  
  async onSubmit(data){
    this.http.post<any>('http://localhost:4201/api/interview/magic', data)
    .subscribe()

    await this.delay(10);
    
    this.dataService.getData().subscribe(
      (response) =>{
        this.outsArr = response.result;
      }
    )
  }
  
   
   
   
}
