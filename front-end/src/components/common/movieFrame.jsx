import React, { Component } from 'react'
import Button from './button';

class MovieForm extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
            
            {this.props.details.map(detail =>(
                <div className="col-md-3">
                <div className="card">
                <img src="https://via.placeholder.com/300x450" alt="Movie Title" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{detail.title}</h5>
                        <p className="card-text">{detail.genre.name}</p>
                        <Button buttonName="Watch Now"/>
                    </div>
                </div>
            </div>
            ))}
            </React.Fragment>
            
           
        );
    }
}
 
export default MovieForm;