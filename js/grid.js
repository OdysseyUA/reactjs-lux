/**
 * Created by bh on 6/14/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {hashHistory, Link} from 'react-router';


const dataSource = [
	{firstName: "John", lastName: "Doe", active: false, id:1},
	{firstName: "Mary", lastName: "Moe", active: false, id:2},
	{firstName: "Peter", lastName: "Noname", active: true, id:3}
];


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
			<th> <Link to={`/details/${this.props.record.id}`}>{record.id}</Link> </th>
			<th>{record.firstName}</th>
			<th>{record.lastName}</th>
			<th>
				<input type="checkbox" checked={record.active} onChange={this.props.toggleActive}/>
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


export default class GridComponent extends React.Component {

	constructor() {
		super();
		this.state = {
			records: []
		}
	}

	//	componentWillMount() (def: componentDidMount)
	componentDidMount() {
		this.refs.filterInput && this.refs.filterInput.focus();
		this.setState({
			records: dataSource
		});
	}

	toggleActive(index) {
		let {records} = this.state;

		records[index].active = !records[index].active;

		this.setState({
			records: records
		})
	}


	handleFilterChange(e) {
		let value = e.target.value,
			records = dataSource.filter(
				(record) => record.firstName.toUpperCase().includes(value.toUpperCase())
			);

		this.setState({
			records: records
		});
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
					{records}
					</tbody>

				</table>
				<div>
					{this.props.children && React.cloneElement(this.props.children, {records: this.state.records})}
				</div>
			</div>
		)
	}
}