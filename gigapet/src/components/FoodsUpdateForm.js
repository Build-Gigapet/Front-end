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
        axiosWithAuth().put(`/api/food/:id`, kid)
            .then(results => {
                this.setState(food.map(food => {
                    if (food.id === food.id) {
                        return food = res.data
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
                this.setState(food.filter(food => {
                    return food.id !== id;
                }))

            })
            .catch(err => console.log(err));


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

            render() {
                return (
                    <div className="foods-form">



                        <form onSubmit={this.handleSubmit} method="get">
                            <input type="text" name="food_name" placeholder="food_name" value={this.state.food_name} onChange={this.handleChange} />
                            <input type="text" name="food_type" placeholder="food_type" value={this.state.food_type} onChange={this.handleChange} />
                            <input type="number" name="date" placeholder="date" value={this.state.date} onChange={this.handleChange} />



                            <button type="submit" formMethod="post">Add Food </button>
                            <button type="edit-btn">Edit</button>
                            <button type="delete-btn">Delete</button>



                        </form>


                    </div>


                )
            }

            export default FoodsUpdateForm;

