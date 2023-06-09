import React, { Component } from "react";
import { Channel } from "../services/EventService";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class ProductList extends Component {
  static defaultProps = {
    products: [],
  };

  remove(product) {
    Channel.emit("product:remove", product.id);
  }

  render() {
    const { props } = this;

    return (
      <ul className="product-list">
        <TransitionGroup>
          {props.products.map((product) => (
            <CSSTransition key={product.id} timeout={300} classNames="product">
              <li className="product-list-item">
                <button onClick={this.remove.bind(this, product)}>X</button>
                <img src={product.image} alt={product.description} />
                <div>{product.description}</div>
                <div>{product.price}</div>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    );
  }
}

export default ProductList;
