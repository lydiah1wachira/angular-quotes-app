import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote [] = [
    new Quote (1, 'Too much sanity may be madness — and maddest of all: to see life as it is, and not as it should be!')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
