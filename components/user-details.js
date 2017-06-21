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

export class UserDetail extends React.Component {
	render() {
		let {detail} = this.props;
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
						<div className="well profile">
							<div className="col-sm-12">
								<div className="col-xs-12 col-sm-8">
									<h2>{detail.name}</h2>
									<p><strong>About: </strong> {detail.about} </p> <p>
									<strong>Hobbies: </strong> {detail.hobbies} </p>

									<p><strong>Skills: </strong>
										{detail.skills.map((skill, i)=> {
											return <span key={i} className="tags">{skill}</span>
										})}
									</p>
								</div>

								<div className="col-xs-12 col-sm-4 text-center">
									<figure>
										<img
											src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile- Avatar-2.jpg"
											alt=""
											className="img-circle img-responsive"
										/>
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