import React from 'react'
import './hero-carousel.global.css';
import { Link } from 'render';
import Slider from "react-slick";
import properties from '../public/props.json';
import MediaQuery from 'react-responsive';
import Cover from '../../../components/cdnCover/src/cover';
import $ from '../../../components/dataTree/src/self'

const Desktop = props => <MediaQuery {...props} minWidth={1025} />;
const Tablet = props => <MediaQuery {...props} minWidth={768} maxWidth={1024} />;
const Mobile = props => <MediaQuery {...props} maxWidth={767} />;

var timeOn = "";
class HeroCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
        this.state = {
            target: null,
            activeSlide: 0,
            onMouseDown: true
        };
    }

    componentDidMount() {
        var target = document.querySelector(".hero-carousel .carousel-target");
        this.setState({ target: target })
        targetUp(target);
    }

    onMouseDownEvent( item ) {
		if(!this.state.onMouseDown) return
		
        let promos = [];

        let id =  (window.innerWidth > 1024 ? item.image_desktop : item.image_mobile ) ||''
        let creative = (window.innerWidth > 1024 ? item.url_image_desktop : item.url_image_mobile)|| ''
		let itemBanner = {
			id,
			name: item.campaignName || '',
			creative: creative.replace(/^media\/(\w*).(png|jpg|jpeg)/g, "$1")
		}

		promos.push(itemBanner);

		window.dataLayer.push({
			'event': 'promoClick',
			'promos': promos
		});

		this.setState({
			onMouseDown: false
		})
	};

	onMouseUpEvent() {

		this.setState({
			onMouseDown: true
		})
	}

    play() {
        this.slider.slickPlay();
    }
    pause() {
        this.slider.slickPause();
    }

    prev(){
        this.slider.slickPrev();
        targetDown(this.state.target);
        targetUp(this.state.target)
    }

    next(){
      this.slider.slickNext();
      targetDown(this.state.target);
      targetUp(this.state.target)
    }

    MontarBanners = () => {
        let jsxCarousel;
        
        const { onMouseDown } = this.state;
        if (this.props.depoimentContent) {
            jsxCarousel = this.props.data.content.map((item, index) =>
                <div className="hero-carousel-item after-border" key={index}>
                    <p className='depoimentos-franquia__depoimento'>{item.text}</p>
                    <p className='depoimentos-franquia__autor'>{item.author}</p>
                    <p className='depoimentos-franquia__local'>{item.city}</p>
                </div>
            );
        } else {
            jsxCarousel = this.state.data.banners.map((item, index) => {
                return (
                    <div className="hero-carousel-item" key={index}>
                        <Link
                            onMouseDown ={ onMouseDown ? () => this.onMouseDownEvent( item ) : null }
                            onMouseUp = { !onMouseDown ? () => this.onMouseUpEvent() : null }                    
                            to={item.link}
                            target={(item.target || "_self" )}
                            className={"after-border " + (!item.link ? "unclickable" : "")} >
                            <Desktop>
                                <img id={item.id} 
                                    alt={this.state.data.category.name } 
                                    src={Cover(item.url_image_desktop,"1920x350")  }
                                    style={{objectFit: 'cover'}} 
                                    className="image-banner"/>
                            </Desktop>
                            <Tablet>
                                <img id={item.id} 
                                    alt={this.state.data.category.name} 
                                    style={{objectFit: 'cover'}} 
                                    src={Cover(item.url_image_mobile,"800x800")  } 
                                    className="image-banner"/>
                            </Tablet>
                            <Mobile>
                                <img id={item.id} 
                                    alt={this.state.data.category.name} 
                                    src={Cover(item.url_image_mobile,"500x500")  } 
                                    style={{objectFit: 'cover'}} 
                                    className="image-banner"/>
                            </Mobile>
                        </Link>
                    </div>
                    )
                }
                
            );
        }
        
        return jsxCarousel
    }
    
    render() {

        try{    
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            autoplaySpeed: 6000,
            pauseOnHover: false,
            beforeChange: (current, next) => this.setState({ next }),
        };


    var atualSlide = 1 + this.state.activeSlide;
    var totalSlide = this.state.data? this.state.data.banners.length : 0;

    if(atualSlide < 10){
      atualSlide = "0"+atualSlide;
    }

    if(totalSlide < 10){
      totalSlide = "0"+totalSlide;
    }
    
    this.state.data = (
        this.props.data || 
        {}
    )

    this.state.data.banners=$(this.props.parentState,'data.getCategoryInfo[0].category.banners',this.state.data.arrayBanners || [] )
    this.state.data.category=$(this.props.parentState,'data.getCategoryInfo[0].category',{} )

    return (
        this.state.data && this.state.data.banners.length > 0 ?
                <section className={properties.className}>
                    <Slider ref={slider => (this.slider = slider)} {...settings}>
                        {this.MontarBanners()}
                    </Slider>
                    {   
                        this.state.data.category.name ?
                        <div className="hero-carousel-caption">
                            <div className="hero-carousel-caption-content">
                                <h1 className="hero-carousel-caption-title">
                                    <span>{this.state.data.category.name || "" }</span><br />
                                    <span className="brand">Brastemp</span>
                                </h1>
                            </div>
                        </div>
                        : null
                    }
                    {this.state.data.banners.length >= 2 ?
                        <div className="box-buttons">
                        <div className="button-slide button-prev" onClick={this.prev} title={properties.buttons[0].title}/>
                        <div className="button-slide button-next" onClick={this.next} title={properties.buttons[1].title}/>
                        <label className="label-legenda-slide">{atualSlide}<span> / </span><span>{totalSlide}</span></label>
                        <div className="carousel-target"/>
                    </div> 
                    :null}
                    {targetDownTime(this.state.target)}
                    {targetUp(this.state.target)}
                </section>
            : <div/>
    )
    }catch(e){
        console.error(e)
        return null
    }
  }
}

const targetUp = (target) =>{
    var soma = 0;
    timeOn = setInterval(function(){
        if(target !=null){
            soma = soma + 0.65;
            target.style.width= soma+"px";
        }
    }, 100);
}

const targetDownTime = (target) =>{
    clearInterval(timeOn);
    setTimeout(function(){
        if(target !=null){
            target.style.width="0";
        }
    }, 4000);

}

const targetDown = (target) =>{
    clearInterval(timeOn);
    if(target !=null){
        target.style.width="0";
    }
}

export default HeroCarousel;