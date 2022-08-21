import { routeChange } from "./router.js";

export default function ProductList({ $target, initState }) {
  this.state = initState;

  const $productList = document.createElement('ul');
  $target.appendChild($productList);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.render = () => {
    if (!this.state) return;

    $productList.innerHTML = `
      ${this.state.map((product) => {
        `<li class="Product">
          <a href="/products/${product.id}">
            <img src="${product.imageUrl}">
            <div class="Product__info">
              <div>${product.name}</div>
              <div>${product.price}원~</div>
            </div>
          </a>
        </li>
        `
      })}
    `
  }

  $productList.addEventListener('click', (e) => {
    const $li = e.target.closest('li');
    const { productId } = $li.dataset;

    if (productId) routeChange(`/products/${productId}`);
  });
}