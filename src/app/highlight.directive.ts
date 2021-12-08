import { Directive,ElementRef,HostListener,HostBinding,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) {
    el.nativeElement.style.color="red";
  
   }
   ngOnInit(){
     this.renderer.setStyle(this.el.nativeElement,'background-color','pink');
   }
   
//@HostBinding("style.backgroundColor")bgColor;
//@HostListener('mouseenter') mouseEnter(){
  //this.changeColor("blue");
  //this.bgColor="khaki";
//}
//changeColor(color:string){
 // this.el.nativeElement.style.color=color;
//}
//@HostListener('mouseleave') mouseleave(){
  //this.changeColor("pink");
//}
//changColor(color:string){
  //this.el.nativeElement.style.color=color;
//}


}
