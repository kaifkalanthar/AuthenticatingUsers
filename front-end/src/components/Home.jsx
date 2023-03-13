import React, { Component } from 'react';
import axios from 'axios';
import HeroSection from './common/heroSection';
import MovieList from './common/MovieList';
export default class Home extends Component {

	state = {posts :[]}

	async componentDidMount (){
		const {data : posts} = await axios("http://localhost:3900/api/movies");
		this.setState({posts});
	} 
	
  render() {
    return (
      	<React.Fragment>
      		<HeroSection/>
			<MovieList details={this.state.posts}/>
  		</React.Fragment>
    );
  }
}
