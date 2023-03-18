import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {


  scrollnextFunction() {
    const scrollContainer:any = document.getElementById("scrollContainer");
    scrollContainer.scrollLeft += 180; // Change 100 to your desired scroll amount
  }

  scrollbackFunction() {
    const scrollContainer:any = document.getElementById("scrollContainer");
    scrollContainer.scrollLeft -= 180; // Change 100 to your desired scroll amount
  }


}
