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
		this.setState({
		  nav1: this.slider1,
		  nav2: this.slider2
        });
    }
      
    render() {

        const settings__videos = {
			dots: false,
			arrow: false,
			autoplay: false,
			infinite: false,
			slidesToShow: 1,
			centerMode: true,
            centerPadding: "20px",
        };

        const settings__videosButtons = {
			dots: false,
			arrow: false,
			autoplay: false,
			infinite: false,
			slidesToShow: 2,
			centerMode: true,
            centerPadding: "20px",
        };
        
        return (
            <div id="videos" className="videos section">

                <Title setClass="center" SetTxtMobileRow1="Garantia em" SetTxtMobileRow3="performance de" SetTxtMobileRow2="limpeza" SetTxtDesktopRow1="Garantia em performance de limpeza"/>
                
                <Slider 
                    className="slider slider__videos" 

                    asNavFor={this.state.nav2} 
                    ref={slider => (this.slider1 = slider)} 

                    {...settings__videos}
                >   
                    <div>
                        <Video setSrc="https://res.cloudinary.com/brastempwebp/video/upload/v1583171720/2020-lavadora-edge/BRASTEMP_LAVADORA_ROUPAS_LINHA_F11_boaqualidade_yqee4q.mp4" />
                    </div>
                    <div>
                        <Video setSrc="https://res.cloudinary.com/brastempwebp/video/upload/v1583171720/2020-lavadora-edge/BRASTEMP_LAVADORA_ROUPAS_LINHA_F11_boaqualidade_yqee4q.mp4" />
                    </div>
                </Slider>
                <Slider
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    {...settings__videosButtons}
                    >

                    <Button setClass="not_responsive" label="Cesto Flexível" />
                    <Button setClass="not_responsive" label="Cesto Flexível" />
                    
                </Slider>
            </div>
        )
    }
}
export default Videos;