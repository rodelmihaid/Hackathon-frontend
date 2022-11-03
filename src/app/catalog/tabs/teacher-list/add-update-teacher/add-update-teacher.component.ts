import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NgForm} from "@angular/forms";
import {Teacher} from "../../../../model/teacher.model";
import {HttpClient} from "@angular/common/http";
import {RequestService} from "../../../../service/request.service";
import {Subject} from "../../../../model/subject.model";

@Component({
  selector: 'app-add-update-teacher',
  templateUrl: './add-update-teacher.component.html',
  styleUrls: ['./add-update-teacher.component.css']
})
export class AddUpdateTeacherComponent implements OnInit {
  teacher:Teacher = new Teacher();
  isEditMode:boolean = false;

  constructor(public httpClient:HttpClient, public dialogRef:MatDialogRef<AddUpdateTeacherComponent>,
              public requestService:RequestService, @Inject(MAT_DIALOG_DATA) public data: {teacher: Teacher, isEditMode: boolean}) { }

  ngOnInit(): void {
    this.isEditMode = this.data.isEditMode;
    this.teacher = new Teacher();
    this.teacher.id = this.data.teacher.id;
    this.teacher.firstName = this.data.teacher.firstName;
    this.teacher.lastName = this.data.teacher.lastName;
    this.teacher.cnp = this.data.teacher.cnp;
    this.teacher.salary = this.data.teacher.salary;
    this.teacher.dateOfBirth = this.data.teacher.dateOfBirth;
    this.teacher.subjects = this.data.teacher.subjects;
  }

  public onClose(){
    this.dialogRef.close();
  }

  public onTeacherSubmit(teacherForm:NgForm): void {
    if(teacherForm.invalid) {
      return;
    }
    alert(teacherForm.form.value.dateOfBirth);
    const teacher = new Teacher();
    teacher.id = teacherForm.form.value.id
    teacher.firstName = teacherForm.form.value.firstName;
    teacher.lastName = teacherForm.form.value.lastName;
    teacher.salary = teacherForm.form.value.salary;
    teacher.cnp = teacherForm.form.value.cnp;
    teacher.dateOfBirth = teacherForm.form.value.dateOfBirth;

    teacher.subjects = this.teacher.subjects;

    if(this.isEditMode == false) {
      this.httpClient.post<Teacher>("http://localhost:8081/catalog/teacher", teacher, this.requestService.getRequestOptions())
        .subscribe(
          response => {
            this.onClose();
          },
          error => {
            alert("Error when saving a new teacher.");
          })
    } else {
      this.httpClient.put<Teacher>("http://localhost:8081/catalog/teacher/{id}".replace("{id}", teacher.id + ''), teacher, this.requestService.getRequestOptions())
        .subscribe(
          response => {
            this.onClose();
          },
          error => {
            alert("Error when updating a teacher.");
          })
    }

  }

  public removeSubject(subjectId: Number): void {
    const clonedSubjectList: Subject[] = [];
    for(let i = 0; i < this.teacher.subjects.length; i++) {
      if(this.teacher.subjects[i].id != subjectId) {
        clonedSubjectList.push(this.teacher.subjects[i]);
      }
    }
    this.teacher.subjects = clonedSubjectList;
  }
}
