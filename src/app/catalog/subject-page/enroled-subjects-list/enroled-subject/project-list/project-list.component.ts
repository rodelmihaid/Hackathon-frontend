import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../../../../model/project.model";
import {HttpClient, HttpRequest} from "@angular/common/http";
import {RequestService} from "../../../../../service/request.service";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Input()  subjectId:number | undefined;
  projectList: Project[] = [];

  constructor(public requestService:RequestService,public notifierService:NotifierService) {
  }

  ngOnInit(): void {
    this.getProjectList();
  }

  private getProjectList() {
    // @ts-ignore
    this.requestService.getProjectBySubjectId(this.subjectId).subscribe(response =>{
      this.projectList=response
      console.log(this.projectList)
    }, error => {this.notifierService.notify('error','There were an error')});



    // this.projectList=[{name:'Tema1',description:'D2asfsfsdfsd s fsd s fsd s fds fsd fs fsd fsd fs fsd fsd fsd fsdf sd s  dadas dasd as dsa dasd asd as das das das dsdfsd fds fdsf sd f sdf sd',attachment:'A2'}
    //   ,{name:'Tema1',description:'D2dsafas    sdafasdfasdfa sf sda fasdfasd f sdf as sdf asd fasf as fs fasa sd fas',attachment:''}
    //   ,{name:'Tema1',description:'Dasdfsafasdfasdfsadfasdafasdff  dsaff ads fasd fsa fsdf asdf asdf asd fasd fasd f',attachment:''}
    //   ,{name:'Tema1',description:'D2 sadf sf asad fasdf asd fasd fasf adsf saf saf dsf asdf ads fasf sdf dasfsa asf as',attachment:'A2'}
    //   ,{name:'Tema1',description:'D2sda asd fas fsd fasd fadsf asdf asf sadf dsaf a sd fsadf asdf asd fasd fassa  sdf',attachment:'A2'}];
    /*this.httpClient.get<Project[]>("http://localhost:8081/catalog/project")
      .subscribe((data: Project[]) => {
          this.projectList = data;
        },
        error => {
          console.log('Error when getting project list.');
        })*/
  }

}
