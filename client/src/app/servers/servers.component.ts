import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],

})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = false;
  serverDeletionStatus = false;
  serverName = '';
  activeServers = ['server 1', 'server 2'];

  constructor() {
    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = true;
    this.activeServers.push(this.serverName);
    setTimeout(() => {
      this.serverCreationStatus = false;
    }, 2000)
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onDeleteServerName(event: Event) {
    console.log(event)
    for(let i = 0; i < this.activeServers.length; i++){
      if((<HTMLInputElement>event.target).innerText === this.activeServers[i]){
        console.log((<HTMLInputElement>event.target).innerHTML);
        console.log(this.activeServers[i]);
        this.activeServers.splice(i, 1);
        break;
      }
    }
    this.serverDeleted();
  }

  serverDeleted() {
    this.serverDeletionStatus = true;
    setTimeout(() => {
      this.serverDeletionStatus = false;
    }, 2000)
  }

}