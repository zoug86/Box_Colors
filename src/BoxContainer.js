import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 18,
        colorList: ["purple", "pink", "yellow", "green", "blue", "orange"]
    }
    render() {
        const boxes = [...Array(this.props.numBoxes)].map(() => {
            return <Box colors={this.props.colorList} />
        })
        return (
            <div className="BoxContainer">
                {boxes}
            </div>
        )
    }
}

export default BoxContainer;
