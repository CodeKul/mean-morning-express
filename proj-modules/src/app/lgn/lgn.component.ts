import { LgnService } from './lgn.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-lgn',
  templateUrl: './lgn.component.html',
  styleUrls: ['./lgn.component.css'],
  providers : [LgnService]
})
export class LgnComponent implements OnInit {

  lgnFrm: FormGroup
  preData = {
    usNm: '',
    pass: ''
  }

  constructor(
    private bldr: FormBuilder,
    private lgn : LgnService
  ) { }

  ngOnInit() {

    // web service call
    let compUsNm = Validators.compose([Validators.required, Validators.email])
    let cmpPass = Validators.compose([Validators.required, this.chkUprFst])

    this.lgnFrm = this.bldr.group({
      usNm: [this.preData.usNm, compUsNm],
      pass: [this.preData.pass, cmpPass]
    })
  }

  onSubmit() {
    console.log(this.lgnFrm)
    this.lgn.login(this.preData.usNm, this.preData.pass).subscribe(
      rs => console.log(rs),
      err => console.log(err)
    )
  }

  chkUprFst(cntrl : AbstractControl) : ValidationErrors | null {
    if(cntrl.value.charAt(0) == 'a' || cntrl.value.charAt(0) == 'A') {
      return null
    }
    return { msg : 'Password should start from a or A'}
  }
}
