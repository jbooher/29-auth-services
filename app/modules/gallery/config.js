function config($stateProvider) {
  $stateProvider
    .state('index', {
      url: '/',
      controller: 'GalleryController as galleryCtrl',
      template: require('./view.html')
    });
}

export default config;
