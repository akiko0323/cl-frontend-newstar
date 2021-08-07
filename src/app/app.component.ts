import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MessageService } from "./message.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  Dashboard = "Dashboard";
  Heroes = "Heroes";
  constructor(
    public messageService: MessageService,
    public http: HttpClient,
  ) {}
  ngOnInit(){
    const dataUrl = "assets/data/dashboard-link.json";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", dataUrl, false);
    xhr.send();
    this.getData(JSON.parse(xhr.response));
  }

  getData(val) {
    this.Dashboard = val.dashboard;
    this.Heroes = val.heroes;
  }
  
}
