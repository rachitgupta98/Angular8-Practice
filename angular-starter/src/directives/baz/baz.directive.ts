import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2,Attribute} from '@angular/core';
import { BtnServiceService } from 'src/properties/btn-service.service';

@Directive({
  selector: '[appBtn]'
})
export class BazDirective {
  // @Input() color: string='white';cd angular-starter
  @HostBinding("style.padding") basic_padding;
  @HostBinding("style.backgroundColor") basic_bgColor;
  @HostBinding("style.borderWidth") basic_border;
  @HostBinding("style.borderRadius") basic_borderRadius;
  @HostBinding("style.boxShadow") basic_boxShadow;
  @HostBinding("style.outline") basic_outline;
  constructor(private el:ElementRef, private render:Renderer2,@Attribute('color') public color: string,private services:BtnServiceService) {
    // console.log(el);
    // console.log(this.color)
    //this.basic_padding=services.buttonCSS.padding;
    
  }
  

  //mouser over
  @HostListener('mouseover') onMouseOver() {
    //let part = this.el.nativeElement.querySelector('.card-text');
    this.render.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    this.render.setStyle(this.el.nativeElement, 'transform', 'scale(0.99)');
  }
  @HostListener('mouseout') onMouseOut() {
    this.render.setStyle(this._getHostElement(), 'transform', 'none');
  }
  @HostBinding('style.backgroundColor')
  get colors(){
    console.log("getting")
    return this.color;
  }
  _getHostElement(){
    return this.el.nativeElement;
  }
  // @HostListener('click') myclick(){
  //  // this.render.setStyle(this.el.nativeElement,'outline',"none");

  //   //this.render.setStyle(this.el.nativeElement,'color',"red");
   
  //   console.log(this.variant);
  // }


  // ngAfterViewInit():void{
  //   if(this.color != 'white'){
  //     this.el.nativeElement.style.color='white';
  //   }
  //   this.color = this.color || 'white'; 
  //   this.el.nativeElement.style.backgroundColor=this.color;
  // }
}
