import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public  router: Router) {
   }

  title = 'assigmnent2';

  
  showTable() {
    this.router.navigate(['/show-table']);
  }
}
