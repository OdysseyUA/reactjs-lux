/**
 * Created by bh on 6/16/17.
 */

import React from 'react';
require('../css/user-details.css');

let user = {
	name: "Nicole Pearson",
	prof: "Web Designer / UI",
	hobbies: ["Read", "out with friends", "listen to music"],
	skills: ["html5", "css3", "react"]
};

let detailsRecords = [
	{
		id: 1,
		name: "John Doe",
		about: "Nice guy",
		hobbies: "Likes drinking wine",
		skills: ["html", "javascript", "redux"]
	},
	{
		id: 2,
		name: "Mary Moe",
		about: "Cute girl",
		hobbies: "Likes playing xbox whole days long",
		skills: ["Fortran", "Lua", "R#"]
	}
];

export default class UserDetails extends React.Component {

	constructor() {
		super();
		this.state = {
			user: {}
		}
	}


	componentWillMount() {
		let user;
		// this.setState({user: user});
		// console.log(this.props);
		// console.log(this.props.params);
		// console.log(':: ' + this.props.params.id);
		// console.log(':: ' + detailsRecords[this.props.params.id-1].name);
		if(this.props.params.id) {
			user = detailsRecords.filter((user) => user.id == this.props.params.id);
			this.setState({user: user[0]});
		}
		else {
			user = detailsRecords[1];
			this.setState({user: user});
		}
	}


	render() {
		return (
			<div className="container">
				<h2>THIS IS PARAM FROM GRIDCOMPONENT: {this.props.params.id}</h2>
				<div className="row">
					<div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
						<div className="well profile">
							<div className="col-sm-12">
								<div className="col-xs-12 col-sm-8">
									<h2>{this.state.user.name}</h2>
									<p><strong>About: </strong> {this.state.user.prof} </p>
									<p><strong>Hobbies: </strong> {this.state.user.hobbies} </p>
									<p><strong>Skills: </strong>
										{/*<span className="tags">html5</span>*/}
										{/*<span className="tags">css3</span>*/}
										{/*<span className="tags">jquery</span>*/}
										{/*<span className="tags">bootstrap3</span>*/}
										{user.skills.map((skill, index) => {
											return <span key={index} className="tags" style={{margin: 5}}>{skill}</span>
										})}
									</p>
								</div>
								<div className="col-xs-12 col-sm-4 text-center">
									<figure>
										<img
											src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-2.jpg"
											alt="" className="img-circle img-responsive"/>
									</figure>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}