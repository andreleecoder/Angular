import { Component, OnInit, OnChanges, DoCheck ,AfterContentInit, Input } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit, DoCheck ,AfterContentInit  {
 @Input() valorInicial:number=10
  constructor() {
    this.log('constructor')
   }
   ngOnChanges() {
     this.log('ngOnChanges')
     
   }

  ngOnInit() {
    this.log('ngOnInit')
  }

  ngDoCheck(){
    this.log('ngDoCheck')
    
  }
  ngAfterContentInit() {
    this.log('ngAfterContentInit')
  }
  private log(hook:string){
    console.log(hook)
  }

}
