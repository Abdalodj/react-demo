const imgStyle = {
    //width: '300px',
    height: '200px'
}

function GalleryItem(props) {
    return (
        <div className='col-sm-8 col-md-4 col-lg-3 py-2'>
            <div className="card">
                <div className="card-header">
                    {props.title}
                </div>
                <img src={props.imageUrl} className="card-img-top img-fluid" alt={props.altText} style={imgStyle}/>
                <div className="card-body py-4">
                    <button className="btn btn-primary">More Details</button>
                </div>
            </div>
        </div>
    );
}

export default GalleryItem
