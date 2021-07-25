import { Component,OnChanges,OnInit, Input, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy, OnChanges,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnChanges,DoCheck {
@Input() parentData:string;
  constructor() { }

  ngOnInit(){
    console.log("oninit called")
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked")
  }
  ngDoCheck(){
    console.log("ngDoCheck")
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked")
  }
  ngOnChanges() {
    console.log("ngOnChanges");
  }
  ngOnDestroy(){
    console.log("destroying child...")
  }
}
