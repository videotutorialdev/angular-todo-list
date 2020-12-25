import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Todo List';
  todoList: Array<any> = new Array();
  constructor() {}
  ngOnInit(): void {
    this.todoList = [
      { 
        date: 'Monday 28, Dec 2020', 
        itemList: [
          {
            id: 1,
            startDate: new Date(),
            endDate: new Date(),
            todo: 'Meeting With Client',
            tagList: ['Work']
          },
          {
            id: 1,
            startDate: new Date(),
            endDate: new Date(),
            todo: 'Dinner',
            tagList: ['Friends']
          },
          {
            id: 1,
            startDate: new Date(),
            endDate: new Date(),
            todo: 'Sleep',
            tagList: ['Body Builder']
          }
        ]
      },
      { 
        date: 'Sunday 27, Dec 2020', 
        itemList: [
          {
            id: 1,
            startDate: new Date(),
            endDate: new Date(),
            todo: 'Fitness',
            tagList: ['Body Builder']
          },
          {
            id: 1,
            startDate: new Date(),
            endDate: new Date(),
            todo: 'Develop Website',
            tagList: ['Work']
          },
          {
            id: 1,
            startDate: new Date(),
            endDate: new Date(),
            todo: 'Singing',
            tagList: ['Hobbie']
          }
        ]
      }
    ];
    console.log(this.todoList);
  }
}
