import React from 'react'

class Variant extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      kcal: 0,
      prot: 0,
      carb: 0,
      fats: 0,
    }
    this.getVariant = this.props.getVariant.bind(this)
  }

  onChange = event => {    
    this.setState({[event.target.name]: event.target.value}, ()=>{this.getVariant(this.state)})        
  }

  render(){
    return (
      <div>
        <input 
          name='name'
          value={this.state.name}
          onChange={this.onChange}
          type='text'
        />
        {this.state.name !== '' && <div>
          kcal/100g:
          <input 
            name='kcal'
            value={this.state.kcal}
            onChange={this.onChange}
            type='text'
            placeholder='0'
          />
          prot/100g:
          <input 
            name='prot'
            value={this.state.prot}
            onChange={this.onChange}
            type='text'
            placeholder='0'
          />
          carb/100g:
          <input 
            name='carb'
            value={this.state.carb}
            onChange={this.onChange}
            type='text'
            placeholder='0'
          />
          fats/100g:
          <input 
            name='fats'
            value={this.state.fats}
            onChange={this.onChange}
            type='text'
            placeholder='0'
          />
        </div>
        }
      </div>
    )
  }
}

export default Variant