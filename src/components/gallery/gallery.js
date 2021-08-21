import React, {Component} from 'react';
import SkillsForm from "../skillsForm";
import GalleryItem from "./gallery-item";
import {fetchData} from "../../services/api-services";

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchVal: '',
            listItem: [],
            page: 1,
            per_page: 12,
            pageCount: []
        }
    }

    getpaginationClass(val) {
        return (val === this.state.page) ? 'page-item active' : 'page-item'
    }

    onSearchValue = (value, page=1) => {
        let temp = 0;
        fetchData(value, page, this.state.per_page)
            .then(
                result => {
                    for (let i = 0; i < result.totalHits; i+=12){
                        temp++;
                    }
                    this.setState({
                        listItem: result.hits,
                        pageCount: new Array(temp).fill(0),
                        page: page,
                        searchVal: value
                    });
                }
            );
    }
    goToPage(val) {
        if (this.state.page !== val){
            this.onSearchValue(this.state.searchVal, val)
        }

    }

    render() {
        return (
            <div>
                <div className='row justify-content-center mt-3'>
                    <SkillsForm onAddNewSkill={this.onSearchValue} placeholder="Enter a place" buttonName="Search"
                                from="gallery"/>
                </div>
                <div className='row justify-content-start mt-3'>
                    {
                        (!this.state.searchVal) ? <p className='text-center'>Enter a place, please!</p> : ''
                    }
                    {
                        (this.state.searchVal && !this.state.listItem.length) ?
                            <p className='text-center'>There is no photo for '{this.state.searchVal}'</p> :
                            this.state.listItem.map(
                                (item, index) => <GalleryItem key={index} title={item.tags} imageUrl={item.webformatURL} altText={item.type}/>
                            )
                    }
                    {
                        (this.state.searchVal && !this.state.listItem.length) ? '' :
                            <nav aria-label="Page navigation example">
                                <ul className="pagination d-flex flex-wrap">
                                    {
                                        this.state.pageCount.map(
                                            (x, index) => <li
                                                key={index}
                                                className={((index+1) === this.state.page) ? 'page-item active' : 'page-item'}
                                                aria-current={((index+1) === this.state.page) ? 'page' : ''}
                                            >
                                                <button
                                                    className="page-link"
                                                    onClick={() => this.goToPage(index+1)}>
                                                        {index+1}
                                                </button>
                                            </li>
                                        )
                                    }
                                </ul>
                            </nav>
                    }
                </div>
            </div>
        );
    }
}

export default Gallery;