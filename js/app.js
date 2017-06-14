require("bootstrap/dist/css/bootstrap.css");
import React from 'react';
import {render} from 'react-dom';


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
			<th>{record.lastName}</th>
			<th><input type="checkbox" checked={record.active}/></th>
		</tr>
	}
}


class GridComponent extends React.Component {

	constructor() {
		super();
		this.state = {
			records: []
		}
	}

	//	componentWillMount() (def: componentDidMount)
	componentDidMount() {
		this.setState({
			records: dataSource
		})
	}

	render() {
		let records = this.state.records.map((record) => {
				console.log('the record: ' + JSON.stringify(record));
				return <GridRecord record={record}/>
			}
		);

		// records.map((r) => console.log(JSON.stringify(r)));
		// console.log('records in render: ' + JSON.stringify(records.record));
		console.log('records in render: ' + records);

		return (
			<div style={{width: 300, height: 300, padding: 20}}>
				<p>
					<input type="text" placeholder="Filter by..."/>
				</p>
				<table className="table table-condensed">
					<thead>
					<tr>
						<th>Firstname</th>
						<th>Lastname</th>
						<th>Active</th>
					</tr>
					</thead>

					<tbody>
					{records}
					</tbody>

				</table>
			</div>
		)
	}
}


render(
	<GridComponent/>,
	document.getElementById('app'),
	()=>console.log('component render callback')
);
