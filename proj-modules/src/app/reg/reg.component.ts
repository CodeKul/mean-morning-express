import { RegService } from './reg.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Reg } from './reg';
import { ElementRef } from '@angular/core/src/linker/element_ref';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css'],
  providers: [RegService]
})
export class RegComponent implements OnInit {
 
  myObj = {
    nm : '',
    usNm : '',
    eml : '',
    pass : '',
    myPhoto : []
  }
  ev : EventEmitter<string>
  
  cnfPass : string;
  emlPtrn = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"

  // java - kotlin
  // python - go
  // js - typescript

  //machine learning 

  constructor(
    private regService: RegService
  ) { }

  ngOnInit() {
  }

  onSubmit(frm: any) {

    console.log(this.myObj)

    this.regService.reg(frm.value as Reg).subscribe(
      res => console.log(res),
      err => console.log(err),
      () => console.log(`On Complete`)
    )
  }

  onFileSelect(ev) {
    this.myObj.myPhoto = ev.srcElement.files
    console.log(ev.srcElement.files)
  }
}
