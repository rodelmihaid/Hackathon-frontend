import { Component, OnInit } from '@angular/core';
import {Teacher} from "../../../model/teacher.model";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {AddUpdateTeacherComponent} from "./add-update-teacher/add-update-teacher.component";

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  teacherList:Teacher[] = [];

  constructor(public httpClient: HttpClient, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTeacherList();
    console.log(this.teacherList);
  };

  public onAddTeacher():void {
    const dialogRef = this.dialog.open(AddUpdateTeacherComponent, {
      data: {teacher: new Teacher(), isEditMode: false}
    });
    this.refreshTeacherList();
  }


  public refreshTeacherList():void {
    this.getTeacherList();
  }

  private getTeacherList() {
    this.httpClient.get<Teacher[]>("http://localhost:8081/catalog/teacher")
      .subscribe((data: Teacher[]) => {
          this.teacherList = data;
        },
        error => {
          console.log('Error when getting teacher list.');
        })
  }
}
