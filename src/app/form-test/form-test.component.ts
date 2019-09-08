import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {PriceQuote} from '../model/priceQuote.model'
const  NAME_REXGEP = new RegExp('^[0-9]+$')
class CurContact{
	constructor(public lastName:string, public firstName:string,public age:number,public other:number){
	}
}
 function validateUserName(c: FormControl){
	return NAME_REXGEP.test(c.value)?null:{
		userName:{
			valid: false,
			errorMsg: '用户名必须是数字'
		}
	}
}
@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})

export class FormTestComponent implements OnInit {

	public customForm:FormGroup;
	// console.log(curContact)
	stock:number;
  priceQuote:PriceQuote;

	submit(e,v){
		console.log(v,this.customForm)
	}

  constructor() {
		this.priceQuote = new PriceQuote('moren',0)
  }
  priceHandler(event:PriceQuote){
 		this.priceQuote.lastPrice = event.lastPrice
	 }
 buyHandler(event:PriceQuote){
 	this.priceQuote = event
 }
  ngOnInit() {

  	this.customForm = new FormGroup({
  		xx: new FormGroup({
  			firstName: new FormControl('12',validateUserName),
		  	other: new FormControl('1',[Validators.required]),
		  	age: new FormControl(1,[Validators.required]),
		  }),
	  	lastName: new FormControl('1',[Validators.required])
	  })
  };

}
