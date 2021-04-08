import { TaskService } from './../../task.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: any;
  tasks: any;
  constructor(private TaskService: TaskService, 
    private route: ActivatedRoute) { }

    ngOnInit() {
      this.route.params.subscribe(
        (params: Params) => {
            this.TaskService.getTasks(params.listId).subscribe((tasks: any) => {
              this.tasks = tasks;
            })
        
        }
      )
  
      this.TaskService.getLists().subscribe((res: any) => {
        this.lists = res;
      })
      
    }


}
