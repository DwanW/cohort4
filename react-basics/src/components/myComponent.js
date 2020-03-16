import React from 'react';

class MyComp extends React.Component {
	render() {
			return (
				<div>
					<h1>{this.props.whatToSay}</h1>
                    <button onClick={this.props.onPushMe}></button>
				</div>
			)
		}
}

export default MyComp;