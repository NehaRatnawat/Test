import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  name: string ;
  email: string ;
  phoneNumber: string ;
  address: string ;
  errorMessage: string;
  constructor() {
    console.log('table');
   }

  ngOnInit(): void {
  }

  submit() {
    if(this.name && this.email && this.phoneNumber && this.address) {
      const docRef = firebase.firestore().collection('InformationCollection');
      docRef.add({
        'name' : this.name,
        'email' : this.email,
        'phoneNumber' : this.phoneNumber,
        'address': this.address,
        'timestamp' : firebase.firestore.FieldValue.serverTimestamp(),
      }).then(function() {
      });
    } else {
      this.errorMessage = 'Fill enter all field value';
    }
  }

}
