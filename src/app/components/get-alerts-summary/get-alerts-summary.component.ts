import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-get-alerts-summary',
  templateUrl: './get-alerts-summary.component.html',
  styleUrls: ['./get-alerts-summary.component.css']
})
export class GetAlertsSummaryComponent implements OnInit {
  alertsSummaryForm = new FormGroup({
    physicalResourceID :new FormControl(),
    routingFlag :new FormControl(),
    alertStatus :new FormControl(),
    alertDefinitionStatus :new FormControl(),
    alertTypeSource :new FormControl(),
    alertPatternNumber :new FormControl(),
    alertTypeList :new FormControl(),
    alertOpenedDateList :new FormControl(),
    alertClosedDateList :new FormControl(),
  });
  
  openedOnly = '';
  closedOnly = '';


  // alertsSummaryForm: FormGroup | undefined;
  constructor() { }

  ngOnInit(): void {
    // this.createForm();
  }

  createForm() {
    this.alertsSummaryForm = new FormGroup({
      physicalResourceID :new FormControl(),
      routingFlag :new FormControl(),
      alertStatus :new FormControl(),
      alertDefinitionStatus :new FormControl(),
      alertTypeSource :new FormControl(),
      alertPatternNumber :new FormControl(),
      alertTypeList :new FormControl(),
      alertOpenedDateList :new FormControl(),
      alertClosedDateList :new FormControl(),
    });
  }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.alertsSummaryForm.value);
  }
  
}
