angular.module('fullstack').config(($urlRouterProvider, $stateProvider) => {

    $urlRouterProvider.otherwise('/');

    // in the resolve, request the user, if no user, catcth the error (401, 404, etc.);
    // the user method gives access to a user prop in the homeCtrl
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './component/home/homeTmpl.html',
            controller: 'homeCtrl',
            resolve: {
                user: mainSrvc => mainSrvc.getUser()
                    .then(response => response.data)
                    .catch(err => err)
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: './component/login/loginTmpl.html',
            controller: 'mainCtrl'
        })
});
