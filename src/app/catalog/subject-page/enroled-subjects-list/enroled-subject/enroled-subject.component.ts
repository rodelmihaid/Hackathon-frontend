import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "../../../../model/subject.model";

@Component({
  selector: 'app-enroled-subject',
  templateUrl: './enroled-subject.component.html',
  styleUrls: ['./enroled-subject.component.css']
})
export class EnroledSubjectComponent implements OnInit {
  @Input()
  enroledSubject: Subject = new Subject();


  constructor() {
  }

  ngOnInit(): void {
  }


}
