import React from 'react'

class HelloItemList extends React.Component{
	makeLi(i){
		return <li key = {i}> Hello World </li>
	}
	render(){
		return( <ul>
		{
			
		}
		</ul>);
	}
}

export default HelloItemList;
