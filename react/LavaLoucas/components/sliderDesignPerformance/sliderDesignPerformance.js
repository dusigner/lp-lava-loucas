import React, {Component} from 'react';
import Slider from "react-slick";
import { Picture } from 'react-responsive-picture';

const painelJpeg450 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_450/2020-lavadora-edge/painel02_e7szpa.jpeg';
const painelJpeg670 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_805/2020-lavadora-edge/painel02_e7szpa.jpeg';

const painelWebp450 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_450/2020-lavadora-edge/painel02_e7szpa.webp';
const painelWebp670 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_805/2020-lavadora-edge/painel02_e7szpa.webp';

const softJpeg450 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_450/2020-lavadora-edge/soft-close02_pvdh2y.jpeg';
const softJpeg670 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_805/2020-lavadora-edge/soft-close02_pvdh2y.jpeg';

const softWebp450 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_450/2020-lavadora-edge/soft-close02_pvdh2y.webp';
const softWebp670 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_805/2020-lavadora-edge/soft-close02_pvdh2y.webp';

const cestoJpeg450 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_450/2020-lavadora-edge/cesto-inox02_ze1r5s.jpeg';
const cestoJpeg670 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_805/2020-lavadora-edge/cesto-inox02_ze1r5s.jpeg';

const cestoWebp450 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_450/2020-lavadora-edge/cesto-inox02_ze1r5s.webp';
const cestoWebp670 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_805/2020-lavadora-edge/cesto-inox02_ze1r5s.webp';

const aguaJpeg450 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_450/2020-lavadora-edge/agua-quente02_b7qaxp.jpeg';
const aguaJpeg670 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_805/2020-lavadora-edge/agua-quente02_b7qaxp.jpeg';

const aguaWebp450 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_450/2020-lavadora-edge/agua-quente02_b7qaxp.webp';
const aguaWebp670 = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,h_805/2020-lavadora-edge/agua-quente02_b7qaxp.webp';

var modal1s = '';
var modal4s = '';
var modal10s = '';

function SliderNextArrow(props) {
	const { onClick } = props;
	return (
	  	<div className="SliderNextArrow" onClick={onClick} >
			<svg width="37" height="33" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M30.7749 16.3875L2 16.3874" stroke="#DB532A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M22.5533 28.7186L34.8854 16.3865L22.5533 4.05442" stroke="#DB532A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		</div>
	);
}
  
  function SliderPrevArrow(props) {
	const { onClick } = props;
	return (
		<div className="SliderPrevArrow" onClick={onClick} >
			<svg width="37" height="33" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M6.1106 16.6126L34.8855 16.6125" stroke="#DB532A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M14.3322 4.28137L2.00005 16.6135L14.3322 28.9456" stroke="#DB532A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		</div>
	);
}

class sliderDesignInovador extends React.Component {

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
        
        this.slider1.slickGoTo(this.props.changeSlide);

