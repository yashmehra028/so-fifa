import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdatePlayerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      overall_rating: '',
      potential: '',
      value: '',
      wage: '',
      crossing: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/players/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          name: res.data.name,
          overall_rating: res.data.overall_rating,
          potential: res.data.potential,
          value: res.data.value,
          wage: res.data.wage,
          crossing: res.data.crossing
        })
      })
      .catch(err => {
        console.log("Error from UpdatePlayerInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      overall_rating: this.state.overall_rating,
      potential: this.state.potential,
      value: this.state.value,
      wage: this.state.wage,
      crossing: this.state.crossing
    };

    axios
      .put('http://localhost:8082/api/players/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-player/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdatePlayerInfo!");
      })
  };


  render() {
    return (
      <div className="UpdatePlayerInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Player List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Player</h1>
              <p className="lead text-center">
                  Update Player's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="name">Name</label>
              <input
                type='text'
                placeholder='Name of the Player'
                name='name'
                className='form-control'
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="overall_rating">Overall Rating</label>
              <input
                type='text'
                placeholder='Overall Rating'
                name='overall_rating'
                className='form-control'
                value={this.state.overall_rating}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="potential">Potential</label>
              <input
                type='text'
                placeholder='Potential'
                name='potential'
                className='form-control'
                value={this.state.potential}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="value">Value</label>
              <input
                type='text'
                placeholder='Value'
                name='value'
                className='form-control'
                value={this.state.value}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="wage">Wage</label>
              <input
                type='text'
                placeholder='wage'
                name='wage'
                className='form-control'
                value={this.state.wage}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="crossing">Crossing</label>
              <input
                type='text'
                placeholder='Crossing'
                name='crossing'
                className='form-control'
                value={this.state.crossing}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Player</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdatePlayerInfo;