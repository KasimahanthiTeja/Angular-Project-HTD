import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  FirstName = "Kasimahanthi";
  LastName = "Teja";

  x = 50;
  y = 45;
  Add(): number {
    var res = this.x + this.y;
    return res;
  }

  Bonus = 4.40;

  btntext = "Please sign in!";

  isDisabled: boolean = true;

  clickcount = 0;
  clickme() {
    this.clickcount++
  }
  Address = ""
  clearAdd() {
    this.Address = ""
  }
  x1 = 0;
  y1 = 0;
  add(): number {
    var result = this.x1 + this.y1
    return result;
  }


  buttonDisabled = true;

  nameDetails = 'The name is Bond <b> James Bond</b> ';

  color = 'indianred';

  colors = 'blue';
  fontSize = '15px';
  opacity = 0.7;

  styles = {
    color: 'red',
    fontSize: '50px',
    opacity: 0.7,
  }

  pressFunction() {
    alert('You just pressed a key')
  }

  upFunction() {
    alert('You just pressed UP a key')
  }
  downFunction() {
    alert('You just pressed a Down key')
  }

  clickFunction() {
    alert('You just clicked a button')
  }

  items = ["GfG 1", "GfG 2", "GfG 3", "GfG 4"];

  mystyle = {
    width: '20px',
    background: 'yellow',
    color: 'red'
  }
  addstyles() {
    this.mystyle['color'] = 'white';
    this.mystyle['background'] = 'red';
  }
}
