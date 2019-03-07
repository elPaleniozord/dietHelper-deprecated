import React from 'react';
import ReactDOM from 'react-dom';

class Portal extends React.Component{
    constructor(props){
        super(props)
        this.element = document.createElement('div')
        this.modalRoot = document.getElementById('modal')
        this.modalRoot.appendChild(this.element)
    }
    componentDidMount(){
        //add event listeners
    }
    componentWillUnmount(){
        this.modalRoot.removeChild(this.element)
    }
    render(){
        return ReactDOM.createPortal(
            this.props.children,
            this.element
        )
    }
}

export default Portal;