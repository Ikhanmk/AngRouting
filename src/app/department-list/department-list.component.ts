import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <ul (click)="onSelect(department)" *ngFor = 'let department of departments'>
    <li><span>{{department.id}}</span>{{department.name}}</li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {"id":1, 'name': "Angular"},
    {"id":2, 'name': "Node"},
    {"id":3, 'name': "Express"},
    {"id":4, 'name': "MongoDb"},
    {"id":5, 'name': "Mongoose"},
  ]

  constructor( private route: Router) { }

  ngOnInit(): void {
  }

  onSelect(department: { id: any; }){
    this.route.navigate(['/departments', department.id])
  }
}
