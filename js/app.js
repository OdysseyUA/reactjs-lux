require("bootstrap/dist/css/bootstrap.css");
import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

const dataSource = [
	{firstName: "John", lastName: "Doe", active: false},
	{firstName: "Mary", lastName: "Moe", active: false},
	{firstName: "Peter", lastName: "Noname", active: true}
];


class GridRecord extends React.Component {
	render() {
		let {record} = this.props;

		// console.log('props: ' + JSON.stringify(this.props));

		return <tr>
			<th>{record.firstName}</th>
			{/*<th>{record.lastName} {this.props.key}</th>*/}
			<th>{record.lastName}</th>
			<th>{record.firstName} {record.lastName}</th>
			<th><input type="checkbox" checked={record.active} onChange={this.props.changeActive}/></th>
		</tr>
	}
}

GridRecord.defaultProps = {
	record: {firstName: "N/A", lastName: "N/A", active: false}
};

GridRecord.propTypes = {
	record: PropTypes.shape(
		{
			firstName: PropTypes.string.isRequired,
			lastName: PropTypes.string.isRequired,
			active: PropTypes.bool.isRequired
		}
	)
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
		this.setState({
			records: dataSource
		})
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
				console.log('the record: ' + JSON.stringify(record));
				return <GridRecord
					record={record}
					key={index}
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
					<input type="text" placeholder="Filter by..." onChange={this.handleFilterChange.bind(this)}/>
				</p>
				<table className="table table-condensed">
					<thead>
					<tr>
						<th>Firstname</th>
						<th>Lastname</th>
						<th>Fullname</th>
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

class SummaryActive extends React.Component {
	render() {
		return (
			<div>Active Users: {this.props.records.filter((record)=>record.active).length}</div> )
	}
}
class SummaryUsers extends React.Component {
	render() {
		return (
			<div>Users Count: {this.props.records.length}</div>
		)
	}
}


render(
	<GridComponent>
		<SummaryActive/>
	</GridComponent>,
	document.getElementById('app'),
	()=>console.log('component render callback')
);
