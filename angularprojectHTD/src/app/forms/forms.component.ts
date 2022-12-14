import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  exform: FormGroup;

  ngOnInit() {
    this.exform = new FormGroup(
      {
        'name': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'phone': new FormControl(
          null,
          [
            Validators.required,
            Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
          ]),
        'message': new FormControl(null, [Validators.required, Validators.minLength(10)])
      });
  }



  clicksub() {
    console.log(this.exform.value);
    this.exform.reset();
  }

}