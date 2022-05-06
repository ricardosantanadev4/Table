import { Component, OnInit } from '@angular/core';
import { Tables } from 'src/app/models/tabela';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initTable();
    console.log(this.tables);
  }

  tables: Tables[] = [];

  initTable(){
    for (let i = 0; i < 10; i++){
      let table: Tables = {};
      table.id = i;
      table.ramal = '600' + i;
      table.serial = 'ZKLRJWVO' + i;
      table.ip = '192.168.0.' + i;

      this.tables.push(table);
    }
  }

}
