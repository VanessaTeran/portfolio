import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-contacto",
  templateUrl: "./contacto.component.html",
  styleUrls: ["./contacto.component.css"]
})
export class ContactoComponent implements OnInit {
  public form: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      comment: [""]
    });
  }

  isInvalid(formControlName: string) {
    return (
      this.form.get(formControlName).invalid &&
      this.form.get(formControlName).touched
    );
  }
  send() {
    /*    this.form.setValue({
      name: 'Hola',
      email: '1234',
      comment: 'qweqweqwe',

    })*/
    //console.log(this.form.value);
  }
}
