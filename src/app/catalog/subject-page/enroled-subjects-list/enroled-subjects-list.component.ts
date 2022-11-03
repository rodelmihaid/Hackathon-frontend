import {Component, OnInit} from '@angular/core';
import {Teacher} from "../../../model/teacher.model";
import {HttpClient} from "@angular/common/http";
import {Subject} from "../../../model/subject.model";
import {AuthenticationService} from "../../../service/authentication/authentication.service";
import {RequestService} from "../../../service/request.service";

@Component({
  selector: 'app-enroled-subjects-list',
  templateUrl: './enroled-subjects-list.component.html',
  styleUrls: ['./enroled-subjects-list.component.css']
})
export class EnroledSubjectsListComponent implements OnInit {
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
