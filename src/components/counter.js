import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
            list: [0]
        }
    }

    compute = (val) => {
        let c = (val === '+') ? this.state.counter + 1 : this.state.counter - 1;
        this.setState({
            counter: c,
            list: (c >= 1 ) ? new Array(c).fill(0) : [0]
        });
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <strong>
                        {this.props.title? this.props.title: 'Default Title'} : {this.state.counter}
                    </strong>
                </div>
                <div className="mx-auto">
                    <button onClick={() => this.compute('+')} className="btn btn-primary m-2">+</button>
                    <button onClick={() => this.compute('-')} className="btn btn-primary m-2">-</button>
                </div>
                <div className="card-body">
                    {
                        this.state.list.map(
                            (value, index) =>
                                <span>{index} <img src={this.props.image? this.props.image: 'images/profile.png'} width={200} height={200} alt=''/>
                                </span>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Counter;