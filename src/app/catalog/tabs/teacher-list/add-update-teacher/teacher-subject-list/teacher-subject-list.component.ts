import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from "../../../../../model/subject.model";

@Component({
  selector: 'app-teacher-subject-list',
  templateUrl: './teacher-subject-list.component.html',
  styleUrls: ['./teacher-subject-list.component.css']
})
export class TeacherSubjectListComponent implements OnInit {
  @Input() subjectList:Subject[] = [];
  @Output() removeSubject:EventEmitter<Number> = new EventEmitter<Number>();

  constructor() { }

  ngOnInit(): void {
  }
  public removeSubjectFromList(event: Number): void {
   this.removeSubject.emit(event);
  }
}
