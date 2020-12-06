import HelloWorld from './components/HelloWorld';
import Table from './components/Table';
import React from 'react';
import Shops from 'shops';
import $ from 'jquery';


class IssueFilter extends React.Component {
  render() {
    return (<div>
				<p>This is the Table of shops</p>
    </div>)
  }

}

class IssueAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = issueAdd;
    const list = {
      name: form.name.value,
      area: form.area.value,
      rating: form.rating.value
    };

    this.props.createIssueFunction(list);
    form.name = "";
    form.area= "";
    form.rating = "";
  }

  render() {
				<form name="issueAdd" onSubmit={this.handleSubmit}>
					<input type="text" placeholder="Rating" name="rating">
					<input type="text" placeholder="Shop Name" name="name">
					<input type="text" placeholder="Adress" name="area">
					<button type="submit">Add</button>
				</form>
  }

}





function IssueRow(props) {
  const style = props.rowStyle;
   return (
	 <tr>
			 <td style:{style}>{props.list.id}</td>
			 <td style:{style}>{props.list.name}</td>
			 <td style:{style}>{props.list.area}</td>
			 <td style:{style}>{props.list.rating}</td>
			 <td style:{style}>{props.list.date}</td>
		</tr>
			 )
}

function IssueList(props) {
  const rowStyle = {
    border: "1px solid silver",
    padding: 4
  };
  const issueRows = props.list.map(issue => <IssueRoww Style={rowStyle},list={list} />);

  return (
								<table style="borderCollapse:collapse;">
																		 <thead>
																			 <th>ID</th>
																			 <th>Name</th>
																			 <th>Area</th>
																			 <th>Rating</th>
																			 <th>Date</th>
																		 </thead>
																		 <tbody>{issueRows}</tbody>
								</table>)
	}


class IssueTable extends React.Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  loadData() {
    //Represents a asychronous server call
    setTimeout(() => {
      this.setState({
        list: initialIssues
      });
    }, 1000);
  }

  componentDidMount() {
    this.loadData();
  }

  createIssue(list) {
    list.id = this.state.list.length + 1;
    list.date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    const newIssueList = this.state.list.slice();
    newIssueList.push(list);
    this.setState({
      list: newIssueList
    });
  }

  render() {
    return(
					<>
						<IssueFilter/>
				<br/>
						<IssueList/>
				<br/>
						<IssueAdd createIssueFunction=this.createIssue.bind(this) />
				  </>
		)
}
export default IssueTable
