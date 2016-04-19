class GalleryController {
  constructor(GalleryService, $timeout) {
    this._GalleryService = GalleryService;


    this.list = this._GalleryService.all();

    this.newImage = this._GalleryService.new();

    this.sizes = this.getSizes();
    console.log(this.sizes);
  }

  addImage() {
    this._GalleryService.add(this.newImage);
    this.newImage = this._GalleryService.new();
  }

  getSizes() {
    return this._GalleryService.sizes;
  }
}

export default GalleryController;
