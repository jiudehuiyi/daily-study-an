import React, { Component } from 'react';

import { Link } from "react-router-dom"
class Buttons extends Component {
    render() {
        return (
            <div>
                <Link to="context"> 
                    <button>Context例子</button>
                </Link>
                <Link to="locContext">
                    <button>LocContext例子</button>
                </Link>
            </div>
        );
    }
}

export default Buttons;