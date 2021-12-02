import React, { Component } from 'react'
import AddItem from './Component/AddItem/AddItem';
import TodoItem from './Component/TodoItem/TodoItem'
 class App extends Component {
       
    state = {
      items : [
        {id: 1 ,  name : "Ahmed" , age:24},
        {id: 2 ,  name : "Mohamed" , age:40},
        {id: 3 ,  name : "Saad" , age:27}
      ]
    }

    deleteItem = (id) => {
      let items = this.state.items.filter(item => {
        return item.id !== id
      })
        this.setState({items});
    }

   addItem = (item) => {
      item.id = Math.random();
      let items = this.state.items;
      items.push(item)
      this.setState({items})
    }

  render() {
    return (
      <div className="App container">
           <TodoItem items={this.state.items} deleteItem={this.deleteItem} />
           <AddItem addItem = {this.addItem}/>
      </div>
    )
  }
}
export default App;