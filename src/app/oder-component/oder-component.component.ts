import { Component, OnInit,Input } from '@angular/core';
import{PriceQuote} from '../model/priceQuote.model'
@Component({
  selector: 'app-oder-component',
  templateUrl: './oder-component.component.html',
  styleUrls: ['./oder-component.component.css']
})
export class OderComponentComponent implements OnInit{
	// @Input()
	// stockCode:string;

	@Input()
	amount:number;

	@Input()
	priceQuote: PriceQuote;

  constructor() { }

  ngOnInit() {
  }

}
