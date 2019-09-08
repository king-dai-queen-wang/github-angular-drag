import { Component, OnInit,OnChanges,DoCheck,AfterContentInit,
	AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy,
	Input  } from '@angular/core';
import {SimpleChanges} from "@angular/core";

@Component({
  selector: 'app-life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.css']
})
export class LifeCycleChildComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

	@Input() name:string;
	@Input() user:{name:string} = {name:''}
	oldName:string;
	xxx:string
	loggerIndex:number = 0;

	logger(msg:string){
		console.log(`${this.loggerIndex++}--${msg}--`)
	}

  constructor() {
		this.logger('constructor里name的值是'+name)
	}

  ngOnInit() {
  	this.logger('ngOnInit')
  }
  ngOnChanges(changes: SimpleChanges){
  	let name = JSON.stringify(changes,null,2)
  	this.logger('ngOnChanges里name的值是'+name)
  }
  ngDoCheck(){
  	this.logger('ngDoCheck')
  }
  ngAfterContentInit(){
  	this.logger('ngAfterContentInit')
  }
  ngAfterContentChecked(){
  	this.logger('ngAfterContentChecked')
  }
  ngAfterViewInit(){
  	this.logger('ngAfterViewInit')
  }
  ngAfterViewChecked(){
  	this.logger('ngAfterViewCkecked')
  }
  ngOnDestroy(){
  	this.logger('ngOnDestory')
  }

}
