import React from 'react';

class TagInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      focused: false,
      input: ''
    }
    this.getIngredients = this.props.getIngredients.bind(this)
    this.onClose = this.onClose.bind(this)
  }
  
  onClose = (event, index) => {
    event.preventDefault(); 
    this.setState(state => ({
      items: state.items.filter((item, i) => i !== index)
    }))
  }

  onChange = event => {
    this.setState({input: event.target.value})
  }

  onInputKeyDown = event => {
    //add new tag on enter
    if(event.keyCode === 13){
      event.preventDefault();
      const {value} = event.target
      this.setState(state => ({
        items: [...state.items, value],
        input: ''
      }))
      this.getIngredients(this.state.items, value)
    }
  }

  render(){
    return (
      <label>
        <ul>
          {this.state.items.map((item, i) => (
            <li className="tag-input__item" key={i}>{item}<button key={i} onClick={(event)=>{this.onClose(event, i)}}>x</button></li>            
          ))}          
        </ul>
        <input 
          className = "tag-input__form"
          value = {this.state.input}
          placeholder = "Type in ingredient and hit 'Enter'"
          onChange = {this.onChange}
          onKeyDown = {this.onInputKeyDown}
        />
      </label>
    )
  }
}

export default TagInput;