import {Subject} from "./subject.model";

export class Teacher {
  id:number = 0;
  firstName: string = '';
  lastName: string = '';
  cnp: string = '';
  dateOfBirth:string = '';
  salary:number = 0;
  subjects:Subject[] = [];
}
