import React from 'react';
import axiosWithAuth from "../axiosWithAuth";

class Parent extends React.Component {
    state={
        kids:[], 
        
    }
componentDidMount(){
    this.getData();

}
getData = () => {
    axiosWithAuth()
    .get(`https://build-gigapet.herokuapp.com/api/kid`)
    .then(res =>{
        console.log(res.data)
        this.setState({
            kids:res.data
        })
    })
    .catch(err =>console.log(err))
}
addKid = (kid) =>{
console.log(kid)
this.setState({kids:[...this.state.kids, kid]})
    
        this.setState({kids:res.data})
    }



    render() {
        return (
            <div>
                <p>Loading Data</p>
                <div><UpdateForm kids={this.state.kids} addKid={this.addKid} />
                {this.state.kids.map(kid =>{
                    return(<div className="kid-list" key={kid.id}>
                        <p>{kid.kid_name}</p>
                        <p>{kid.age}</p>
                        <p>{kid.pet_name}</p>
                        <p>{kid.score}</p>
                        <p>{kid.height}</p>
                        <p>{kid.fav_food}</p>
                        <p>{kid.weight}</p>
                })}
                
                "kid_name" : "Lizza",
   "age": 2,
   
                </div>

            </div>
        )
    }
}
export default Parent;