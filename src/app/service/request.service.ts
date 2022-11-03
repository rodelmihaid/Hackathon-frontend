import {HttpClient, HttpResponse} from "@angular/common/http";
import {User} from "../model/user";
import {UrlService} from "./url.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Subject} from "../model/subject.model";
import {Comment} from "@angular/compiler";
import {UserSettings} from "../model/user.settings";
import {RoleType} from "../enum/role.type";
import {Project} from "../model/project.model";
import {StudentProjectImplementation} from "../model/student-project-implementation.model";

@Injectable()
export class RequestService {

  constructor(public httpClient: HttpClient, public urlService: UrlService) {
  }

  getSubjectsByUserId(userEmail: string): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(this.urlService.getSubjectsByUserIdUrl().replace("{userEmail}",userEmail) , this.urlService.getRequestOptions());
  }



  login(userModel: User): Observable<HttpResponse<User>> {
    return this.httpClient.post<User>(this.urlService.getLoginUrl(), userModel, {observe: 'response'})
  }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>(this.urlService.getRegisterUrl(), user, this.urlService.getRequestOptions());
  }

  getUserByEmail(email: string | undefined | null): Observable<User> {
    return this.httpClient.get<User>(this.urlService.getUserUrl() + "/email?email=" + email, this.urlService.getRequestOptions());
  }

  getUserSettingsByEmail(email: string | undefined | null): Observable<UserSettings> {
    return this.httpClient.get<UserSettings>(this.urlService.getUserSettingsUrl() + "?email=" + email, this.urlService.getRequestOptions());
  }

  getUsersBySubject(subjectId: number): Observable<User[]> {
    return this.httpClient.get<User[]>(this.urlService.getUserUrl() + "/subject?subjectId=" + subjectId, this.urlService.getRequestOptions());
  }

  getSubjects(): Observable<Subject[]> {
    console.log(this.urlService.getSubjectUrl());
    return this.httpClient.get<Subject[]>(this.urlService.getSubjectUrl(), this.urlService.getRequestOptions());
  }

  getSubjectById(subjectId:number):Observable<Subject>{
    return this.httpClient.get<Subject>(this.urlService.getSubjectUrl()+'/'+subjectId, this.urlService.getRequestOptions());
  }

  getProjectBySubjectId(subjectId:number):Observable<Project[]>{
    return this.httpClient.get<Project[]>(this.urlService.getProjectBySubjectIdUrl().replace("{id}",subjectId+''), this.urlService.getRequestOptions());
  }

  saveProjectSolution(projectSolution:StudentProjectImplementation){
    return this.httpClient.post<StudentProjectImplementation>(this.urlService.saveProjectSolution(),projectSolution,this.urlService.getRequestOptions());
  }

  getProjectSolutionByProjectAndUser(projectId:number,userEmail:string):Observable<StudentProjectImplementation>{
    return this.httpClient.get<StudentProjectImplementation>(this.urlService.getProjectSolutionByProjectIdAndUser().replace("{id}",projectId+'')
      .replace("{userEmail}",userEmail), this.urlService.getRequestOptions());
  }
  addGrade(projectId:number,userEmail:string,grade:string):Observable<StudentProjectImplementation>{
    return this.httpClient.get<StudentProjectImplementation>(this.urlService.getAddGradeUrl().replace("{id}",projectId+'')
      .replace("{userEmail}",userEmail).replace("{grade}",grade), this.urlService.getRequestOptions());
  }
  getProjectSolutionByProjectForTeacher(projectId:number):Observable<StudentProjectImplementation[]>{
    return this.httpClient.get<StudentProjectImplementation[]>(this.urlService.getProjectSolutionByProjectIdForTeacher().replace("{id}",projectId+'')
      , this.urlService.getRequestOptions());
  }
  getUsers(): Observable<User[]> {
    console.log(this.urlService.getUserUrl());
    return this.httpClient.get<User[]>(this.urlService.getUserUrl(), this.urlService.getRequestOptions());
  }

  getUsersByUserType(roleType: RoleType): Observable<User[]> {
    console.log(this.urlService.getUserUrl());
    return this.httpClient.get<User[]>(this.urlService.getUserUrl() + "/user-type?userType=" + RoleType[roleType], this.urlService.getRequestOptions());
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(this.urlService.getUserUrl() + "/" + user.id, user, this.urlService.getRequestOptions());
  }

  // getPosts(subjectId: number): Observable<Post[]> {
  //
  //   console.log(this.urlService.getPostUrl());
  //   return this.httpClient.get<Post[]>(this.urlService.getPostUrl() + "/subject/" + subjectId, this.urlService.getRequestOptions());
  // }

  postPost(file: FormData | undefined): Observable<string> {
    // return this.httpClient.post<User>(this.urlService.getRegisterUrl(), user, this.urlService.getRequestOptions());
    // if (file != null) {
    //   return this.httpClient.post<Post>(this.urlService.getPostUrl(),{"post":post,"file":file},this.urlService.getRequestOptions());
    // }else {
    return this.httpClient.post<string>(this.urlService.getPostUrl(), file, this.urlService.getRequestOptions2());
    // }
  }

  deleteSubject(subject: Subject): Observable<Subject> {
    return this.httpClient.delete<Subject>(this.urlService.getSubjectUrl() + '/' + subject.id);
  }

  deleteComment(commentId: number): Observable<Comment> {
    return this.httpClient.delete<Comment>(this.urlService.getCommentsUrl() + '/' + commentId, this.urlService.getRequestOptions());
  }

  // deletePost(postId: number): Observable<Post> {
  //   return this.httpClient.delete<Post>(this.urlService.getPostUrl() + '/' + postId, this.urlService.getRequestOptions());
  // }

  postSubject(subject: Subject): Observable<Subject> {
    // return this.httpClient.post<User>(this.urlService.getRegisterUrl(), user, this.urlService.getRequestOptions());
    return this.httpClient.post<Subject>(this.urlService.getSubjectUrl(), subject, this.urlService.getRequestOptions());
  }

  getUserSettings(userId: number): Observable<UserSettings> {
    console.log(this.urlService.getUserSettingsUrl() + "/" + userId);
    return this.httpClient.get<UserSettings>(this.urlService.getUserSettingsUrl() + "/" + userId, this.urlService.getRequestOptions());
  }

  postUserSettings(userSettings: UserSettings): Observable<UserSettings> {
    return this.httpClient.post<UserSettings>(this.urlService.getUserSettingsUrl(), userSettings, this.urlService.getRequestOptions());
  }

  getComments(postId: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.urlService.getCommentsUrl() + "/post/" + postId, this.urlService.getRequestOptions());
  }

  postComment(file: FormData | undefined): Observable<string> {
    return this.httpClient.post<string>(this.urlService.getCommentsUrl(), file, this.urlService.getRequestOptions2());
  }

  // postPost(file: FormData | undefined): Observable<string> {
  //   // return this.httpClient.post<User>(this.urlService.getRegisterUrl(), user, this.urlService.getRequestOptions());
  //   // if (file != null) {
  //   //   return this.httpClient.post<Post>(this.urlService.getPostUrl(),{"post":post,"file":file},this.urlService.getRequestOptions());
  //   // }else {
  //   return this.httpClient.post<string>(this.urlService.getPostUrl(), file, this.urlService.getRequestOptions2());
  //   // }
  // }

  updateUserPassword(user: User): Observable<User> {
    return this.httpClient.put<User>(this.urlService.getUserUrl() + '/new-password', user, this.urlService.getRequestOptions());
  }

  downloadFile(fileName: string, subjectId: number): Observable<Blob> {
    return this.httpClient.get(this.urlService.getPostUrl() + '/files/' + fileName + '/' + subjectId, { responseType: 'blob'});
  }

  getRequestOptions() {
    return undefined;
  }
}
