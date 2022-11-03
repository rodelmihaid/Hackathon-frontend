import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Teacher} from "../../../../model/teacher.model";
import {HttpClient} from "@angular/common/http";
import {AddUpdateTeacherComponent} from "../add-update-teacher/add-update-teacher.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-teacher-item',
  templateUrl: './teacher-item.component.html',
  styleUrls: ['./teacher-item.component.css']
})
export class TeacherItemComponent implements OnInit {
  @Input() teacher:Teacher = new Teacher();
  @Output() refreshTeacherEvent:EventEmitter<void> = new EventEmitter<void>();

  constructor(public httpClient:HttpClient, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public onDeleteTeacher():void {
    this.httpClient.delete("http://localhost:8081/catalog/teacher?id={id}".replace('{id}', this.teacher.id + ''))
      .subscribe(respone => {
        this.refreshTeacherEvent.emit();
      },
      error => {
        alert('Error when deleting teacher.');
      })

  }

  public onEditTeacher():void {
    const dialogRef = this.dialog.open(AddUpdateTeacherComponent, {
      data: { teacher: this.teacher, isEditMode: true}
    });

    dialogRef.afterClosed().subscribe(event => {
      this.refreshTeacherEvent.emit();
    });
  }


}
