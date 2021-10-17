import React, {Component} from 'react';
import SkillsForm from "../small-piece/skillsForm";
import GalleryItem from "./gallery-item";
import {fetchData} from "../../services/api-services";
import {Pagination} from "../small-piece/pagination";

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchVal: '',
            listItem: [],
            currentPage: 1,
            per_page: 12,
            pageCount: []
        }
    }

    onSearchValue = (value, page = 1) => {
        let temp = 0;
        console.log(page)
        fetchData(value, page, this.state.per_page)
            .then(
                result => {
                    for (let i = 0; i < result.totalHits; i += 12) {
                        temp++;
                    }
                    this.setState({
                        listItem: result.hits,
                        pageCount: new Array(temp).fill(0),
                        currentPage: page,
                        searchVal: value
                    });
                }
            );
    }

    goToPage(val) {
        console.log(val);
        console.log(this.state.currentPage);
        if (this.state.currentPage !== val) {
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
                                (item, index) => <GalleryItem key={index} title={item.tags} imageUrl={item.webformatURL}
                                                              altText={item.type}/>
                            )
                    }
                    {
                        (this.state.searchVal && !this.state.listItem.length) ? '' :
                            <Pagination
                                pageCount={this.state.pageCount}
                                page={this.state.currentPage}
                                goToPage={this.goToPage.bind(this)}
                            />
                    }
                </div>
            </div>
        );
    }
}

export default Gallery;