import React, {Component} from 'react';

class SkillsForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            skillValue: ''
        }
    }

    setSkill = (event) => {
        this.setState({
            skillValue: event.target.value
        })
    }

    onAddSkill = (event) => {
        event.preventDefault();
        this.props.onAddNewSkill(this.state.skillValue);
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onAddSkill} className="row g-3 align-items-center mb-2">
                    <div className="col">
                        <input value={this.state.skillValue}
                               onChange={this.setSkill}
                               className="form-control"
                               type="text"
                               name="skill"
                               placeholder={this.props.placeholder}/>
                    </div>
                    <div className="col-auto px-3">
                        <button type="submit" className="btn btn-primary">{this.props.buttonName}</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SkillsForm;