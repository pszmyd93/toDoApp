import { Component, OnInit } from '@angular/core';
import { Task } from './task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  arr: Task[] = [];

  ngOnInit() {
    this.arr.push(new Task("Task number"));
  }
  add() {
    this.arr.push(new Task("Task number"));
  }
  remove() {
    this.arr.pop();
  }
  clear() {
    this.arr = [];
  }
}
