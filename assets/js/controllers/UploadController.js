bolsaApp.controller('UploadCtrl', ['$scope', 'fileUpload', function($scope, fileUpload){
    
    $scope.uploadFile = function(){
        var uploadUrl = "/Upload";
        fileUpload.uploadFileToUrl($scope.fd, uploadUrl);
    };
    $scope.addFile = function(files){
        $scope.fd = new FormData();
        //Take the first selected file
        $scope.fd.append("file", files[0]);
    }
 }]);