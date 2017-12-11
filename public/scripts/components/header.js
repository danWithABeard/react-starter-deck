import React, { Component } from 'react';

export default class Header extends Component <{}> {
	constructor() {
    super()
    this.state = {
      data: {}
    }
  }

  render() {
		return(
      <div>
        <h1>Header!</h1>
      </div>
		)
	}
}
