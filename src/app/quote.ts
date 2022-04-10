export class Quote {
  public showQuoteDetails!:boolean;
  constructor( public id:number, public quoteText: string, public author:string, public submittedBy:string, public upvote:number, public downvote:number, public datePosted:Date ) {
    this.showQuoteDetails = false;
  }

}
