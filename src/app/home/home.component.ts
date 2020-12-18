import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData: any = [];
  constructor() { }
  success: string;
  error: string;
  isEditData :Boolean = true;
  ngOnInit(): void {
    localStorage.setItem('regUser',JSON.stringify(this.userData))
  }
  saveDataToLocalStorage() {
    let fName = $('#fName').val();
    let LName = $('#lName').val();
    let mobileNo = $('#mobileNo').val();
    let dob = $('#dob').val();
    let email = $('#email').val();
    let qualification = $('#qualification').val();

    this.userData.push({
      firstName: fName,
      lastName: LName,
      mobileNo: mobileNo,
      dob: dob,
      email: email,
      qualification: qualification,
      isEditData :true
    })
    localStorage.setItem('userData',JSON.stringify(this.userData))
    this.success = "Data Save successfully";
    this.clearData();
  }
  clearData() {
    $('#fName').val("");
    $('#lName').val("");
    $('#mobileNo').val("");
    $('#dob').val("");
    $('#email').val("");
    $('#qualification').val("");
    this.success = "";
  }
  editUserDetails(index,item){
    item.isEditData = !item.isEditData;
  console.log(' this.isEditData : ',  this.isEditData );
  }
  deleteRecord(index){
    this.userData.splice(index,1)
  }
}
