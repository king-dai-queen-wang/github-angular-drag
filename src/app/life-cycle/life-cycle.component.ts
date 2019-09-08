import { Component, OnInit, ViewChild} from '@angular/core';
import {LifeCycleChildComponent} from '../life-cycle-child/life-cycle-child.component'
@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {
	@ViewChild('child1')
  child22:LifeCycleChildComponent
  flag:boolean = true
	
	msg:string = '';
	user:{name:string} = {name: ''};
	ngOnInit(){
		this.child22.logger('haha')
	}

}
