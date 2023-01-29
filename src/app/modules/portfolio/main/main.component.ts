import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  isNavExpanded:boolean = false;

  expandNav():void{
    this.isNavExpanded = !this.isNavExpanded;
    console.log(this.isNavExpanded);
  }
}
