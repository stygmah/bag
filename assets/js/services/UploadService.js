bolsaApp.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(fd, uploadUrl){   
        return $http.post(uploadUrl, fd, {
            withCredentials: true,
            headers: {'Content-Type': undefined },
            transformRequest: angular.identity
        });
    };
 }]);