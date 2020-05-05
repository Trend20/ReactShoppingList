import React, {Component} from 'react';
import image from './img/vumbulaitem.png';
import {ItemCard} from "./components/ItemCard";
import {Footer} from "./components/Footer";
import {Nav} from "./components/Nav";
import {Jumbtron} from "./components/Jumbtron";
import AddItem from "./components/AddItem";

class App extends Component {
  //TODO 1: Add name and price to the state object
  state = {
    name: '',
    price: '',
    items: [
      {
        id: 1,
        name: "Noodles",
        price: "15"
      },
      {
        id: 2,
        name: "Mangoes",
        price: "10"
      },
      {
        id: 3,
        name: "Oranges",
        price: "20"
      },
      {
        id: 4,
        name: "Passion Fruits",
        price: "14"
      }
    ]
  };

  //TODO 9: Create an arrow function called handleInputChange which accepts event as its own argument.
  handleInputChange = (event) =>{
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name] :value
    });
  };
  //TODO 10: Handle the event changes in the name and price input elements when a user types in them.
  //TODO 14: Define an arrow function called addItem which accepts event as its only argument.
  //TODO 15: Within it call preventDefault() on event and also add the functionality to add
  //TODO the name and price to the items array within the component state.

  render() {
    //TODO 2: Destruct name and price from the state object and pass them as props to the AddItem component.
    const { name, price } = this.state;
    //TODO 11: Define an onChange prop on the AddItem component with a value of this.handleInputChange
    //TODO 16: Define an onSubmit prop on the AddItem with a value of this.addItem
    return <div>
      <Nav/>

      <Jumbtron/>

      <div className="container pt-4">

        <AddItem 
        name={name}
        price={price}
        onChange={this.handleInputChange} 
        />

        <h1 className="display-4 my-4 text-center text-muted">Items</h1>

        <div className="row">
          {
            this.state.items.map((item, index) =>
                <ItemCard
                    key={item.id}
                    index={index}
                    image={image}
                    item={item}
                />
            )
          }
        </div>

        <hr/>
        <Footer/>
      </div>
    </div>;
  }
}

export default App;
