import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  // @Input() 
  users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private usersService: UsersServiceService){}
  ngOnInit(){
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    // this.userSetToInactive.emit(id);
    this.usersService.onSetToInactive(id);
  }
}
