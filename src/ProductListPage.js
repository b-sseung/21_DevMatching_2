import { request } from './api.js';
import ProductList from './ProductList.js';

export default function ProductListPage({ $target }) {
  //이 때 $target은 document.querySelector('.App')를 뜻함

  const $page = document.createElement('div');
  $page.className = 'ProductListPage';

  $page.innerHTML = '<h1>상품 목록</h1>';

  this.setState = (nextState) => {
    this.state = nextState
    this.render();
  }

  const fetchProducts = async () => {
    const products = await request('/products');
    this.setState(products);
    
      const productList = new ProductList({
        $target: $page,
        initState: this.state
    });
  }

  fetchProducts();

  this.render = () => {
    $target.appendChild($page);
  }
}