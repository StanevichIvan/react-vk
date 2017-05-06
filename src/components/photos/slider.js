import * as React from "react";
import PhotosStore from '../../stores/photosStore';

export default class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            photos: []
        };
        this.getAlbumPhotos = this.getAlbumPhotos.bind(this);
    }

    componentDidMount() {
        PhotosStore.addChangeListener(this.getAlbumPhotos);
    }

    getAlbumPhotos() {
       this.setState({photos: PhotosStore.getAllPhotos()});
    }

    render() {
        return (
            <div>
            {this.state.photos.map((item, i)=> {
                return (<div key={i}> {item.src} </div>)
            })}
            </div>
        );
    }
}

