import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../TASK';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text: string;
  day: string;
  reminder:boolean = false;

  @Output() onAddTask = new EventEmitter<Task>();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text || !this.day) {
      alert('Please add all details');
    return;
    }
   
    const task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(task);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
