import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-lgn',
  templateUrl: './lgn.component.html',
  styleUrls: ['./lgn.component.css']
})
export class LgnComponent implements OnInit {

  lgnFrm : FormGroup

  constructor(
    private bldr : FormBuilder
  ) { }

  ngOnInit() {
  }
}
