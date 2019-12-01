export class Quote {
    showDescription: boolean;
    constructor(public id: number,public quote: string,public description: string){
      this.showDescription=false;
    }
  }