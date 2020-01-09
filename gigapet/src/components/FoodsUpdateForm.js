import React from 'react';
import axiosWithAuth from '../axiosWithAuth';
class FoodsUpdateForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            food: {
                food_name: "",
                food_type: "",
                date: "",
                kid_id: ""
            },

        };
    }

    handleChange = e => {
        this.setState({

            [e.target.name]: e.target.value
        });
    }

    addFood = (food) => {
        console.log(food)
        this.setState({ food: [...this.state.food, food] })

    }
    editFood = (food) => {
        axiosWithAuth().put(`/api/food/:id`, food)
            .then(results => {
                this.setState(this.state.food.map(food => {
                    if (this.state.food.id === this.state.food.kid_id) {
                        return this.state.food = results.data
                    } else {
                        return food
                    }

                }))
                window.location = ("/");
            })
            .catch(err => console.log(err.response));
    };

    deleteFood = id => {
        axiosWithAuth().delete('https://build-gigapet.herokuapp.com/api/food/1')
            .then(results => {
                console.log(results.data)
                this.setState(this.state.food.filter(food => {
                    return this.state.food.id !== this.state.food.kid_id;
                }))

            })
            .catch(err => console.log(err));
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.food)
        axiosWithAuth()
            .post(`https://build-gigapet.herokuapp.com/api/food/:id`, this.state)
            .then(results => {
                console.log(results);
                this.setState(results.data)
            })
            .catch(error => {
                console.log(error)
            })
    };
    render() {
        return (
            <div className="foods-update">
                <h3>Edit Foods here</h3>



                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="food_name" placeholder="food_name" value={this.state.food_name} onChange={this.handleChange} />
                    <label>
                        Pick your Food Category
                <select>
                            <option value="fruit">fruit</option>
                            <option value="vegetable">vegetable</option>
                            <option value="whole grains">whole grains</option>
                            <option value="meat">meat</option>
                            <option value="dairy">dairy</option>
                            <option value="fats_&_oils">fats & oils</option>
                            <option value="treats">treats</option>
                            <option value="snacks">snacks</option>
                        </select>
                    </label>

                    <input type="text" name="food_type" placeholder="food_type" value={this.state.food_type} onChange={this.handleChange} />
                    <input type="number" name="date" placeholder="date" value={this.state.date} onChange={this.handleChange} />



                    <button type="submit">Add Food </button>
                    <button type="edit-btn" onClick={this.editFood}>Edit</button>
                    <button type="delete-btn" onClick={this.deleteFood}>Delete</button>



                </form>


            </div>


        )
    }
}
export default FoodsUpdateForm;

