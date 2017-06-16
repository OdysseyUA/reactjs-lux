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

export default class UserDetails extends React.Component {

	constructor() {
		super();
		this.state = {
			user: {}
		}
	}


	componentWillMount() {
		this.setState({user: user})
	}


	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
						<div className="well profile">
							<div className="col-sm-12">
								<div className="col-xs-12 col-sm-8">
									<h2>Nicole Pearson</h2>
									<p><strong>About: </strong> {user.prof} </p>
									<p><strong>Hobbies: </strong> {user.hobbies} </p>
									<p><strong>Skills: </strong>
										{/*<span className="tags">html5</span>*/}
										{/*<span className="tags">css3</span>*/}
										{/*<span className="tags">jquery</span>*/}
										{/*<span className="tags">bootstrap3</span>*/}
										{user.skills.map((skill, index) => {return <span key={index} className="tags" style={{margin: 5}}>{skill}</span>})}
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