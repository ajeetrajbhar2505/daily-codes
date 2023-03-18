import { Directive,ViewContainerRef,TemplateRef,Input } from '@angular/core';

@Directive({
  selector: '[toggle]'
})
export class ToggleDirective {
  constructor(public viewref:ViewContainerRef,public tempref:TemplateRef<any>) { }
  @Input() toggle: any = false;

  ngOnChanges(){
    if (this.toggle) {
      this.viewref.createEmbeddedView(this.tempref)
    } else {
      this.viewref.clear()
    }
  }

}
