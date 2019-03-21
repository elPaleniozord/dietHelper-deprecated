import React from 'react';
import Ingredients from './Ingredients';

class Variants extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      varId: '',
      ingredients: {},
      macros: {}
    }
  }

  onChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render(){
    return (
      <div>
        Variants (optional):
        <label>Name:</label>
        <input 
          name='varId'
          value={this.state.varId}
          onChange={this.onChange}
          type='text'
          placeholder='Variant Name'
        />
        <Ingredients />
        <button>Add Variant</button>
      </div>
    )
  }
}

export default Variants