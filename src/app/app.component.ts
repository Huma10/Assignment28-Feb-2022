import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  result: any = '';
  srtButton = ['SQRT'];
  allButtons: string[] = ['AC', 'CE'];
  buttons: string[] = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    '.',
    '0',
    '=',
    '+',
    '**',
    'SQRT',
  ];

  prevValeu: string = '';
  currentValue: string = '';

// Call Expression::->

  callExpression(value: string) {
    console.log("value is "+value);
    if(value=="SQRT"){
      this.result = Math.sqrt(this.result);
      this.result = this.result.slice(0, -1);
    }
    if (this.result != '') {
      this.prevValeu = this.currentValue;
      this.currentValue = value;
    }
    if (value == 'AC') {
      this.result = '';
    } else if (value == 'CE') {
      this.result =
        this.prevValeu != '=' ? this.result.slice(0, -1) : this.result;
    } else if (value == '=') {
      this.result = eval(this.result);
      console.log('value is ' + this.result);
    }
     else {
      this.result += value;
      console.log('Here' + this.result + 'Here ' + value);
    }
  }

  // Check Box Validation'
  Course = [
    { CourseName: 'JavaScript', Fees: 20000, isselected: false },
    { CourseName: 'Angular', Fees: 30000, isselected: false },
    { CourseName: 'React', Fees: 40000, isselected: false },
    { CourseName: 'Node.js', Fees: 60000, isselected: false },
    { CourseName: 'VueJS', Fees: 80000, isselected: false },
  ];

  sum: number = 0;

  onChange(items: number, event: any) {
    //this.sum = this.sum + items;

    if (event.target.checked) {
      this.sum = this.sum + items++;
    } else {
      this.sum = this.sum - items--;
    }
    console.log(this.sum);
  }
}
