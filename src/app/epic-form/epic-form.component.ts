import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { passwordValidator } from '../validators/password.validator';

@Component({
  selector: 'app-epic-form',
  templateUrl: './epic-form.component.html',
  styleUrls: ['./epic-form.component.scss']
})
export class EpicFormComponent {
  rForm: FormGroup;
  countries = ['--Select Country-', 'USA', 'Slovakia', 'Czech republic', ];
  constructor(private  fb: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.rForm = this.fb.group({
      userName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.required],
      pass: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPass: ['', Validators.compose([Validators.required, passwordValidator(() => this.rForm && this.rForm.get('pass').value)])],
      dateOfBirth: '',
      gender: true,
      country: ['', Validators.required],
    });
  }

  logMe(): void {
    console.log(this.rForm.value);
  }

  changeToWoman(gender: boolean): void {
    if (gender) {
      this.rForm.patchValue({gender: false});
    }
  }
  changeToMan(gender: boolean): void {
    if (!gender) {
      this.rForm.patchValue({gender: true});
    }
  }
}
