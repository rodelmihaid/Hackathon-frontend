export class  SignInData{
  private _email:string;
  private _password:string;

  constructor(email:string,password: string) {
    this._email=email;
    this._password=password;
  }

  getEmail(): string {
    return this._email;
  }
  getPassword(): string {
    return this._password;
  }

}
