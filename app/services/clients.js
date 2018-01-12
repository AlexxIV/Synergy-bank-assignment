angular.module('bank').service('ClientsService', function ($http) {
    var service = {
        getAllClients: function () {
            return $http.get('data/clients.json', { cache: true }).then(function(response) {
                return response.data;
        });
        },

        getClient: function (id) {
            function clientMatchesParameter(client) {
                return client.id === id;
            }

            return service.getAllClients().then(function (clients) {
                return clients.find(clientMatchesParameter)
            });
        }
    }

    return service;
})