import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from "../../../../../../model/subject.model";

@Component({
  selector: 'app-teacher-subject',
  templateUrl: './teacher-subject.component.html',
  styleUrls: ['./teacher-subject.component.css']
})
export class TeacherSubjectComponent implements OnInit {
  @Input() subject:Subject = new Subject();
  @Output() removeSubject:EventEmitter<Number>  = new EventEmitter<Number>();

  constructor() { }

  ngOnInit(): void {
  }

  public onRemove():void {
    this.removeSubject.emit(this.subject.id);
  }
}
