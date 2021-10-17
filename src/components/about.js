import React, {Component} from 'react';
import SkillsForm from "./small-piece/skillsForm";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Keep you smile",
            contact: {
                name: "Yakhad",
                profile: "images/profile.png",
                email: "xxx@yyy.zzz"
            },
            skills: [
                {id: 1, skill: "Software engeneering"},
                {id: 2, skill: "DevOps"},
                {id: 3, skill: "UI Design"}
            ],
            skillValue: ''
        }
    }

    onAddSkill = (skillValue) => {
        this.setState({
            skills: [...this.state.skills, {
                id: this.state.skills.pop().id + 1,
                skill: skillValue
            }],
        });
    }

    onDelete(skill) {
        let mySkill =  this.state.skills.filter(
            (value) => value.id !== skill.id
        )
        mySkill.forEach((value, index) => {value.id = index + 1})
        this.setState({
            skills: mySkill
        });
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header text-center h1"><label>{this.state.title}</label></div>
                    <div className='row p-2'>
                        <div className="col-auto px-22">
                            <img width={100} src={this.state.contact.profile} alt="Profile"/>
                        </div>
                        <div className="col">
                            <ul className="list-group">
                                <li className="list-group-item">{this.state.contact.name}</li>
                                <li className="list-group-item">{this.state.contact.email}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card mt-3">
                    <div className="card-header text-center h2">
                        Skills
                    </div>
                    <div className="card-body">
                        <SkillsForm onAddNewSkill={this.onAddSkill} placeholder="Skill to Add" buttonName="Add"/>
                        <table className="table border">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Skill</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.skills.map(
                                    (skill) => <tr key={skill.id}>
                                        <td>{skill.id}</td>
                                        <td>{skill.skill}</td>
                                        <td>
                                            <button onClick={() => this.onDelete(skill)} className="btn btn-danger">
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;