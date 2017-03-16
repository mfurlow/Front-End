class LoginController {
  /** @ngInject */

  constructor($http, $cookies, $location) {
    const loginUrl = 'http://localhost:52784/api/login/login/';
    const signUpUrl = 'http://localhost:52784/api/users/signupuser/';

    this.authenticate = function (user, pass) {
      const loginCredential = {
        UserEmail: user,
        UserPassword: pass
      };

      $http.post(loginUrl, loginCredential, {
        withCredentials: true
      }).then(response => {
        $location.path('/');
        $cookies.put('UserEmail', loginCredential.UserEmail);
        $cookies.put('UserPassword', loginCredential.UserPassword);
        $cookies.put('id', response.data.UserID);
        this.user = response.data;
      }).catch(error => {
        this.authenticationError = error;
      });
    };

    this.signUp = function (newUser, newPass) {
      const signupCredential = {
        UserEmail: newUser,
        UserHashedPassword: newPass
      };

      $http.post(signUpUrl, signupCredential, {
        withCredentials: true
      }).then(response => {
        $location.path('/');
        $cookies.put('UserEmail', signupCredential.UserEmail);
        $cookies.put('UserPassword', signupCredential.UserHashedPassword);
        $cookies.put('id', response.data.UserID);
        this.user = response.data;
      }).catch(error => {
        this.signUpError = error;
      });
    };
  }
}

export const loginPage = {
  template: require('./login.html'),
  controller: LoginController
};
