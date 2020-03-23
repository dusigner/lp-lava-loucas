import React from 'react';
import Video from '../../components/video/video';
import Button from '../../components/button/button';
import Title from '../../components/title/title';

//libs
import Slider from "react-slick";



class Videos extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
			nav1: null,
			nav2: null
		};
    }

    componentDidMount() {

        /* Controla slider pela navegação */
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
        
        /* Esculta o scrool */
        window.addEventListener('scroll', this.onWindowScroll);

        /* Taguamento do video 0 */
        // var video = document.getElementById("video0");

        // let firstPush = 0,
        //     secondPush = 0,
        //     thirdPush = 0,
        //     fourthPush = 0;

        // video.addEventListener("timeupdate", function(){

        //     const videoTime = (video.currentTime / video.duration * 100).toFixed(2);

        //     if (firstPush==0) {
        //         if (videoTime >= 25){
        //             dataLayer.push({
        //                 event: 'generic',                     
        //                 category: 'lavadora_edge',
        //                 action: 'video_nova_geração',
        //                 label: '25'
        //             })
        //             firstPush=1;
        //         }
        //     }
        //     if (secondPush==0) {
        //         if (videoTime >= 50){
        //             dataLayer.push({
        //                 event: 'generic',                     
        //                 category: 'lavadora_edge',
        //                 action: 'video_nova_geração',
        //                 label: '50'
        //             })
        //             secondPush=1;
        //         }
        //     }
        //     if (thirdPush==0) {
        //         if (videoTime >= 75){
        //             dataLayer.push({
        //                 event: 'generic',                     
        //                 category: 'lavadora_edge',
        //                 action: 'video_nova_geração',
        //                 label: '75'
        //             })
        //             thirdPush=1;
        //         }
        //     }
        //     if (fourthPush==0) {
        //         if (videoTime >= 100){
        //             dataLayer.push({
        //                 event: 'generic',                     
        //                 category: 'lavadora_edge',
        //                 action: 'video_nova_geração',
        //                 label: '100'
        //             })
        //             fourthPush=1;
        //         }
        //     }

        // })
    }

    /* função scrool para play no video ao chegar na tela */
    onWindowScroll = () => {

        const videos = document.querySelectorAll('.observerVideo');

        const config = {
            root: null, // avoiding 'root' or setting it to 'null' sets it to default value: viewport
            rootMargin: '0px',
            threshold: 0.5
        };

        const observerVideos = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio == true) {
                    entry.target.play();
                } else {
                    entry.target.pause();
                }
            });
        }, config);
        videos.forEach(video => {
            observerVideos.observe(video);
        });
    }
      
    render() {
        const settings__videos = {
			dots: false,
			arrow: false,
            autoplay: false,
            fade: false,
			infinite: false,
			slidesToShow: 1,
            centerMode: false,
            responsive: [
				{
					breakpoint: 767,
					settings: {
						dots: true,
                        arrow: false,
                        autoplay: false,
                        infinite: false,
                        slidesToShow: 1,
                        centerMode: false,
                        centerPadding: "50px",
					}
				}
            ],
            afterChange: function(index) {
                if(index === 0) {
                    document.getElementById("video0").play();
                }
                if(index === 1) {
                    document.getElementById("video1").play();
                }
                if(index === 2) {
                    document.getElementById("video2").play();
                }
                if(index === 3) {
                    document.getElementById("video3").play();
                }
                if(index === 4) {
                    document.getElementById("video4").play();
                }
          
            },
            beforeChange: function(index) {
                if(index === 0) {
                    document.getElementById("video0").pause();
                }
                if(index === 1) {
                    document.getElementById("video1").pause();
                }
                if(index === 2) {
                    document.getElementById("video2").pause();
                }
                if(index === 3) {
                    document.getElementById("video3").pause();
                }
                if(index === 4) {
                    document.getElementById("video4").pause();
                }
       
            }
        };

        const settings__videosButtons = {
			dots: false,
			arrow: false,
			autoplay: false,
			infinite: false,
			slidesToShow: 2,
			centerMode: false,
            centerPadding: "20px",
            responsive: [
				{
					breakpoint: 767,
					settings: {
						dots: false,
                        arrow: true,
                        autoplay: false,
                        infinite: false,
                        slidesToShow: 1,
                        centerMode: false,
					}
				}
			]
        };
        
        return (
            <div id="videos" className="videos section">

                <Title setClass="center" SetTxtMobileRow1="Garantia em" SetTxtMobileRow2="performance de" SetTxtMobileRow3="limpeza" SetTxtDesktopRow1="Garantia em performance de limpeza"/>
                <p></p>

                <div className="slider__grid">
                    <Slider
                        className="slider__videos-nav" 

                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        {...settings__videosButtons}
                        >
                        <div className="slide__videos-buttons">
                            <Button setClass="not_responsive yes_slider" label="Cesto Flexível" />
                            <p>A lava-louças faz todo o trabalho para que você aproveite os momentos.</p>
                        </div>
                        <div className="slide__videos-buttons">
                            <Button setClass="not_responsive yes_slider" label="Cesto Flexível" />
                            <p>A lava-louças faz todo o trabalho para que você aproveite os momentos.</p>
                        </div>
                        
                    </Slider>

                    <Slider 
                        className="slider slider__videos" 

                        asNavFor={this.state.nav2} 
                        ref={slider => (this.slider1 = slider)} 

                        {...settings__videos}
                    >   
                        <div className="slide__videos-video">
                                <div className="slide__videos-border">
                                </div>
                                <video id="video0" muted="muted" className="observerVideo" name="videoTeste" width="100%" height="100%"  >
                                    <source src="https://res.cloudinary.com/brastempwebp/video/upload/v1583171720/2020-lavadora-edge/BRASTEMP_LAVADORA_ROUPAS_LINHA_F11_boaqualidade_yqee4q.mp4" type="video/mp4"></source>
                                </video>
                        </div>
                        <div className="slide__videos-video">
                                <div className="slide__videos-border">
                                </div>
                                <video id="video1" muted="muted" className="observerVideo" name="videoTeste" width="100%" height="100%" >
                                    <source src="https://res.cloudinary.com/brastempwebp/video/upload/v1583171720/2020-lavadora-edge/BRASTEMP_LAVADORA_ROUPAS_LINHA_F11_boaqualidade_yqee4q.mp4" type="video/mp4"></source>
                                </video>
                        </div>
                        <div className="slide__videos-video">
                                <div className="slide__videos-border">
                                </div>
                                <video id="video2" muted="muted" className="observerVideo" name="videoTeste" width="100%" height="100%"  >
                                    <source src="https://res.cloudinary.com/brastempwebp/video/upload/v1583171720/2020-lavadora-edge/BRASTEMP_LAVADORA_ROUPAS_LINHA_F11_boaqualidade_yqee4q.mp4" type="video/mp4"></source>
                                </video>
                        </div>
                        <div className="slide__videos-video">
                                <div className="slide__videos-border">
                                </div>
                                <video id="video3" muted="muted" className="observerVideo" name="videoTeste" width="100%" height="100%" >
                                    <source src="https://res.cloudinary.com/brastempwebp/video/upload/v1583171720/2020-lavadora-edge/BRASTEMP_LAVADORA_ROUPAS_LINHA_F11_boaqualidade_yqee4q.mp4" type="video/mp4"></source>
                                </video>
                        </div>
                        <div className="slide__videos-video">
                                <div className="slide__videos-border">
                                </div>
                                <video id="video4" muted="muted" className="observerVideo" name="videoTeste" width="100%" height="100%"  >
                                    <source src="https://res.cloudinary.com/brastempwebp/video/upload/v1583171720/2020-lavadora-edge/BRASTEMP_LAVADORA_ROUPAS_LINHA_F11_boaqualidade_yqee4q.mp4" type="video/mp4"></source>
                                </video>
                        </div>
                    </Slider>
                    
                </div>
            </div>
        )
    }
}
export default Videos;