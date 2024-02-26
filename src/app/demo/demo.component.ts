import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,DoCheck,Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit,OnChanges,DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy{

  @Input() value: string = 'procademy'
  //We use Input() decorator to pass data from Child component to Parent component

  constructor(){
    console.log('Constructor called!');
    //console.log(this.value);
    // This was not updated!
  }

  ngOnChanges(change: SimpleChanges){ // Lifecycle Hook
    console.log('ngOnChanges called!');
    console.log(change);
  }
  //First lyfecicle hoon which gets called

  ngOnInit(){
    console.log('ngOnInit called!') // Lifecycle Hook
    //console.log(this.value);
                //But now is updateed!
    // Because ngOnInit is perfect place where you want
    // to add any initialization logic for your component
  }

  ngDoCheck(){ // Lifecycle Hook
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit(){ // Lifecycle Hook
    console.log('ngAfterContentInit called!')
  }

  ngAfterContentChecked(){  // Lifecycle Hook
    console.log('ngAfterContentChecked called!')
  }

  ngAfterViewInit(){  // Lifecycle Hook
    console.log('ngAfterViewInit called!')
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called!')
  }
}

