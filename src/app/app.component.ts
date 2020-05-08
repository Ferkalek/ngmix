import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  users = [];

  constructor(
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.httpService.getUsers().subscribe(d => this.users = d.data);
  }
}
