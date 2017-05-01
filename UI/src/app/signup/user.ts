export class LoginInfo {
  providerID: String;
  providerKey: String;
}

export class User {
  userID: String;
  loginInfo: LoginInfo;
  firstName: String;
  lastName: String;
  fullName: String;
  email: String;
}