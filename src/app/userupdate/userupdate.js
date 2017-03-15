class UserUpdateController {
  /** @ngInject */
  constructor($http, $cookies, $location) {
    const userInfo = {
      UserEmail: $cookies.get('UserEmail'),
      UserPassword: $cookies.get('UserPassword'),
      UserID: ($cookies.get('id') + '/')
    };
    const getUserUrl = 'http://localhost:52784/api/users/getuser/' + userInfo.UserID +
      '/' + userInfo.UserPassword + '/' + userInfo.UserEmail + '/';

    $http({
      url: getUserUrl,
      method: 'GET'
    }).then(response => {
      this.user = response.data;
      this.userPassword = userInfo.UserPassword;
    }).catch(error => {
      $location.path('/');
      this.authenticationError = error;
    });

    this.updateUser = function () {
      const updateUserUrl = 'http://localhost:52784/api/users/putuser/' + userInfo.UserID +
        '/' + userInfo.UserEmail + '/' + userInfo.UserPassword + '/';

      const user = {
        UserEmail: this.user.UserEmail,
        UserFirstName: this.user.UserFirstName,
        UserLastName: this.user.UserLastName,
        UserPhoneNumber: this.user.UserPhoneNumber,
        UserHashedPassword: this.userPassword,
        UserImageURL: this.user.UserImageURL
      };

      $http.put(updateUserUrl, user, {
        withCredentials: true
      }).then(response => {
        $cookies.put('UserEmail', response.data.UserEmail);
        $cookies.put('UserPassword', this.user.UserHashedPassword);
        $cookies.put('id', response.data.UserID);
        this.successMessage = 'Successfully updated';
      }).catch(error => {
        this.authenticationError = error;
      });
    };
  }
}

export const userUpdateInfo = {
  template: require('./userupdate.html'),
  controller: UserUpdateController
};

