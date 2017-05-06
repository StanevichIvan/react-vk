import * as React from "react";
import PhotosStore from '../../stores/photosStore';
import PhotosActions from '../../actions/photosActions';

export default class Albums extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            albums: []
        };
        this.getAlbums = this.getAlbums.bind(this);
    }

    componentDidMount() {
        PhotosActions.getAlbums(this.state.id);
        PhotosStore.addChangeListener(this.getAlbums);
    }

    getAlbums() {
        this.setState({
            id: this.state.id,
            albums: PhotosStore.getAlbums()
        });
    }

    albumSelect(albumId) {
        PhotosActions.getAlbumPhotos(this.state.id, albumId);
    }

    render() {
        return (
            <div className="albums">
                {this.state.albums.map((item, i) => {
                    return (
                        <div className="albums__tumb" key={i} onClick={() => {this.albumSelect(item.id);}}
                             ref={(el) => {
                                 if(el)
                                    el.style.backgroundImage = `url('${item.coverSrc}')`;
                             }}>
                            <p className="albums__tumb-text">{item.title}</p>
                        </div>);
                })}
            </div>
        );
    }
}