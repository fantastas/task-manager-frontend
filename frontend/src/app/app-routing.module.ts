import { NewTaskComponent } from './pages/new-task/new-task.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'lists', pathMatch: 'full'},
  {path: 'new-list', component: NewListComponent},
  {path: 'new-task', component: NewTaskComponent},
  {path: 'lists', component: TaskViewComponent},
  {path: 'lists/:listId', component: TaskViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
