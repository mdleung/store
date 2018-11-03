import React, { Component } from 'react'


class Shoes extends Component {

    constructor(props) {
        super(props)

            this.state = ({




            })



    }

    render() {

  

      const shoeList = this.props.products.map(shoe => <li>{shoe.name}{shoe.price}<button onClick={() => this.props.addToCart(shoe.name, shoe.price, shoe.type)}>Add to Cart</button></li>)

        return (<div>  <h1>Shoes</h1>
            {this.props.category}

            <ul>{shoeList}</ul>

        </div>

        )
    }

}


export default Shoes