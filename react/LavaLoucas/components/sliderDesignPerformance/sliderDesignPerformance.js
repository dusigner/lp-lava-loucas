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
                                <h2 data-tag="soft-close">Gaveta de Talheres</h2>
                                <p>Compartimento exclusivo para talheres e louças menores.</p>
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
                                <h2 data-tag="cesto-inox">Identificador de Etapas</h2>
                                <p>Função que permite acompanhar o processo de lavagem etapa por etapa.</p>
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
                                <h2>Cesto Flexível</h2>
                                <p>O Cesto Flexível permite o ajuste de altura das prateleiras, adequando aos utensílios de tamanhos maiores, como panelas e travessas.</p>
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
                            <svg width="83" height="76" viewBox="0 0 83 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="hover_fill hover_stroke" d="M45.8872 21H63.7522C64.9625 21 65.9631 21.9963 65.9631 23.2014V33.5978C65.9631 34.8029 64.9625 35.7992 63.7522 35.7992H45.8872C44.6768 35.7992 43.6763 34.8029 43.6763 33.5978V23.2014C43.6763 21.9963 44.6768 21 45.8872 21Z" fill="black" stroke="black" strokeMiterlimit="10"/>
                                <path className="hover_stroke" d="M45.8873 40.1698H63.7523C64.9627 40.1698 65.9632 41.1661 65.9632 42.3712V52.7676C65.9632 53.9727 64.9627 54.969 63.7523 54.969H45.8873C44.677 54.969 43.6764 53.9727 43.6764 52.7676V42.3712C43.6764 41.15 44.677 40.1698 45.8873 40.1698Z" stroke="black" strokeMiterlimit="10"/>
                                <path className="hover_stroke" d="M19.2109 40.1698H37.0759C38.2862 40.1698 39.2868 41.1661 39.2868 42.3712V52.7676C39.2868 53.9727 38.2862 54.969 37.0759 54.969H19.2109C18.0006 54.969 17 53.9727 17 52.7676V42.3712C17 41.15 18.0006 40.1698 19.2109 40.1698Z" stroke="black" strokeMiterlimit="10"/>
                                <path className="hover_stroke" d="M19.2109 21H37.0759C38.2862 21 39.2868 21.9963 39.2868 23.2014V33.5978C39.2868 34.8029 38.2862 35.7992 37.0759 35.7992H19.2109C18.0006 35.7831 17 34.8029 17 33.5978V23.2014C17 21.9963 18.0006 21 19.2109 21Z" stroke="black" strokeMiterlimit="10"/>
                                <path d="M70.3527 42.789C69.223 42.789 68.3192 43.7049 68.3192 44.8136H67.7221V42.6444C67.7221 41.5196 66.8023 40.6198 65.6887 40.6198C64.5752 40.6198 63.6553 41.5357 63.6553 42.6444V44.8136H63.0582V40.668C63.0582 39.5432 62.1383 38.6433 61.0248 38.6433C59.8951 38.6433 58.9914 39.5592 58.9914 40.668V44.8136H58.3943V35.4939C58.3943 34.3691 57.4744 33.4692 56.3609 33.4692C55.2312 33.4692 54.3275 34.3851 54.3275 35.4939V52.0766H53.7303L50.5188 45.2154C50.0508 44.203 48.8243 43.7531 47.8076 44.2352C46.7909 44.7012 46.3391 45.9224 46.8232 46.9347L53.6658 61.5571H70.2881L70.5302 61.059C70.6109 60.8983 72.4183 57.2347 72.4183 53.6353V44.8136C72.3861 43.7049 71.4823 42.789 70.3527 42.789Z" fill="white"/>
                                <path d="M70.3527 42.789C69.223 42.789 68.3192 43.7049 68.3192 44.8136H67.7221V42.6444C67.7221 41.5196 66.8023 40.6198 65.6887 40.6198C64.5752 40.6198 63.6553 41.5357 63.6553 42.6444V44.8136H63.0582V40.668C63.0582 39.5432 62.1383 38.6433 61.0248 38.6433C59.8951 38.6433 58.9914 39.5592 58.9914 40.668V44.8136H58.3943V35.4939C58.3943 34.3691 57.4744 33.4692 56.3609 33.4692C55.2312 33.4692 54.3275 34.3851 54.3275 35.4939V52.0766H53.7303L50.5188 45.2154C50.0508 44.203 48.8243 43.7531 47.8076 44.2352C46.7909 44.7012 46.3391 45.9224 46.8232 46.9347L53.6658 61.5571H70.2881L70.5302 61.059C70.6109 60.8983 72.4183 57.2347 72.4183 53.6353V44.8136C72.3861 43.7049 71.4823 42.789 70.3527 42.789Z" fill="white"/>
                                <path d="M70.3527 42.789C69.223 42.789 68.3192 43.7049 68.3192 44.8136H67.7221V42.6444C67.7221 41.5196 66.8023 40.6198 65.6887 40.6198C64.5752 40.6198 63.6553 41.5357 63.6553 42.6444V44.8136H63.0582V40.668C63.0582 39.5432 62.1383 38.6433 61.0248 38.6433C59.8951 38.6433 58.9914 39.5592 58.9914 40.668V44.8136H58.3943V35.4939C58.3943 34.3691 57.4744 33.4692 56.3609 33.4692C55.2312 33.4692 54.3275 34.3851 54.3275 35.4939V52.0766H53.7303L50.5188 45.2154C50.0508 44.203 48.8243 43.7531 47.8076 44.2352C46.7909 44.7012 46.3391 45.9224 46.8232 46.9347L53.6658 61.5571H70.2881L70.5302 61.059C70.6109 60.8983 72.4183 57.2347 72.4183 53.6353V44.8136C72.3861 43.7049 71.4823 42.789 70.3527 42.789Z" stroke="black" strokeMiterlimit="10"/>
                                <path className="hover_stroke" d="M70.3527 42.789C69.223 42.789 68.3192 43.7049 68.3192 44.8136H67.7221V42.6444C67.7221 41.5196 66.8023 40.6198 65.6887 40.6198C64.5752 40.6198 63.6553 41.5357 63.6553 42.6444V44.8136H63.0582V40.668C63.0582 39.5432 62.1383 38.6433 61.0248 38.6433C59.8951 38.6433 58.9914 39.5592 58.9914 40.668V44.8136H58.3943V35.4939C58.3943 34.3691 57.4744 33.4692 56.3609 33.4692C55.2312 33.4692 54.3275 34.3851 54.3275 35.4939V52.0766H53.7303L50.5188 45.2154C50.0508 44.203 48.8243 43.7531 47.8076 44.2352C46.7909 44.7012 46.3391 45.9224 46.8232 46.9347L53.6658 61.5571H70.2881L70.5302 61.059C70.6109 60.8983 72.4183 57.2347 72.4183 53.6353V44.8136C72.3861 43.7049 71.4823 42.789 70.3527 42.789Z" stroke="black" strokeMiterlimit="10"/>
                            </svg>
                            <h3>Painel Touch</h3>
                        </div>
                        <div className="gtm-tagModal" data-tag="soft-close">
                            <svg width="83" height="76" viewBox="0 0 83 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="hover_fill" fillRule="evenodd" clipRule="evenodd" d="M36.0667 16L37.5334 18.2H46.3334L47.8001 16H65.4001V60H18.4667V16H36.0667ZM19.9334 17.4667H35.2818L36.7485 19.6667H47.1183L48.585 17.4667H63.9334V58.5333H19.9334V17.4667Z" fill="black"/>
                                <path className="hover_fill" fillRule="evenodd" clipRule="evenodd" d="M37.1666 20.4001L38.3583 22.1601H45.5083L46.7 20.4001H61V55.6001H22.8666V20.4001H37.1666ZM24.3333 21.8667H36.3885L37.5801 23.6267H46.2865L47.4782 21.8667H59.5333V54.1334H24.3333V21.8667Z" fill="black"/>
                                <path className="hover_fill" d="M17 21.8666H18.4667V24.8H17V21.8666Z" fill="black"/>
                                <path className="hover_fill" d="M17 21.8666H18.4667V24.8H17V21.8666Z" fill="black"/>
                                <path className="hover_fill" d="M17 36.5334H18.4667V39.4667H17V36.5334Z" fill="black"/>
                                <path className="hover_fill" d="M65.4001 21.8666H66.8667V24.8H65.4001V21.8666Z" fill="black"/>
                                <path className="hover_fill" d="M65.4001 21.8666H66.8667V24.8H65.4001V21.8666Z" fill="black"/>
                                <path className="hover_fill" d="M65.4001 36.5334H66.8667V39.4667H65.4001V36.5334Z" fill="black"/>
                                <path className="hover_fill" fillRule="evenodd" clipRule="evenodd" d="M33.2807 40.7633C31.536 40.7633 30.1216 39.3489 30.1216 37.6041V36.0622L54.3045 36.0622V37.5289H44.526V40.7633H33.2807ZM43.0593 37.5289L31.5882 37.5289V37.6041C31.5882 38.5389 32.346 39.2966 33.2807 39.2966H43.0593V37.5289Z" fill="black"/>
                                <path className="hover_fill" fillRule="evenodd" clipRule="evenodd" d="M30.046 45.7654H54.3042V47.2321L30.046 47.2321V45.7654Z" fill="black"/>
                                <path className="hover_fill" fillRule="evenodd" clipRule="evenodd" d="M36.6657 50.4666H30.0462V48.9999H36.6657C37.0707 48.9999 37.399 48.6716 37.399 48.2666V44.7311C37.399 44.3261 37.0707 43.9977 36.6657 43.9977H30.0462V42.5311H36.6657C37.8807 42.5311 38.8657 43.516 38.8657 44.7311V48.2666C38.8657 49.4816 37.8807 50.4666 36.6657 50.4666Z" fill="black"/>
                                <path className="hover_fill" fillRule="evenodd" clipRule="evenodd" d="M39.4927 29.5467H54.4232V31.0133L39.4927 31.0133V29.5467Z" fill="black"/>
                                <path className="hover_fill" fillRule="evenodd" clipRule="evenodd" d="M36.6336 28.5121H33.3991C32.4228 28.5121 31.6314 29.3035 31.6314 30.2799C31.6314 31.2562 32.4228 32.0476 33.3991 32.0476H36.6336C37.6099 32.0476 38.4013 31.2562 38.4013 30.2799C38.4013 29.3035 37.6099 28.5121 36.6336 28.5121ZM30.1647 30.2799C30.1647 32.0662 31.6128 33.5143 33.3991 33.5143H36.6336C38.4199 33.5143 39.868 32.0662 39.868 30.2799C39.868 28.4935 38.4199 27.0454 36.6336 27.0454H33.3991C31.6128 27.0454 30.1647 28.4935 30.1647 30.2799Z" fill="black"/>
                                <path className="hover_fill" fillRule="evenodd" clipRule="evenodd" d="M20.452 16.9481L24.852 21.3481L23.8149 22.3852L19.4149 17.9852L20.452 16.9481Z" fill="black"/>
                                <path className="hover_fill" fillRule="evenodd" clipRule="evenodd" d="M63.4147 16.9481L59.0147 21.3481L60.0518 22.3852L64.4518 17.9852L63.4147 16.9481Z" fill="black"/>
                                <path className="hover_fill" fillRule="evenodd" clipRule="evenodd" d="M63.4147 59.0519L59.0147 54.6519L60.0518 53.6148L64.4518 58.0148L63.4147 59.0519Z" fill="black"/>
                                <path className="hover_fill" fillRule="evenodd" clipRule="evenodd" d="M20.452 59.0519L24.852 54.6519L23.8149 53.6148L19.4149 58.0148L20.452 59.0519Z" fill="black"/>
                            </svg>
                            <h3>Gaveta de<br /> Talheres</h3>
                        </div>
                        <div className="gtm-tagModal" data-tag="cesto-em-inox">
                            <svg width="83" height="76" viewBox="0 0 83 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="hover_fill" fillRule="evenodd" clipRule="evenodd" d="M14 38C14 41.3137 16.6863 44 20 44C23.3137 44 26 41.3137 26 38C26 34.6863 23.3137 32 20 32C16.6863 32 14 34.6863 14 38ZM20 30C15.5817 30 12 33.5817 12 38C12 42.4183 15.5817 46 20 46C24.4183 46 28 42.4183 28 38C28 33.5817 24.4183 30 20 30Z" fill="black"/>
                                <path className="hover_fill" d="M15.8182 38C15.8182 35.7909 17.6091 34 19.8182 34C22.0274 34 23.8182 35.7909 23.8182 38C23.8182 40.2091 22.0274 42 19.8182 42C17.6091 42 15.8182 40.2091 15.8182 38Z" fill="black"/>
                                <path className="hover_fill" fillRule="evenodd" clipRule="evenodd" d="M35.8182 38C35.8182 41.3137 38.5045 44 41.8182 44C45.1319 44 47.8182 41.3137 47.8182 38C47.8182 34.6863 45.1319 32 41.8182 32C38.5045 32 35.8182 34.6863 35.8182 38ZM41.8182 30C37.3999 30 33.8182 33.5817 33.8182 38C33.8182 42.4183 37.3999 46 41.8182 46C46.2365 46 49.8182 42.4183 49.8182 38C49.8182 33.5817 46.2365 30 41.8182 30Z" fill="black"/>
                                <path className="hover_fill" fillRule="evenodd" clipRule="evenodd" d="M57.6364 38C57.6364 41.3137 60.3227 44 63.6364 44C66.9501 44 69.6364 41.3137 69.6364 38C69.6364 34.6863 66.9501 32 63.6364 32C60.3227 32 57.6364 34.6863 57.6364 38ZM63.6364 30C59.2181 30 55.6364 33.5817 55.6364 38C55.6364 42.4183 59.2181 46 63.6364 46C68.0546 46 71.6364 42.4183 71.6364 38C71.6364 33.5817 68.0546 30 63.6364 30Z" fill="black"/>
                            </svg>
                            <h3>Identificador de<br /> Etapas</h3>
                        </div>
                        <div className="gtm-tagModal" data-tag="agua-quente">
                            <svg width="83" height="76" viewBox="0 0 83 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="hover_fill" fillRule="evenodd" clipRule="evenodd" d="M68.0455 19.95H28.9545V55.05H68.0455V19.95ZM27 18V57H70V18H27Z" fill="black"/>
                                <path className="hover_fill" d="M27 45V47.2727H41.1107L42.6988 50H54.3012L55.8893 47.2727H70V45H54.8523L53.2642 47.7273H43.7358L42.1477 45H27Z" fill="black"/>
                                <path className="hover_fill" d="M27 36V38.2727H41.1107L42.6988 41H54.3012L55.8893 38.2727H70V36H54.8523L53.2642 38.7273H43.7358L42.1477 36H27Z" fill="black"/>
                                <path className="hover_fill" d="M27 26V27.8182H41.1107L42.6988 30H54.3012L55.8893 27.8182H70V26H54.8523L53.2642 28.1818H43.7358L42.1477 26H27Z" fill="black"/>
                                <path className="hover_fill" fillRule="evenodd" clipRule="evenodd" d="M17.1231 24.1609C17.3313 23.9464 17.6687 23.9464 17.8769 24.1609L21.8439 28.2506C22.052 28.4651 22.052 28.813 21.8439 29.0276C21.6358 29.2422 21.2983 29.2422 21.0902 29.0276L18.0317 25.8746C18.0325 25.8872 18.033 25.8999 18.033 25.9127V35.4552C18.033 35.7586 17.7944 36.0046 17.5 36.0046C17.2056 36.0046 16.967 35.7586 16.967 35.4552V25.9127C16.967 25.8999 16.9675 25.8872 16.9683 25.8746L13.9098 29.0276C13.7017 29.2422 13.3642 29.2422 13.1561 29.0276C12.948 28.813 12.948 28.4651 13.1561 28.2506L17.1231 24.1609ZM17.4631 25.3645C17.4753 25.3637 17.4876 25.3632 17.5 25.3632C17.5124 25.3632 17.5247 25.3637 17.5369 25.3645L17.5 25.3265L17.4631 25.3645ZM17.5 38.9954C17.7944 38.9954 18.033 39.2414 18.033 39.5448V49.0873C18.033 49.1001 18.0325 49.1128 18.0317 49.1254L21.0902 45.9724C21.2983 45.7578 21.6358 45.7578 21.8439 45.9724C22.052 46.187 22.052 46.5349 21.8439 46.7494L17.8769 50.8391C17.6687 51.0536 17.3313 51.0536 17.1231 50.8391L13.1561 46.7494C12.948 46.5349 12.948 46.187 13.1561 45.9724C13.3642 45.7578 13.7017 45.7578 13.9098 45.9724L16.9683 49.1254C16.9675 49.1128 16.967 49.1001 16.967 49.0873V39.5448C16.967 39.2414 17.2056 38.9954 17.5 38.9954ZM17.4631 49.6355L17.5 49.6735L17.5369 49.6355C17.5247 49.6363 17.5124 49.6368 17.5 49.6368C17.4876 49.6368 17.4753 49.6363 17.4631 49.6355Z" fill="black"/>
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