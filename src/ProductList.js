
export default function ProductList({ $target, initState }) {
  this.state = initState;

  const $list = document.createElement('ul');
  $target.appendChild($list);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.render = () => {
    if (!this.state) return;

    $list.innerHTML = `
      ${this.state.map((product) => {
        `<li class="Product">
          <img src="${product.imageUrl}">
          <div class="Product__info">
            <div>${product.name}</div>
            <div>${product.price}원~</div>
          </div>
        `
      })}
    `
  }
}