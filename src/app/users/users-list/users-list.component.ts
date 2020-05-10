import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users = [];

  constructor(
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.httpService.getUsers().subscribe(d => this.users = d.data);
  }

}
