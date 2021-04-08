import { TaskService } from './../../task.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  // createTask(title: string){
  //   return this.taskService.createTask(title).subscribe((res: any)=>{
  //   console.log(res);
  //   // Now navigate to /lists/response._id

  //   });
  // }


}
