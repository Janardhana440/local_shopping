import React from 'react';
import https from 'https';
import fetch from 'node-fetch';
var NameInput = React.createClass({
	render: function() {
    return (
      <div className="form-group">
        <label for="name">Shop Name</label>
        <input id="name" placeholder="Search..." />
				<button type="submit" onClick={this.onClick}>Search</button>
				<Table name={props.name}/>
      </div>
    );
  },
	construct(){
		super()
		this.onCLick=this.onClick.bind(this);
	}
	onClick(e) {
		const form=form-group;
		const name=form.name.value;
	}

});
