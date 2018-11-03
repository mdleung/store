import React, { Component } from 'react'
import { Link, Switch, Route, Router } from 'react-router-dom'
import { Hats, Shoes } from '.'
import axios from 'axios'




class Shop extends Component {

    constructor(props) {
        super(props)
        this.state = {
            shoppingCart: [{
                name: 'Top Hat',
                price: 15,
                type: 'hat'
              }]

        }


    }



    addToCart = (productName, productPrice, productType) => {

        
        if (this.state.shoppingCart) {
            this.setState({


                shoppingCart: this.state.shoppingCart.concat({ productName, productPrice, productType })


            })
            this.saveItem()

        } else {
            
            this.setState({


                shoppingCart: [{ productName, productPrice, productType }]


            })
            this.saveItem()

        }





    }

    saveItem = () => {
        axios
            .post('http://localhost:8080/cart', {
                shoppingCart: this.state.shoppingCart
            })
            .then(res => console.log(res))
    }



    componentDidMount() {
        axios
            .get('http://localhost:8080/cart')
            .then(({ data }) => {
                console.log(data)
                this.setState({
                    shoppingCart: data.shoppingCart
                })
            })
    }

    render() {





        return (
            <div>

                <h1>This is Shop! 🤪</h1>
                <h2>Thanks for stopping by {this.props.storedName}!</h2>



                <nav>
                    <Link to={this.props.match.url + '/hats'}><h3 >Shop for Hats 🧢🎩</h3></Link>
                    <Link to={this.props.match.url + '/shoes'}><h3>Shop for Shoes 👞👠</h3></Link>
                </nav>


                <Switch>
                    <Route exact path={this.props.match.path + '/hats'} render={(routerProps) => <Hats addToCart={this.addToCart} category="hats" products={this.props.hats}  {...routerProps} />} />

                    <Route path={this.props.match.path + '/shoes'} render={(routerProps) => <Shoes addToCart={this.addToCart} category="shoes" products={this.props.shoes}  {...routerProps} />} />
                </Switch>




                <Cart shoppingCart={this.state.shoppingCart} />


            </div>
        )

    }

}


class Cart extends Component {

    render() {
        console.log(this.props.shoppingCart)
        if (this.props.shoppingCart) {

            const cartItems = this.props.shoppingCart.map(items => <div><li>  {items.productName}{items.productPrice}{items.productType}</li></div>)

            return (



                <div><ul>{cartItems}</ul></div>


            )

        } else {


            return (<div>NoThing hEre</div>)

        }


    }



}

export default Shop