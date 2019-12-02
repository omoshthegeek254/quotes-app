export class Quote {
    showDescription: boolean;
    constructor(public id: number,public quote: string,public description: string,public postyDate: Date){
      this.showDescription=false;
    }
  }