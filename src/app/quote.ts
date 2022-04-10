export class Quote {
  public showQuoteDetails!:boolean;
  constructor( public id:number, public quoteText: string, public author:string, public submittedBy:string,  public datePosted:Date, public upvote:number, public downvote:number, ) {
    this.showQuoteDetails = false;
  }

}
