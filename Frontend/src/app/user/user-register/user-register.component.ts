import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.registerationForm = this._fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.maxLength(10)]],
    }, {validators: this.passwordMatchingValidator});
  }


 passwordMatchingValidator(fg: FormGroup): {[s:string]:boolean}|null {
  if (fg.get('password')?.value === fg.get('confirmPassword')?.value) {
    return {notmatched: true };
  }
  return null;
}

 get userName(){
   return this.registerationForm.get('userName') as FormControl;
 }

 get email(){
  return this.registerationForm.get('email') as FormControl;
}

get password(){
  return this.registerationForm.get('password') as FormControl;
}

get confirmPassword(){
  return this.registerationForm.get('confirmPassword') as FormControl;
}

get mobile(){
  return this.registerationForm.get('mobile') as FormControl;
}

  onSubmit(){
    console.log(this.registerationForm);
    console.log(this.passwordMatchingValidator(this.registerationForm));
  }
}
