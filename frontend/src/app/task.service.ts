import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private WebRequestService: WebRequestService) {}

  // send a web request to create a list

  createList(title: string){
    return this.WebRequestService.post('lists', { title: title });
  }

  createTask(listId: string, title: string){
    return this.WebRequestService.post(`lists/${listId}/tasks`, { title });
  }

  getLists(){
    return this.WebRequestService.get('lists');
  }

  getTasks(listId: string){
    return this.WebRequestService.get(`lists/${listId}/tasks`);
  }

}

 