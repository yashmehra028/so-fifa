import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreatePlayer extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      overall_rating:'',
      potential:'',
      value:'',
      wage:'',
      crossing:''
    };
  }

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
      .post('http://localhost:8082/api/players', data)
      .then(res => {
        this.setState({
          name: '',
          overall_rating:'',
          potential:'',
          value:'',
          wage:'',
          crossing:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreatePlayer!");
      })
  };

  render() {
    return (
      <div className="CreatePlayer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Player List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Player</h1>
              <p className="lead text-center">
                  Create new player
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
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
                  <input
                    type='text'
                    placeholder='Wage'
                    name='wage'
                    className='form-control'
                    value={this.state.wage}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Crossing'
                    name='crossing'
                    className='form-control'
                    value={this.state.crossing}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePlayer;