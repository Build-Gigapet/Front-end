import React from "react";
import axiosWithAuth from "../axiosWithAuth";
import KidModal from './KidsModal';
import Navigation from './Header';

class KidsList extends React.Component {

  constructor(props) { super(props); this.state = { data: [], LOADED: false, search: '' }; }

  componentDidMount() {

    const results = [];

    axiosWithAuth()
      .get("https://build-gigapet.herokuapp.com/api/kid")
      .then(result => {
          console.log(result);
        results.push(result.data);
        this.setState({data: results, LOADED: true});
      })
      .catch(err => {
        console.log(err);
      });

  }

  search(event) {

    this.setState({search: event.target.value});

  }

  render() {
    
    const modals = [];
    this.state.data.forEach(result => { result.forEach(kid => {
        if (this.state.search != undefined && kid.kid_name.includes(this.state.search)) {
            modals.push(<KidModal kidName={kid.kid_name} age={kid.age} petName={kid.pet_name} score={kid.score} height={kid.height} favFood={kid.fav_food} weight={kid.weight} />);
        } else if (this.state.search == undefined) {
            modals.push(<KidModal kidName={kid.kid_name} age={kid.age} petName={kid.pet_name} score={kid.score} height={kid.height} favFood={kid.fav_food} weight={kid.weight} />);
        }
    }) });
     
    if (this.state.LOADED)
      if (this.state.data.length > 0)
        return (
          <div className="kid-list" style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <form>
                <input type='text' style={{width: '80%'}}  onChange={event => this.search(event)} />
            </form>
            <div style={{width: '60%', height: '100%', margin: '20px auto 0px auto', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap'}}>
              {modals}
            </div>
          </div>
        );
      else 
        return (<div className="kid-list" style={{width: '100%', height: '100%'}}><Navigation /></div>);
    else
      return (<>
        <div>
            <h1>Loading...</h1>
        </div></>);

  }

}

export default KidsList;
