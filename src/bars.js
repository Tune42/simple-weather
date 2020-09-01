import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : '',
        }
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({
            value : value,
        })
    }

    handleSubmit = (e, value) => {
        e.preventDefault();
        console.log(value);
        this.props.getCoordinates(value);
    }

    render() {
        return (
            <form className='location-search mb-5' onSubmit={(e) => this.handleSubmit(e, this.state.value)}>
                <input 
                className='input is-info small-input is-rounded search-bar' 
                type='text' 
                placeholder='Search a new location' 
                onChange={this.handleChange}
                value={this.state.value} />
            </form>
        )
    }
}

function LoadingBar(props) {
    if (props.loading) {
      return (
        <progress className="progress is-small is-primary" max="80">60%</progress>
      )
    } else {
      return <br />
    }
  }

export {SearchBar, LoadingBar}