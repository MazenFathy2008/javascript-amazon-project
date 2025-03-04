class Products {
  id;
  image;
  name;
  rating;
  priceCents;
  keywords;
  constructor(productsDetail) {
    this.id = productsDetail.id;
    this.image = productsDetail.image;
    this.name = productsDetail.name;
    this.rating = productsDetail.rating;
    this.priceCents = productsDetail.priceCents;
    this.keywords = productsDetail.keywords;
  }
  getStarUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }
  formatPrice() {
    return (this.priceCents / 100).toFixed(2);
  }
  extraInfo() {
    return "";
  }
}
class Clothes extends Products {
  sizeChartLink;
  constructor(productsDetail) {
    super(productsDetail);
    this.sizeChartLink = productsDetail.sizeChartLink;
  }
  extraInfo() {
    return `<a href="${this.sizeChartLink}" target='_blank'>Size chart</a>`;
  }
}
export const loadedDataPromis =new Promise((resolve) => {
  loadFromBackend(() => {
    resolve();
  });
})
export let products = [];
export function loadFromBackend(func = ()=>{}) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://supersimplebackend.dev/products");
  xhr.send();
  xhr.addEventListener("load", () => {
    products = JSON.parse(xhr.response).map((product) => {
      if (product.type === "clothing") {
        return new Clothes(product);
      }
      return new Products(product);
    });
    func();
    console.log("loaded");
  });
}


