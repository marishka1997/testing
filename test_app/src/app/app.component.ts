import { Component } from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'test_app';
  // name: string = 'Alla';
  // age: number = 55;

  // my_name: string = 'Mariam';
  // my_surname: string = 'Gasparian';

  // count: number = 0
  // increase(): void {
  // this.count++
  // console.log();
  // }

  // another_name: string = 'Vakhtang';


  // typeInputEl: string = 'text';



//   imageUrl= '../assets/puppies.jpg';

//   btnClick= 'submit';

//   onSubmit(): void {
//     alert('Woof-woof! Ruff-ruff!')
//   }

//   anyText = 'Write something!'


// my_name="Mariam"
// my_surname="Gasparian"

secondInputValue: string = "";

// OnFirstValueInputed(event: Event) {
//   console.log(event);
//   console.log((<any>event).target.value);
//   console.log((<any>event).target.classList.length);
//   console.log("event.data = " + (<any>event).data);
//   console.log((<any>event).data);
//   console.log((<any>event).type);
//   console.log((<any>event).detail);
//   console.log((<any>event).srcElement.baseURI);
//   console.log((<any>event).target.clientHeight);
//   console.log("event.srcElement = " + (<any>event).srcElement);
//   console.log("Hello")
//   let value: string = (<HTMLInputElement>(event.target)).value;
//   console.log("Value from Input Field = " + value);

//   if (value == "green") {
//     this.secondInputValue = "apple";
//   }
// }

firstValue: string = "";

OnKeyUp(event: Event) {
  // console.log(event);
  // console.log("Key Up!");

let keyCode = (<any>event).code;

if(keyCode == "Enter") {
  if (this.firstValue == "green") {
    this.secondInputValue = "apple";
  }
}
}

OnFirstValueInputed(event: Event) {
  this.firstValue = (<HTMLInputElement>(event.target)).value;
  //   console.log("Value from Input Field = " + firstValue);
}
}
