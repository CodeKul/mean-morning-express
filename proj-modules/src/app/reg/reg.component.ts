import { RegService } from './reg.service';
import { Component, OnInit } from '@angular/core';
import { Reg } from './reg';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css'],
  providers: [RegService]
})
export class RegComponent implements OnInit {
 
  emlPtrn = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"

  constructor(
    private regService: RegService
  ) { }

  ngOnInit() {
  }

  onSubmit(frm: any) {
    console.log(frm)

    this.regService.reg(frm.value as Reg).subscribe(
      res => console.log(res),
      err => console.log(err),
      () => console.log(`On Complete`)
    )
  }
}
