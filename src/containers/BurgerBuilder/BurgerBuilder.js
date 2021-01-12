import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingridients: {
            salad: 2,
            bacon: 2,
            cheese: 0,
            meat: 0,
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingridients={this.state.ingridients} />
                <div>Build Controls</div>
            </Aux>

        );
    }
}

export default BurgerBuilder;