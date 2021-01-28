import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                    }} >
                    {this.props.children}
                </div>
            </Aux>
        );
    };
}

// Instide of using React.memo you can use componentShouldUpdate method and check show prop
// export default React.memo(modal,(prevProps, newProps) => {
//     return newProps.show === prevProps.show
// });
export default Modal;