        if(this.props.changeSlide === 0) {
                    
			modal1s = setTimeout(()=>{ 
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_painel_multifuncional',
					label: '1'
				})
			}, 1000);

			modal4s = setTimeout(()=>{ 
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_painel_multifuncional',
					label: '4'
				})
			}, 4000);

			modal10s = setTimeout(()=>{ 
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_painel_multifuncional',
					label: '10'
				})
			}, 10000);

		} else if (this.props.changeSlide === 1) {
			
			modal1s = setTimeout(()=>{ 
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_soft_close',
					label: '1'
				})
			}, 1000);

			modal4s = setTimeout(()=>{ 
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_soft_close',
					label: '4'
				})
			}, 4000);

			modal10s = setTimeout(()=>{ 
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_soft_close',
					label: '10'
				})
			}, 10000);
			
		} else if (this.props.changeSlide === 2) {
			
			modal1s = setTimeout(()=>{ 
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_cesto_em_inox',
					label: '1'
				})
			}, 1000);

			modal4s = setTimeout(()=>{ 
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_cesto_em_inox',
					label: '4'
				})
			}, 4000);

			modal10s = setTimeout(()=>{ 
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_cesto_em_inox',
					label: '10'
				})
			}, 10000);

		} else if (this.props.changeSlide === 3) {

			modal1s = setTimeout(()=>{
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_agua_quente',
					label: '1'
				})
			}, 1000);

			modal4s = setTimeout(()=>{
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_agua_quente',
					label: '4'
				})
			}, 4000);

			modal10s = setTimeout(()=>{ 
				dataLayer.push({
					event: 'generic',                     
					category: 'lavadora_edge',
					action: 'exibicao_modal_agua_quente',
					label: '10'
				})
			}, 10000);
		}

        // Tags

        // Design inovador Modal Buttons 

        var modalButons = document.querySelectorAll('.gtm-tagModal');

        modalButons.forEach(element => {
            element.addEventListener('click', ()=>{
                dataLayer.push({
                    event: 'generic',                     
                    category: 'lavadora_edge',
                    action: 'menu_modal',
                    label: element.dataset.tag
                })
            })
        });

      }

    componentWillUnmount(){
        clearTimeout(modal1s);
        clearTimeout(modal4s);
        clearTimeout(modal10s);
    }

      render() { 

        const settingsSlider1 = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			nextArrow: <SliderNextArrow />,
            prevArrow: <SliderPrevArrow />,
            fade: true,
            afterChange: function(index) {

                clearTimeout(modal1s);
                clearTimeout(modal4s);
                clearTimeout(modal10s);

                if(index === 0) {
                    
                    modal1s = setTimeout(()=>{ 
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_painel_multifuncional',
                            label: '1'
                        })
                    }, 1000);
        
                    modal4s = setTimeout(()=>{ 
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_painel_multifuncional',
                            label: '4'
                        })
                    }, 4000);
        
                    modal10s = setTimeout(()=>{ 
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_painel_multifuncional',
                            label: '10'
                        })
                    }, 10000);

                } else if (index === 1) {
                    
                    modal1s = setTimeout(()=>{ 
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_soft_close',
                            label: '1'
                        })
                    }, 1000);
        
                    modal4s = setTimeout(()=>{ 
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_soft_close',
                            label: '4'
                        })
                    }, 4000);
        
                    modal10s = setTimeout(()=>{ 
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_soft_close',
                            label: '10'
                        })
                    }, 10000);
                    
                } else if (index === 2) {
                    
                    modal1s = setTimeout(()=>{ 
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_cesto_em_inox',
                            label: '1'
                        })
                    }, 1000);
        
                    modal4s = setTimeout(()=>{ 
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_cesto_em_inox',
                            label: '4'
                        })
                    }, 4000);
        
                    modal10s = setTimeout(()=>{ 
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_cesto_em_inox',
                            label: '10'
                        })
                    }, 10000);

                } else if (index === 3) {

                    modal1s = setTimeout(()=>{
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_agua_quente',
                            label: '1'
                        })
                    }, 1000);
        
                    modal4s = setTimeout(()=>{
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_agua_quente',
                            label: '4'
                        })
                    }, 4000);
        
                    modal10s = setTimeout(()=>{ 
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'exibicao_modal_agua_quente',
                            label: '10'
                        })
                    }, 10000);
                }
			  }
        };
        
        const settingsSlider2 = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
            slidesToScroll: 1,
            swipeToSlide: true,
            focusOnSelect: true,
            arrows: false,
            variableWidth: true
		};
        

        return (
            <div className="slider__design-inovador">
                <Slider 
                    asNavFor={this.state.nav2} 
                    ref={slider => (this.slider1 = slider)} 
                    
                    {...settingsSlider1} >

                    <div className="slider__grid">
                        <Picture
                            sources = {[
                                {srcSet: painelJpeg450,    media: "(max-width: 450px)",    type: "image/jpeg"},
                                {srcSet: painelJpeg670,    media: "(min-width: 451px)",    type: "image/jpeg"},

                                {srcSet: painelWebp450,    media: "(max-width: 450px)",   type: "image/webp"},
                                {srcSet: painelWebp670,    media: "(min-width: 451px)",  type: "image/webp"}
                            ]}
                        />
                        <div className="slider__content">
                            <div>
                                <h2 data-tag="painel-multifuncional">Painel Touch</h2>
                                <p>Painel com acabamento inteiriço, tampa de vidro temperado de ponta a ponta e detalhes cromados.</p>
                            </div>
                        </div>
                    </div>

                    <div className="slider__grid">
                    <Picture
                            sources = {[
                                {srcSet: softJpeg450,    media: "(max-width: 450px)",    type: "image/jpeg"},
                                {srcSet: softJpeg670,    media: "(min-width: 451px)",    type: "image/jpeg"},

                                {srcSet: softWebp450,    media: "(max-width: 450px)",   type: "image/webp"},
                                {srcSet: softWebp670,    media: "(min-width: 451px)",  type: "image/webp"}
                            ]}
                        />
                        <div className="slider__content">
                            <div>
                                <h2 data-tag="soft-close">Soft Close</h2>
                                <p>Tampa com dispositivo exclusivo na dobradiça que proporciona fechamento suave sem impacto. Sofisticação em cada toque.</p>
                            </div>
                        </div>
                    </div>

                    <div className="slider__grid">
                    <Picture
                            sources = {[
                                {srcSet: cestoJpeg450,    media: "(max-width: 450px)",    type: "image/jpeg"},
                                {srcSet: cestoJpeg670,    media: "(min-width: 451px)",    type: "image/jpeg"},
        
                                {srcSet: cestoWebp450,    media: "(max-width: 450px)",   type: "image/webp"},
                                {srcSet: cestoWebp670,    media: "(min-width: 451px)",  type: "image/webp"}
          
                            ]}
                        />
                        <div className="slider__content">
                            <div>
                                <h2 data-tag="cesto-inox">Cesto Inox</h2>
                                <p>Toda modernidade do acabamento inox no interior da sua lavadora.</p>
                            </div>
                        </div>
                    </div>

                    <div className="slider__grid">
                    <Picture
                            sources = {[
                                {srcSet: aguaJpeg450,    media: "(max-width: 450px)",    type: "image/jpeg"},
                                {srcSet: aguaJpeg670,    media: "(min-width: 451px)",    type: "image/jpeg"},
           
                                {srcSet: aguaWebp450,    media: "(max-width: 450px)",   type: "image/webp"},
                                {srcSet: aguaWebp670,    media: "(min-width: 451px)",  type: "image/webp"}
             
                            ]}
                        />
                        <div className="slider__content">
                            <div>
                                <h2>Água Quente</h2>
                                <p>Função Água Quente potencializa a retirada de sujeira, facilitando a remoção de manchas durante a lavagem.</p>
                            </div>
                        </div>
                    </div>

                        
					</Slider>
				<div className="slider__design-inovador-nav">
                    <Slider
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        {...settingsSlider2}
                        >
                        <div className="gtm-tagModal" data-tag="painel-multifuncional">
                            <svg width="75" height="61" viewBox="0 0 75 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M40.6943 31.9734H58.5593C59.7696 31.9734 60.7702 32.9696 60.7702 34.1748V44.5712C60.7702 45.7763 59.7696 46.7725 58.5593 46.7725H40.6943C39.484 46.7725 38.4834 45.7763 38.4834 44.5712V34.1748C38.4834 32.9536 39.484 31.9734 40.6943 31.9734Z" stroke="black" strokeMiterlimit="10"/>
                                <path d="M14.0181 31.9734H31.883C33.0934 31.9734 34.0939 32.9696 34.0939 34.1748V44.5712C34.0939 45.7763 33.0934 46.7725 31.883 46.7725H14.0181C12.8077 46.7725 11.8071 45.7763 11.8071 44.5712V34.1748C11.8071 32.9536 12.8077 31.9734 14.0181 31.9734Z" stroke="black" strokeMiterlimit="10"/>
                                <path className="hover" d="M40.6943 12.8035H58.5593C59.7696 12.8035 60.7702 13.7997 60.7702 15.0049V25.4012C60.7702 26.6064 59.7696 27.6026 58.5593 27.6026H40.6943C39.484 27.6026 38.4834 26.6064 38.4834 25.4012V15.0049C38.4834 13.7997 39.484 12.8035 40.6943 12.8035Z" fill="black" stroke="black" strokeMiterlimit="10"/>
                                <path d="M14.0181 12.8035H31.883C33.0934 12.8035 34.0939 13.7997 34.0939 15.0049V25.4012C34.0939 26.6064 33.0934 27.6026 31.883 27.6026H14.0181C12.8077 27.5866 11.8071 26.6064 11.8071 25.4012V15.0049C11.8071 13.7997 12.8077 12.8035 14.0181 12.8035Z" stroke="black" strokeMiterlimit="10"/>
                                <path d="M65.1598 34.5925C64.0301 34.5925 63.1264 35.5084 63.1264 36.6171H62.5293V34.4479C62.5293 33.3231 61.6094 32.4232 60.4959 32.4232C59.3823 32.4232 58.4624 33.3391 58.4624 34.4479V36.6171H57.8653V32.4714C57.8653 31.3466 56.9455 30.4468 55.8319 30.4468C54.7023 30.4468 53.7985 31.3627 53.7985 32.4714V36.6171H53.2014V27.2973C53.2014 26.1725 52.2815 25.2727 51.168 25.2727C50.0383 25.2727 49.1346 26.1886 49.1346 27.2973V43.8801H48.5375L45.326 37.0188C44.858 36.0065 43.6315 35.5566 42.6148 36.0386C41.5981 36.5046 41.1462 37.7258 41.6303 38.7382L48.4729 53.3606H65.0952L65.3373 52.8624C65.418 52.7018 67.2255 49.0381 67.2255 45.4388V36.6171C67.1932 35.5084 66.2895 34.5925 65.1598 34.5925Z" fill="white"/>
                                <path d="M65.1598 34.5925C64.0301 34.5925 63.1264 35.5084 63.1264 36.6171H62.5293V34.4479C62.5293 33.3231 61.6094 32.4232 60.4959 32.4232C59.3823 32.4232 58.4624 33.3391 58.4624 34.4479V36.6171H57.8653V32.4714C57.8653 31.3466 56.9455 30.4468 55.8319 30.4468C54.7023 30.4468 53.7985 31.3627 53.7985 32.4714V36.6171H53.2014V27.2973C53.2014 26.1725 52.2815 25.2727 51.168 25.2727C50.0383 25.2727 49.1346 26.1886 49.1346 27.2973V43.8801H48.5375L45.326 37.0188C44.858 36.0065 43.6315 35.5566 42.6148 36.0386C41.5981 36.5046 41.1462 37.7258 41.6303 38.7382L48.4729 53.3606H65.0952L65.3373 52.8624C65.418 52.7018 67.2255 49.0381 67.2255 45.4388V36.6171C67.1932 35.5084 66.2895 34.5925 65.1598 34.5925Z" fill="white"/>
                                <path d="M65.1598 34.5925C64.0301 34.5925 63.1264 35.5084 63.1264 36.6171H62.5293V34.4479C62.5293 33.3231 61.6094 32.4232 60.4959 32.4232C59.3823 32.4232 58.4624 33.3391 58.4624 34.4479V36.6171H57.8653V32.4714C57.8653 31.3466 56.9455 30.4468 55.8319 30.4468C54.7023 30.4468 53.7985 31.3627 53.7985 32.4714V36.6171H53.2014V27.2973C53.2014 26.1725 52.2815 25.2727 51.168 25.2727C50.0383 25.2727 49.1346 26.1886 49.1346 27.2973V43.8801H48.5375L45.326 37.0188C44.858 36.0065 43.6315 35.5566 42.6148 36.0386C41.5981 36.5046 41.1462 37.7258 41.6303 38.7382L48.4729 53.3606H65.0952L65.3373 52.8624C65.418 52.7018 67.2255 49.0381 67.2255 45.4388V36.6171C67.1932 35.5084 66.2895 34.5925 65.1598 34.5925Z" stroke="black" strokeMiterlimit="10"/>
                            </svg>

                            <h3>Painel<br/> multifuncional</h3>
                        </div>
                        <div className="gtm-tagModal" data-tag="soft-close">
                            <svg width="75" height="61" viewBox="0 0 75 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="hover" fillRule="evenodd" clipRule="evenodd" d="M36.5142 18.8426C38.2932 18.8426 39.7451 17.3949 39.7451 15.6212C39.7451 13.8474 38.2932 12.3998 36.5142 12.3998C34.7353 12.3998 33.2834 13.8474 33.2834 15.6212C33.2834 17.3949 34.7353 18.8426 36.5142 18.8426ZM36.5142 14.1604C37.3252 14.1604 37.9792 14.8126 37.9792 15.6212C37.9792 16.4298 37.3252 17.0819 36.5142 17.0819C35.7033 17.0819 35.0492 16.4298 35.0492 15.6212C35.0492 14.8126 35.7033 14.1604 36.5142 14.1604Z" fill="black"/>
                                <path className="hover" fillRule="evenodd" clipRule="evenodd" d="M48.0641 17.421C47.1616 17.421 46.416 16.6906 46.416 15.7777C46.416 14.8778 47.1485 14.1344 48.0641 14.1344C48.9667 14.1344 49.7122 14.8647 49.7122 15.7777C49.7122 16.6906 48.9667 17.421 48.0641 17.421Z" fill="black"/>
                                <path className="hover" fillRule="evenodd" clipRule="evenodd" d="M42.7797 17.421C41.8771 17.421 41.1316 16.6906 41.1316 15.7777C41.1316 14.8778 41.864 14.1344 42.7797 14.1344C43.6822 14.1344 44.4278 14.8647 44.4278 15.7777C44.4278 16.6906 43.6822 17.421 42.7797 17.421Z" fill="black"/>
                                <path className="hover" fillRule="evenodd" clipRule="evenodd" d="M30.445 17.421C29.5425 17.421 28.7969 16.6906 28.7969 15.7777C28.7969 14.8778 29.5294 14.1344 30.445 14.1344C31.3476 14.1344 32.0931 14.8647 32.0931 15.7777C32.0931 16.6906 31.3606 17.421 30.445 17.421Z" fill="black"/>
                                <path className="hover" fillRule="evenodd" clipRule="evenodd" d="M26.9133 15.6212C26.9133 16.5211 26.1809 17.2645 25.2652 17.2645C24.3627 17.2645 23.6171 16.5341 23.6171 15.6212C23.6171 14.7082 24.3496 13.9779 25.2652 13.9779C26.1809 13.9779 26.9133 14.7082 26.9133 15.6212Z" fill="black"/>
                                <path className="hover" d="M56.9056 20.9032L56.7748 12.3215C56.6963 11.0173 55.6237 10 54.3288 10H18.5542C17.2723 10 16.1998 11.0042 16.1082 12.3476L16.2259 21.5293C15.8466 23.1856 14.6955 28.5459 11.0069 46.205C10.9546 46.8702 11.2031 47.5353 11.6609 48.0309C12.1187 48.5265 12.7727 48.8004 13.4529 48.8004H15.2318L15.2187 50.3264C15.1664 51.0176 15.4149 51.6958 15.8858 52.2044C16.3567 52.7131 17.0238 53 17.7171 53H55.3229C56.0161 53 56.6832 52.7131 57.141 52.2175C57.6119 51.7088 57.8604 51.0306 57.8081 50.3655L57.782 48.8004H59.574C60.241 48.8004 60.8951 48.5265 61.3529 48.0309C61.8107 47.5353 62.0592 46.8702 61.9938 46.1137C57.8081 25.0115 57.0756 21.5423 56.9056 20.9032ZM18.5542 11.2912H54.3418C54.9435 11.2912 55.4537 11.7868 55.4929 12.3737L55.6237 20.3946H17.4947L17.4031 12.3737C17.4424 11.7607 17.9525 11.2912 18.5542 11.2912ZM56.5132 50.4177C56.5393 50.7567 56.4216 51.0698 56.1862 51.3176C55.9638 51.5654 55.6499 51.6958 55.3229 51.6958H17.704C17.3639 51.6958 17.0631 51.5654 16.8276 51.3176C16.6052 51.0698 16.4875 50.7567 16.5137 50.3785L16.5268 48.8004H56.4739L56.5132 50.4177ZM60.4111 47.1441C60.1887 47.3788 59.901 47.4962 59.587 47.4962H13.4529C13.139 47.4962 12.8381 47.3658 12.6288 47.131C12.4065 46.8963 12.3018 46.5963 12.3149 46.3746C13.5706 40.3361 16.6706 25.5984 17.4162 22.1031L17.5209 21.6988H55.7676C56.3954 24.6072 59.4824 40.1274 60.7119 46.2833C60.7381 46.6093 60.6204 46.9093 60.4111 47.1441Z" fill="black"/>
                                <path className="hover" d="M20.4136 22.8289L17.7684 25.4664L18.6933 26.3886L21.3385 23.7511L20.4136 22.8289Z" fill="black"/>
                                <path className="hover" d="M23.9385 22.8146L17.7694 28.9657L18.6943 29.888L24.8634 23.7368L23.9385 22.8146Z" fill="black"/>
                                <path className="hover" d="M56.6527 42.5109L54.0075 45.1484L54.9324 46.0706L57.5776 43.4331L56.6527 42.5109Z" fill="black"/>
                                <path className="hover" d="M56.6617 39.0048L50.4917 45.155L51.4165 46.0774L57.5865 39.9271L56.6617 39.0048Z" fill="black"/>
                            </svg>

                            <h3>Gaveta de<br /> Talheres</h3>
                        </div>
                        <div className="gtm-tagModal" data-tag="cesto-em-inox">
                            <svg width="60" height="16" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8ZM8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0Z" fill="black"/>
                                <path d="M3.81824 8C3.81824 5.79086 5.6091 4 7.81824 4C10.0274 4 11.8182 5.79086 11.8182 8C11.8182 10.2091 10.0274 12 7.81824 12C5.6091 12 3.81824 10.2091 3.81824 8Z" fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8182 8C23.8182 11.3137 26.5045 14 29.8182 14C33.1319 14 35.8182 11.3137 35.8182 8C35.8182 4.68629 33.1319 2 29.8182 2C26.5045 2 23.8182 4.68629 23.8182 8ZM29.8182 0C25.3999 0 21.8182 3.58172 21.8182 8C21.8182 12.4183 25.3999 16 29.8182 16C34.2365 16 37.8182 12.4183 37.8182 8C37.8182 3.58172 34.2365 0 29.8182 0Z" fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M45.6364 8C45.6364 11.3137 48.3227 14 51.6364 14C54.9501 14 57.6364 11.3137 57.6364 8C57.6364 4.68629 54.9501 2 51.6364 2C48.3227 2 45.6364 4.68629 45.6364 8ZM51.6364 0C47.2181 0 43.6364 3.58172 43.6364 8C43.6364 12.4183 47.2181 16 51.6364 16C56.0546 16 59.6364 12.4183 59.6364 8C59.6364 3.58172 56.0546 0 51.6364 0Z" fill="black"/>
                            </svg>

                            <h3>Identificador de<br /> etapas</h3>
                        </div>
                        <div className="gtm-tagModal" data-tag="agua-quente">
                            <svg width="57" height="39" viewBox="0 0 57 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M55.0455 1.95H15.9545V37.05H55.0455V1.95ZM14 0V39H57V0H14Z" fill="black"/>
                                <path d="M14 27V29.2727H28.1107L29.6988 32H41.3012L42.8893 29.2727H57V27H41.8523L40.2642 29.7273H30.7358L29.1477 27H14Z" fill="black"/>
                                <path d="M14 18V20.2727H28.1107L29.6988 23H41.3012L42.8893 20.2727H57V18H41.8523L40.2642 20.7273H30.7358L29.1477 18H14Z" fill="black"/>
                                <path d="M14 8V9.81818H28.1107L29.6988 12H41.3012L42.8893 9.81818H57V8H41.8523L40.2642 10.1818H30.7358L29.1477 8H14Z" fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.12313 6.16093C4.33127 5.94636 4.66873 5.94636 4.87687 6.16093L8.8439 10.2506C9.05203 10.4651 9.05203 10.813 8.8439 11.0276C8.63576 11.2422 8.2983 11.2422 8.09016 11.0276L5.03171 7.87463C5.03255 7.8872 5.03297 7.89988 5.03297 7.91266V17.4552C5.03297 17.7586 4.79435 18.0046 4.5 18.0046C4.20565 18.0046 3.96703 17.7586 3.96703 17.4552V7.91266C3.96703 7.89988 3.96745 7.8872 3.96829 7.87463L0.909839 11.0276C0.701701 11.2422 0.364242 11.2422 0.156104 11.0276C-0.0520346 10.813 -0.0520346 10.4651 0.156104 10.2506L4.12313 6.16093ZM4.46311 7.36451C4.4753 7.36365 4.4876 7.36322 4.5 7.36322C4.5124 7.36322 4.5247 7.36365 4.53689 7.36451L4.5 7.32648L4.46311 7.36451ZM4.5 20.9954C4.79435 20.9954 5.03297 21.2414 5.03297 21.5448V31.0873C5.03297 31.1001 5.03255 31.1128 5.03171 31.1254L8.09016 27.9724C8.2983 27.7578 8.63576 27.7578 8.8439 27.9724C9.05203 28.187 9.05203 28.5349 8.8439 28.7494L4.87687 32.8391C4.66873 33.0536 4.33127 33.0536 4.12313 32.8391L0.156104 28.7494C-0.0520345 28.5349 -0.0520346 28.187 0.156104 27.9724C0.364242 27.7578 0.701701 27.7578 0.909839 27.9724L3.96829 31.1254C3.96745 31.1128 3.96703 31.1001 3.96703 31.0873V21.5448C3.96703 21.2414 4.20565 20.9954 4.5 20.9954ZM4.46311 31.6355L4.5 31.6735L4.53689 31.6355C4.5247 31.6363 4.5124 31.6368 4.5 31.6368C4.4876 31.6368 4.4753 31.6363 4.46311 31.6355Z" fill="black"/>
                            </svg>

                            <h3>Cesto Flexível</h3>
                        </div>
					</Slider>
                    </div>
            </div>
        )
      }
}
export default sliderDesignInovador;