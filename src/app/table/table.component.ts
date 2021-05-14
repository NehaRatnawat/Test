import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';

import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChild('showTablePaginator', {read: MatPaginator}) showTablePaginator: MatPaginator;

  projectTableData = new MatTableDataSource();
  projectList = [];
  reportData = [];
  filterVal;
  opacittFull: boolean = true;
  public displayColomCompany = [];
  width: number ;
  showReportDataMObile = [];
  constructor() {
    this.displayColomCompany = ['Name', 'Email', 'Phone Number', 'Address'];
   }

  ngOnInit(): void {
  }

  fetchDetail() {
    var self = this;
    let docRef = firebase.firestore().collection('InformationCollection');
    docRef.onSnapshot(function(querySnapshot) {
      if(!querySnapshot.empty) {
        querySnapshot.forEach(function(doc) {
          self.projectList.push(doc.data());
        })
      }
      self.projectTableData.data = self.projectList;
      self.projectTableData.paginator = self.showTablePaginator;
      self.reportData = self.projectList;
      self.showReportDataMObile = self.projectList[5];
    })
  }

}
