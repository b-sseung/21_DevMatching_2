import ProductListPage from "./ProductListPage.js";
import ProductDetailPage from "./ProductDetailPage.js";
import CartPage from "./CartPage.js";

export default function App({ $target }) {
  //route() 함수임
  this.route = () => {
    const { pathname } = location;

    console.log(pathname);
    //route함수가 호출될 때마다 페이지 리셋
    $target.innerHTML = '';

    //pathname 수정 필요
    if (pathname === '/index.html') {
      new ProductListPage({
        $target
      }).render();
    } else if (pathname.indexOf('/index.html/products/') === 0) {
      const [, , productId] = pathname.split('/');
      new ProductDetailPage({
        $target,
        productId
      }).render();
    } else if (pathname === '/cart') {
      new CartPage({
        $target
      }).render();
    }
  }

  this.route();
}