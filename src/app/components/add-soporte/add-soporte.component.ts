import { Component, OnInit } from '@angular/core';
import { SoporteService } from 'src/app/services/soporte.service';

import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-soporte',
  templateUrl: './add-soporte.component.html',
  styleUrls: ['./add-soporte.component.css']
})
export class AddSoporteComponent implements OnInit {

  formulario: FormGroup;

  faPaperPlane = faPaperPlane;
  
  /*soporte = {
    fullname: '',
    namecompany: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  };*/
  submitted = false;
  myalert = false;

  constructor(private soporteService: SoporteService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      fullname: ['',Validators.required],
      namecompany: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      phone: ['',Validators.required],
      category: ['',Validators.required],
      message: ['',Validators.required]
    });
  }

  get f() {return this.formulario.controls;}

  onSubmit() {
    this.submitted = true;
    if(this.myalert) {
      this.myalert = false;
    }
    if(this.formulario.invalid) {
      return
    }
    const data = {
      fullname: this.formulario.value.fullname,
      namecompany: this.formulario.value.namecompany,
      email: this.formulario.value.email,
      phone: this.formulario.value.phone,
      category: this.formulario.value.category,
      message: this.formulario.value.message
    };
    this.soporteService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.myalert = true;
          this.submitted = false;
          this.formulario.reset();
        },
        error => {
          console.log(error);
        });
  }

  /*saveSoporte(): void {
    const data = {
      fullname: this.soporte.fullname,
      namecompany: this.soporte.namecompany,
      email: this.soporte.email,
      phone: this.soporte.phone,
      category: this.soporte.category,
      message: this.soporte.message
    };

    this.soporteService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newSoporte(): void {
    this.submitted = false;
    this.soporte = {
      fullname: '',
      namecompany: '',
      email: '',
      phone: '',
      category: '',
      message: ''
    };
  }*/

}
