import React, { Component } from 'react';

const style = { fontSize: '22px', color: '#151575' };
const dispstyle = { paddingTop: '5px' };
const rowClass = 'w3-row';
const colLeft = 'w3-col w3-half';

export default class CustomHeaderGroup extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <div className={rowClass} style={dispstyle}>
                    <div className={colLeft} style={style}>
                        {this.props.displayName}
                    </div>
                </div>
            </div>
        );
    }
}
