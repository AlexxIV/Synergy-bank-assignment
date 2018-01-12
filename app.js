var App = angular.module('bank', ['ui.router']);

App.config(function($stateProvider) {

    var states = [
        {
            name:'clients',
            url: '/clients',
            component: 'clients',
            resolve: {
                clients: function(ClientsService) {
                    return ClientsService.getAllClients();
                }
            }
        },

        {
            name: 'clients.client',
            url: '/{clientId}',
            component: 'client',
            resolve: {
                client: function(clients, $stateParams) {
                    return clients.find(function(client) {
                        return client.id === $stateParams.clientId;
                    });
                }
            }
        }
    ];


    states.forEach(function(state) {
        $stateProvider.state(state);
    });

});

App.config(function ($urlRouterProvider) {
    $urlRouterProvider.when('', '/clients');
    $urlRouterProvider.otherwise('/clients');
});
