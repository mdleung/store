import React, { Component } from 'react'


class Hats extends Component {

    constructor(props) {
        super(props)

            this.state = ({




            })



    }

    render() {
        const hatList = this.props.products.map(hat => <li>{hat.name}{hat.price}<button onClick={() => this.props.addToCart(hat.name, hat.price, hat.type)}>Add to Cart</button></li>)

        return (<div>  <h1>hats</h1>
            {this.props.category}

            <ul>{hatList}</ul>

        </div>

        )
    }
}
export default Hats