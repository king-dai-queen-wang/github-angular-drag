import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import {PriceQuote} from '../model/priceQuote.model'
@Component({
  selector: 'app-priceq-quote',
  templateUrl: './priceq-quote.component.html',
  styleUrls: ['./priceq-quote.component.css']
})
export class PriceqQuoteComponent implements OnInit {
	stockCode:string = 'IBM';
	price:number;

	@Output()
	lastPrice:EventEmitter<PriceQuote> = new EventEmitter();
	@Output()
	buy: EventEmitter<PriceQuote> = new EventEmitter()
  constructor() {
  	setInterval(()=>{
  		let priceQuote:PriceQuote = new PriceQuote(this.stockCode, 100*Math.random())
  		this.price = priceQuote.lastPrice
  		this.lastPrice.emit(priceQuote)
  	},1000)
  }
  buyStock(event){
  	this.buy.emit(new PriceQuote(this.stockCode, this.price))
  }
  ngOnInit() {

  }

}
