import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AutofillMonitor} from '@angular/cdk/text-field';


@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.css']
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private _autofill: AutofillMonitor) {


  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  // new form 
  // @ViewChild('first', {read: ElementRef}) firstName?: ElementRef<HTMLElement>;
  // @ViewChild('last', {read: ElementRef}) lastName?: ElementRef<HTMLElement>;
  // firstNameAutofilled?: boolean;
  // lastNameAutofilled?: boolean;

  // ngAfterViewInit() {
  //   this._autofill
  //     .monitor(this.firstName!)
  //     .subscribe(e => (this.firstNameAutofilled = e.isAutofilled));
  //   this._autofill
  //     .monitor(this.lastName!)
  //     .subscribe(e => (this.lastNameAutofilled = e.isAutofilled));
  // }

  // ngOnDestroy() {
  //   this._autofill.stopMonitoring(this.firstName!);
  //   this._autofill.stopMonitoring(this.lastName!);
  // }
  
}

export interface DialogData {
  country: string;
  country_code: string;
}
