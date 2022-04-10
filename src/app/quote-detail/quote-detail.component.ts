import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input()quote!:Quote;
  @Output () isToDelete = new EventEmitter<boolean> ()


  quoteDelete(remove:boolean) {
    this.isToDelete.emit(remove)
  }

  upvote(){
    this.quote.upvote+=1;
  }

  downvote(){
    this.quote.downvote+=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
