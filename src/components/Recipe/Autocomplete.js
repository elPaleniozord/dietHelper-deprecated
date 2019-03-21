import React from 'react';

const apiKey = process.env.REACT_APP_NDB_API_KEY;

class Autocomplete extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      activeSuggestion: 0,
      suggestions: [],
      showSuggestions: false,
      userInput: '',
      itemCode: 0,
      isLoading: false
    }
    this.getItems = this.props.getItems.bind(this)
  }
  ndbSearch(phrase){
    const url = "https://api.nal.usda.gov/ndb/search/?format=json&q="+phrase+"&ds=Standard%20Reference&max=10&api_key="+apiKey
    fetch(url).then(response => {
      if(response.ok){
        return response.json()
      } else {
        throw new Error('Something went wrong ...')
      }
    })
    .then(data =>{
      const items = []
      data.list.item.map(item=>{
        items.push({[item.name]: item.ndbno})
      })
      this.setState({suggestions: items})
    })
    .catch(error => console.log(error))
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      activeSuggestion: 0,
      showSuggestions: true
    }, ()=>this.ndbSearch(this.state.userInput))
  }

  onClick = event => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: event.target.innerText,
      itemCode: event.target.value
    })
    this.getItems(event.target.innerText, event.target.value)
  }

  render(){
    let suggestionsList;

    if(this.state.showSuggestions && this.state.userInput){
      if(this.state.suggestions.length){
        suggestionsList = (
          <ul className="suggestions">
            {this.state.suggestions.map((suggestion,index) => {
              let className
              const item = Object.keys(suggestion)
              if(index===this.state.activeSuggestion) {
                className="suggestion-active"
              }
              return (
                <li
                  className={className}
                  key={index}
                  onClick={this.onClick}
                  value={suggestion[item]}
                >
                  {item}
                </li>
              )
            })}
          </ul>
        )
      }
    }

    return (
      <div>
        <input
          name='userInput'
          value={this.state.userInput}
          type='text'
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          placeholder='i.e. chicken, breast'
        />
        {suggestionsList}
      </div>
    )
  }
}

export default Autocomplete