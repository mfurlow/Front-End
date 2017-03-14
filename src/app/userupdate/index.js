import angular from 'angular';

import {userUpdateInfo} from './userupdate';

export const userUpdateModule = 'userUpdate';

angular
    .module(userUpdateModule, [])
    .component('eventualUserInfo', userUpdateInfo);
