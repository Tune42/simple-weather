import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : null,
        }
    }

    handleChange = (e) => {
        this.setState({
            value : e.value,
        })
    }

    render() {
        return (
            <form className='location-search mb-5'>
                <input className='input is-info small-input is-rounded search-bar' 
                type='text' placeholder='Search a new location' onChange={this.handleChange}>{this.state.value}</input>
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