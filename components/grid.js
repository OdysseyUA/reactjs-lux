/**
 * Created by bh on 6/14/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {hashHistory, Link} from 'react-router';

import { connect } from 'react-redux'
import UserDetail from './user-detail';

class GridRecord extends React.Component {

	showUserDetails(e) {
		e.preventDefault();
		hashHistory.push(`/details/${this.props.record.id}`);
	}


	render() {
		let {record} = this.props;

		// console.log('props: ' + JSON.stringify(this.props));
		// console.log('props: ' + JSON.stringify(this.props));

		return <tr>
			{/*<th onClick={this.showUserDetails.bind(this)}> <a href="#">{record.id}</a> </th>*/}
			<th><Link to={`/details/${this.props.record.id}`}>{record.id}</Link></th>
			<th>{record.firstName}</th>
			<th>{record.lastName}</th>
			<th>
				<input type="checkbox" checked={record.active} onChange={this.props.changeActive}/>
			</th>
		</tr>
	}
}

GridRecord.defaultProps = {
	record: {
		firstName: "N/A",
		lastName: "N/A",
		active: false
	}
};

GridRecord.propTypes = {
	record: PropTypes.shape(
		{
			firstName: PropTypes.string.isRequired,
			lastName: PropTypes.string.isRequired,
			active: PropTypes.bool.isRequired
		},
	),
	test: PropTypes.string
};


class GridComponent extends React.Component {

	constructor() {
		super();
		this.state = {
			records: []
		}
	}

	//	componentWillMount() (def: componentDidMount)
	componentDidMount() {
		this.refs.filterInput && this.refs.filterInput.focus();
	}

	toggleActive(index) {
		let {dispatch} = this.props;

		dispatch(
			{
				type: "TOGGLE_ACTIVE",
				value: index
			}
		);
	}


	handleFilterChange(e) {
		let {dispatch} = this.props;

		dispatch(
			{
				type: "FILTER",
				value: e.target.value
			}
		);
	}

	render() {
		let records = this.state.records.map((record, index) => {
				// console.log('the record: ' + JSON.stringify(record));
				return <GridRecord
					key={index}
					record={record}
					changeActive={this.toggleActive.bind(this, index)}
				/>
			}
		);

		console.log('============================================');

		/*
		 records.map((r) => console.log(JSON.stringify(r)));
		 console.log('records in render: ' + JSON.stringify(records.record));
		 */
		// console.log('records in render: ' + records);

		return (
			<div style={{width: 500, height: 300, padding: 20}}>
				<p>
					<input type="text" ref="filterInput" placeholder="Filter by..."
						   onChange={this.handleFilterChange.bind(this)}/>
				</p>
				<table className="table table-condensed">
					<thead>
					<tr>
						<th>Id</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Active</th>
					</tr>
					</thead>

					<tbody>
					{
						this.props.records.map((record, index)=> {
							return <GridRecord record={record}
											   key={index}
											   changeActive={this.toggleActive.bind(this, index)}
							/>
						})
					}
					</tbody>

				</table>
				<div>
					{this.props.children && React.cloneElement(this.props.children, {records: this.state.records})}
				</div>
			</div>
		)
	}
}


GridComponent.propTypes = {
	records: PropTypes.array.isRequired
};

function mapStateToProps(state) {
	return {
		records: state.grid
	}
}


export default connect(mapStateToProps)(GridComponent)