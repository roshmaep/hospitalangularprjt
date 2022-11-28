import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {

  name=""
  patientid=""
  address=""
  mobile=""
  doa=""
  image=""
  dname=""

  readValues=()=>
  {
    let data:any={
    "name":this.name,"patientid":this.patientid,"address":this.address,"mobile":this.mobile,"doa":this.doa,"image":this.image,"dname":this.dname}
    console.log(data)
  }
}
