import React from 'react';
import Autocomplete from './Autocomplete'

class Ingredients extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: '',
      code: 0,
      amount: '',
      items: {}
    }
    this.getIngredients = this.props.getIngredients.bind(this)
  }

  getItems = (item, value) => {
    this.setState({
      id: item,
      code: value
    })
  }

  onChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  onAdd = event => {
    const newItem = {
      [this.state.id]: {
        code: this.state.code,
        amount: this.state.amount} 
    }
    this.setState({items: {...this.state.items, ...newItem}}, ()=>this.getIngredients(this.state.items))
  }

  onRemove = (event, key) => {
    const items = this.state.items
    delete items[key]
    this.setState({items: items})
  }

  render(){
    const ingredients = Object.keys(this.state.items).map((item)=>(
      <li>
        {console.log(item)}
        {item} x{this.state.items[item].amount}
        <button onClick={(event)=>{this.onRemove(event, item)}}>-</button>
      </li>
    ))

    return (
      <div>
        Ingredients:
        {ingredients}   
        <Autocomplete getItems={this.getItems}/>
        <input 
          name='amount'
          value={this.state.amount}
          onChange={this.onChange}
          type='text'
          placeholder='amount'
        />
        <button onClick={this.onAdd}>+</button>
      </div>
    )
  }
}

export default Ingredients