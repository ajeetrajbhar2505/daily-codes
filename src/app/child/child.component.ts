import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

   isDragging = false;
   startX:any;
   scrollLeft:any;

  ngOnInit(): void {
    const slider:any = document.getElementById('scrollContainer')
 
    
    slider.addEventListener('mousedown', (e:any) => {
      this.isDragging = true;
      this.startX = e.pageX - slider.offsetLeft;
      this.scrollLeft = slider.scrollLeft;
    });
    
    slider.addEventListener('mousemove', (e:any) => {
      if (!this.isDragging) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - this.startX) * 1; // adjust scrolling speed here
      slider.scrollLeft = this.scrollLeft - walk;
    });
    
    slider.addEventListener('mouseup', () => {
      this.isDragging = false;
    });
  }

  scrollnextFunction() {
    const scrollContainer:any = document.getElementById("scrollContainer");
    scrollContainer.scrollLeft += 180; // Change 100 to your desired scroll amount
  }

  scrollbackFunction() {
    const scrollContainer:any = document.getElementById("scrollContainer");
    scrollContainer.scrollLeft -= 180; // Change 100 to your desired scroll amount
  }


}
