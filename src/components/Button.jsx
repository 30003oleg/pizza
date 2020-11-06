import React from 'react';
import classNames from 'classnames';


/*class Button extends React.Component {

    componentDidMount() {
        console.log ('mounted');
    }
    componentDidUpdate () {

    }


    render () {
        console.log(this.props);
        return (
            <button className={classNames('button', {'button--outline':this.props.outline})}>{this.props.value}</button>
        )
    }
}*/

function Button(props) {
    return (
        <button className={classNames('button', {'button--outline':props.outline})}>{props.value}</button>
    );   
}

export default Button;