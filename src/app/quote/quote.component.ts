import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Too much sanity may be madness — and maddest of all: to see life as it is, and not as it should be!', ' Miguel de Cervantes Saavedra', 'Dumbledore', new Date(2021,3, 21), 0,0),
    new Quote(2,'Not all those who wander are lost.', 'J.R.R. Tolkein', 'potter', new Date(2021,5,28), 0,0),
    new Quote(3,'To live is the rarest thing in the world. Most people exist, that is all.', 'Oscar Wilde', 'Hermione', new Date(2020,1,15), 0,0),
    new Quote(4,'The world is not a wish-granting factory.', 'John Greene ', 'Snape', new Date(2019,10,28), 0,0),
    new Quote(5, 'The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.', 'Albert Einstein', 'Voldemort', new Date(2019,10,28), 0,0),
    new Quote(6, 'Some things scratch the surface while others strike at your soul.', ' Gianna Perada', 'Draco', new Date(2019,10,28), 0,0)
   
  
  ];

  preNumber!:number
  lastNumber!:number
  counterNumber!:number

  addNewQuote(quote: any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.datePosted = new Date(quote.datePosted)
    this.quotes.push(quote)
  }

  toggleQuoteDetails (index:any) {
    this.quotes[index].showQuoteDetails = ! this.quotes[index].showQuoteDetails;
  }

  deleteQuotes (isToDelete:boolean, index: number) {

    if(isToDelete) {
      let toDelete = confirm(`Are you sure you want to delete this quote?`)

      if(toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  highestUpvote(){
    this.preNumber = 0
    this.lastNumber = 0

    for(this.counterNumber=0 ; this.counterNumber < this.quotes.length; this.counterNumber++) {
      this.lastNumber = this.quotes[this.counterNumber].upvote;
      if(this.lastNumber > this.preNumber){this.preNumber = this.lastNumber}
    }
    return  this.preNumber
  }

  constructor() { }

  ngOnInit(): void {
  }

}
