import React from 'react';

class Ingredients extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: '',
      amount: '',
      items: {}
    }
  }

  onChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  onAdd = event => {
    const newItem = {
      [this.state.id]: this.state.amount 
    }
    this.setState({items: {...this.state.items, ...newItem}}, ()=>console.log(this.state))
  }

  onRemove = (event, key) => {
    const items = this.state.items
    delete items[key]
    this.setState({items: items})
  }

  render(){
    const ingredients = Object.keys(this.state.items).map((key, i) => (
      <div key={i}>
        {key} x{this.state.items[key]}
        <button onClick={(event)=>{this.onRemove(event,key)}}>-</button>
      </div>
    ))

    return (
      <div>
        Ingredients:
        <div>
          {Object.entries(this.state.items).length > 0 ? ingredients : null}
        </div>        
        
        <input
          name='id'
          value={this.state.id}
          onChange={this.onChange}
          type='text'
          placeholder='name'
        />
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