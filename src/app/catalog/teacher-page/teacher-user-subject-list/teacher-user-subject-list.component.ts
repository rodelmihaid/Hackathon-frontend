import { Component, OnInit } from '@angular/core';
import {Subject} from "../../../model/subject.model";
import {AuthenticationService} from "../../../service/authentication/authentication.service";
import {RequestService} from "../../../service/request.service";

@Component({
  selector: 'app-teacher-user-subject-list',
  templateUrl: './teacher-user-subject-list.component.html',
  styleUrls: ['./teacher-user-subject-list.component.css']
})
export class TeacherUserSubjectListComponent implements OnInit {


  enroledSubjectList: Subject[] = [];


  constructor(public authenticationService: AuthenticationService, public requestService: RequestService) {
  }

  ngOnInit(): void {
    this.getEnroledSubjectListForLoggedInUser();
    console.log(this.enroledSubjectList);
  }

  private getEnroledSubjectListForLoggedInUser() {
    // @ts-ignore
    this.requestService.getSubjectsByUserId(this.authenticationService.getUserEmailFromToken())
      .subscribe((data: Subject[]) => {
          console.log("DATA");
          console.log(data);
          this.enroledSubjectList = data;
        },
        error => {
          console.log(error);
          console.log('Error when getting teacher list.');
        })
  }

}
