class UserUpdateController {
  /** @ngInject */
  constructor($http, $cookies, $location) {
    const getUserUrl = 'http://localhost:52784/api/users/getuser/' + $cookies.get('id') +
      '/' + $cookies.get('UserPassword') + '/' + $cookies.get('UserEmail') + '/';

    $http({
      url: getUserUrl,
      method: 'GET'
    }).then(response => {
      this.user = response.data;
      this.userPassword = null;
    }).catch(error => {
      $location.path('/');
      this.authenticationError = error;
    });

    this.updateUser = function () {
      const updateUserUrl = 'http://localhost:52784/api/users/putuser/' + $cookies.get('id') +
        '/' + $cookies.get('UserEmail') + '/' + $cookies.get('UserPassword') + '/';

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

        if (this.userPassword !== null) {
          $cookies.put('UserPassword', this.userPassword);
        }

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

