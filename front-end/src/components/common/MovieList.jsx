import React from 'react';
import MovieForm from './movieFrame';
const MovieList = ({details}) =>{
    return(
        <section className="featured-section">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h2>Featured Movies</h2>
				</div>
			</div>
			<div className="row">
				<MovieForm details = {details}/>
        	</div>
    	</div>
	    </section>
    )
}

export default MovieList;