import * as React from "react";
import PhotosStore from '../../stores/photosStore';

export default class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            photos: []
        };
        this.animationProps = null;
        this.getAlbumPhotos = this.getAlbumPhotos.bind(this);
        this.pauseAnimation = this.pauseAnimation.bind(this);
        this.playAnimation = this.playAnimation.bind(this);
        this.cancelAnimation = this.cancelAnimation.bind(this);
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);
        this.player = null;
    }

    componentDidMount() {
        PhotosStore.addChangeListener(this.getAlbumPhotos);
    }

    getAlbumPhotos() {
        this.setState({photos: PhotosStore.getAllPhotos()});
    }

    /**
     * Counting photos and setting
     * @param photos
     * @returns {{keyframes: Array,
     *              options: {duration: number, iterations: Number},
     *              containerWidth: string,
     *              imgWidth: number,
     *              slideDuration: number}}
     */
    calcAnimationProps(photos) {

        let keyframes = [];
        let transform = 0;
        let transformStep = 100 / photos.length;
        let slideDuration = 2000;
        let duration = 0;
        let width = 0;

        photos.forEach((item) => {
            keyframes.push({transform: `translate(${transform}%)`});
            keyframes.push({transform: `translate(${transform}%)`});
            transform -= transformStep;
            duration += slideDuration;
            width += 100;
        });

        return {
            keyframes: keyframes,
            options: {duration: duration, iterations: Infinity},
            containerWidth: width + '%',
            imgWidth: transformStep,
            slideDuration: slideDuration
        };
    }

    pauseAnimation() {
        this.player.pause();
    }

    playAnimation() {
        this.player.play();
    }

    cancelAnimation() {
        this.player.cancel();
    }

    goToPrevSlide() {
        this.player.pause();
        let slideNumber = Math.floor(this.player.currentTime.toFixed(0) / this.animationProps.slideDuration);
        if (slideNumber <= 0) {
            this.player.currentTime = this.animationProps.slideDuration / 2;
        } else {
            this.player.currentTime = ((slideNumber - 1) * this.animationProps.slideDuration) + this.animationProps.slideDuration / 2;
        }
    }

    goToNextSlide() {
        this.player.pause();
        let slideNumber = Math.floor(this.player.currentTime.toFixed(0) / this.animationProps.slideDuration);
        if (slideNumber < 0) {
            this.player.currentTime = this.animationProps.slideDuration / 2;
        } else {
            this.player.currentTime = ((slideNumber + 1) * this.animationProps.slideDuration) + this.animationProps.slideDuration / 2;
        }
    }

    render() {
        this.animationProps = this.calcAnimationProps(this.state.photos);

        return (
            <div className="slider">
                <figure ref={(figure) => {
                    if (figure) {
                        figure.style.width = this.animationProps.containerWidth;
                        this.player = figure.animate(this.animationProps.keyframes, this.animationProps.options);
                    }
                }}>
                    {this.state.photos.map((item, i) => {
                        return (<div key={i} ref={(el) => {
                            if (el)
                                el.style.backgroundImage = `url('${item.src}')`;
                        }}/>)
                    })}
                </figure>
                {this.state.photos.length > 0 ? (
                    <div className="slider__slider-controls">
                        <button onClick={this.pauseAnimation}>Pause</button>
                        <button onClick={this.playAnimation}>Play</button>
                        <button onClick={this.cancelAnimation}>Stop</button>
                        <button onClick={this.goToPrevSlide} className="slider__btn slider__btn_prev">Prev</button>
                        <button onClick={this.goToNextSlide} className="slider__btn slider__btn_next">Next</button>
                    </div>
                ) : <div/>}
            </div>
        );
    }
}

