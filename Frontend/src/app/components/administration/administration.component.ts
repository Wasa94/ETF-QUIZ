import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  displayedColumns: string[] = ['username', 'name', 'type'];
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>([]);

  constructor(private http: HttpClient, private dataService: DataService) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.http.get<User[]>(this.dataService.backendUrl + '/users').subscribe(
      data => {
        this.dataSource = new MatTableDataSource<User>(data);
        this.dataSource.paginator = this.paginator;
      },
      error => {

      }
    );
  }
  selectedRow;

  selectRow(row) {
    this.selectedRow = row;
    // more stuff to do...
  }

  approve(status: boolean) {
    this.http.put(this.dataService.backendUrl + '/users/' + this.selectedRow.username, {status}).subscribe(
      data => {
        this.ngOnInit();
      },
      error => {
        alert(error);
      }
    )
  }
}
