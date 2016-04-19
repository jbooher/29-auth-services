class GalleryService {
  constructor($q, $firebaseArray, $firebaseAuth, $timeout) {
    this._$q = $q;
    this._$firebaseArray = $firebaseArray;

    this.ref = new Firebase("https://jb-gallery.firebaseio.com/");
    this.auth = $firebaseAuth(this.ref);
    this.verifyLogin();
  }

  verifyLogin() {
    let authData = this.auth.$getAuth();

    if (authData) {
      this.loginUser(authData);
    } else {
      this.auth.$authWithOAuthRedirect("github");
    }
  }

  loginUser(authData) {
    this.user = authData;
    this.gallery = this._$firebaseArray(this.ref.child('users').child(authData.uid).child('images'));
    this.sizes = this._$firebaseArray(this.ref.child('sizes'));
  }

  currentUser() {
    return this.user;
  }

  new() {
    return {
      name: "",
      image: "",
      size: "Medium"
    }
  }

  all() {
      return this.gallery;
  }

  add(item) {
    this.gallery.$add(item);
  }

}

export default GalleryService;
