import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactive(){
    this.activeToInactiveCounter++;
    console.log("activeToInactiveCounter is:"+this.activeToInactiveCounter);
  }

  incrementInsctiveToActive(){
    this.inactiveToActiveCounter++;
    console.log("inactiveToActiveCounter is:"+this.inactiveToActiveCounter);
  }

  constructor() { }
}
