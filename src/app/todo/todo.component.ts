import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent{
title="todo";
list:any[]=[];

  addTask(item:string)
  {
    this.list.push({id:this.list.length,name:item})
    console.warn(this.list);
  }
  addJob(job:string)
  {
    this.list.push({id:this.list.length,name:job})
    console.warn(this.list);
  }
  removeTask(id:number){
    console.warn(id)
    this.list=this.list.filter(item=>item.id!==id);
  }

}
