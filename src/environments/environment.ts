// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl:"http://localhost:8081/catalog",
  registerUrl:"/user/register",
  loginUrl:"/user/login",
  subjectUrl:"/subject",
  postUrl:"/post",
  commentUrl:"/comments",
  projectsBySubjectId:"/subject/projects-by-subject/{id}",
  getProjectSolutionByProjectIdAndUser:"/project-student/project/{id}/user/{userEmail}",
  getProjectSolutionByProjectIdForTeacher:"/project-student/project/{id}/teacher",
  addGrade:"/project-student/project/{id}/user/{userEmail}/grade/{grade}",
  userUrl:"/user",
  subjectsByUserId:"/user/user-subjects/{userEmail}",
  saveProjectSolution:"/project-student",
  userSettingsUrl:"/user-settings"
  // mainApp:"/user/login",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
