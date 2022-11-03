import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "../../../../model/subject.model";

@Component({
  selector: 'app-teacher-user-subject',
  templateUrl: './teacher-user-subject.component.html',
  styleUrls: ['./teacher-user-subject.component.css']
})
export class TeacherUserSubjectComponent implements OnInit {

  @Input()
  enroledSubject: Subject = new Subject();


  constructor() {
  }

  ngOnInit(): void {
  }
}
