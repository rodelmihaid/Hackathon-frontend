import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from "../../../../../../model/project.model";
import {StudentProjectImplementation} from "../../../../../../model/student-project-implementation.model";
import {RequestService} from "../../../../../../service/request.service";
import {AuthenticationService} from "../../../../../../service/authentication/authentication.service";
import {NotifierService} from "angular-notifier";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input()
  project: Project = new Project();
  fileNames:Map<string,File> = new Map<string, File>();

  // @ts-ignore
  studentProjectImplementations: StudentProjectImplementation = undefined;
  // @ts-ignore
  newStudentProjectImplementations: StudentProjectImplementation = undefined;

  studentProjectImplementationsForTeacher: StudentProjectImplementation[] = [];

  constructor(public requestService: RequestService, public authenticationService: AuthenticationService
    , public notifierService: NotifierService) {
  }

  ngOnInit(): void {
    this.refreshPage();

  }

  onFileSelected(event: any) {
    let file: File;
    for (let i = 0; i < event.target.files.length; i++) {
      file = event.target.files[i];
      this.fileNames.set(file.name, file);
      // this.fileNames.push(file.name);
    }
  }

  deleteFileFromMap(fileName:string){
    this.fileNames.delete(fileName);
  }

  addStudentProjectImplementation() {
    this.newStudentProjectImplementations = new StudentProjectImplementation();
  }

  saveProjectImplementation(ngForm: NgForm) {
    if (!ngForm.value) {
      return;
    }
    const solution = ngForm.value.solution;
    const projectSolution = new StudentProjectImplementation();
    projectSolution.solution = solution;
    // @ts-ignore
    projectSolution.userEmail = this.authenticationService.getUserEmailFromToken();

    // @ts-ignore
    projectSolution.projectId = this.project.id;

    // projectSolution.attachment=;

    this.requestService.saveProjectSolution(projectSolution).subscribe(result => {
      this.refreshPage();
      this.notifierService
        .notify('default', 'Solutia ta s-a salvat cu succes')
    }, error => {
      this.notifierService.notify('error', 'Solutia nu s-a putut salva')
    });
  }



  showAddSolutionButton(): boolean {
    if (this.studentProjectImplementations == undefined || this.studentProjectImplementations == null) {
      return true;
    } else return false;
  }

  saveNotaForm(ngForm: NgForm) {
    if (!ngForm.valid) {
      return;
    }
    const nota = ngForm.value.nota;
    const projectId = ngForm.value.projectId;
    const userEmail = ngForm.value.userEmail;
    console.log(nota);
    console.log(projectId);
    console.log(userEmail);

    this.requestService.addGrade(projectId, userEmail, nota).subscribe(response => {
        this.refreshProjectSolutions();
        this.notifierService.notify('default', 'Nota a fost salvata cu succes')
      }
      , error => {
        this.notifierService.notify('error', 'Erroare la adaugare nota')
      });
  }

  refreshProjectSolutions() {
    // @ts-ignore
    this.requestService.getProjectSolutionByProjectForTeacher(this.project.id, this.authenticationService.getUserEmailFromToken())
      .subscribe(response => { // @ts-ignore
          this.studentProjectImplementationsForTeacher = response
        },
        error => {
          this.notifierService
            .notify('error', 'There was an error when trying to retrieve project solutions for projects')
        });
  }

  refreshPage() {
    // @ts-ignore
    if (this.authenticationService.userIsProfessor() || this.authenticationService.userIsAdmin()) {
      this.refreshProjectSolutions();
    } else {
      // @ts-ignore
      this.requestService.getProjectSolutionByProjectAndUser(this.project.id, this.authenticationService.getUserEmailFromToken())
        .subscribe(response => { // @ts-ignore
            this.studentProjectImplementations = response
          },
          error => {
            this.notifierService
              .notify('error', 'There was an error when trying to retrieve project solutions for projects')
          });
    }
  }

}
