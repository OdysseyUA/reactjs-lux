require("bootstrap/dist/css/bootstrap.css");
import React from 'react';
import {render} from 'react-dom';

import GridComponent from './grid';
import {SummaryActive, SummaryUsers} from './summaries';
import UserDetails from './user-details';


render(
	<UserDetails/>,
	document.getElementById('app'),
	()=>console.log('component render callback')
);
