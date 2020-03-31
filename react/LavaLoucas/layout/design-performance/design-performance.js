import React from 'react';
import { Picture } from 'react-responsive-picture';

//libs
import Slider from "react-slick";

//components
import Button from '../../components/button/button';
import Title from '../../components/title/title';

//imgs
const imgSmallPng = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,w_563/2020-lava-loucas/desatqueBLF14AR__1_xhzw0v.png';
const imgMediumPng = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,w_1144/2020-lava-loucas/desatqueBLF14AR__1_xhzw0v.png';
const imgLargerPng = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,w_1144/2020-lava-loucas/desatqueBLF14AR__1_xhzw0v.png';

const imgSmallWebp = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,w_563/2020-lava-loucas/desatqueBLF14AR__1_xhzw0v.webp';
const imgMediumWebp = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,w_1144/2020-lava-loucas/desatqueBLF14AR__1_xhzw0v.webp';
const imgLargerWebp = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,w_1144/2020-lava-loucas/desatqueBLF14AR__1_xhzw0v.webp';

const cicloTiraManchasFeaturedImageCanetinha = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/tira-manchas__featured-canetinha_mid.png';
const cicloTiraManchasFeaturedImageGordura = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/tira-manchas__featured-gordura_mid.png';

class DesignPerformance extends React.Component {
 
    render() {

        const settings__design = {
			dots: false,
			arrow: false,
			autoplay: false,
			infinite: false,
			slidesToShow: 3,
			centerMode: true,
            centerPadding: "20px",
			responsive: [
				{
					breakpoint: 767,
					settings: {
						dots: true,
                        arrow: false,
                        autoplay: false,
                        infinite: false,
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: "20px",
					}
				}
			]
		};

        return (
            <div>
                <div id="design-performance" className="design-performance section">

                    <Title setClass="center" SetTxtMobileRow1="Design &" SetTxtMobileRow2="Perfomance" SetTxtDesktopRow1="Design & Perfomance"/>

                    <p className="none__mobile">
                        A combinação do jatos precisos de água, alta temperatura e sabão concentrado 
                        fazem com que a Lava Louças Brastemp atinja resultados que não alcançamos na 
                        lavagem manual. 
                    </p>
                    
                    <div className="wrap-buttons">
                        
                        <span 
                            onClick = { e => {
                                this.props.openModal();
                                this.props.changeSlide(0);
                                } 
                            } data-tag="painel-multifuncional">
                            <Button setClass="not_responsive" label="Painel Touch"/>
                        </span>
                        <span onClick={e => {
                            this.props.openModal(); 
                            this.props.changeSlide(1);
                            }} data-tag="soft-close">
                            <Button setClass="not_responsive" label="Gaveta de Talheres" />
                        </span>
                        <span onClick={e => {
                            this.props.openModal();
                            this.props.changeSlide(3);
                            
                            }} data-tag="identificador-de-etapas">
                            <Button setClass="not_responsive" label="Identificador de Etapas" />
                        </span>
                        <span onClick={e => {
                            this.props.openModal();
                            this.props.changeSlide(2);
                            
                            }} data-tag="cesto-flexivel">
                            <Button setClass="not_responsive" label="Cesto Flexível" />
                        </span>
                        
                    </div>
                    <div className="picture__effects">
                        <Picture
                            
                            sources = {[
                                {srcSet: imgSmallPng,    media: "(max-width: 555px)",    type: "image/png"},
                                {srcSet: imgMediumPng,    media: "(max-width: 1366px)",    type: "image/png"},
                                {srcSet: imgLargerPng,    media: "(min-width: 1367px)",    type: "image/png"},
            
                                {srcSet: imgSmallWebp,    media: "(max-width: 555px)",    type: "image/webp"},
                                {srcSet: imgMediumWebp,    media: "(max-width: 1366px)",    type: "image/webp"},
                                {srcSet: imgLargerWebp,    media: "(min-width: 1367px)",    type: "image/webp"},
                            ]}
                        />
                    </div>

                    <p className="small">
                        <small> 
                        A lava-louças Brastemp alcançou o nível A de performance de lavagem, 
                        segundo a regulação mais rígida do mundo*
                        </small>
                    </p> 
                    <p className="small">
                        <small>
                        *Conforme certificação da Regulação Européia EC 1059/2010
                        </small>
                    </p>
                
                </div>
                <div id="beneficios" className="section">
                    <Slider className="slider slider__design" {...settings__design}>
                        <div className="slide__design" style={{ width: 100 }}>
                            <figure className="featured__image-container border">
                                <figcaption>Economia de tempo</figcaption>
                                <div className="effect__hover">
                                    <img src={cicloTiraManchasFeaturedImageCanetinha}  title="Economia de tempo"/> 
                                </div>
                            </figure>
                            <p>A lava-louças faz todo o trabalho para que você aproveite os momentos que realmente importam. Passar mais tempo com a família e ter a certeza de que a máquina fará todo o trabalho com uma performance impecável.</p>
                        </div>
                        <div className="slide__design" style={{ width: 90 }}>
                            <figure className="featured__image-container border">
                                <figcaption>Economia de água</figcaption>
                                <div className="effect__hover">
                                    <img src={cicloTiraManchasFeaturedImageGordura}  title="Economia de água"/>
                                </div>
                            </figure>
                            <p>A lava-louças Brastemp possui até 5 ciclos para suprir a todas as suas necessidades, além de economizar água e energia para sua casa. Ao selecionar o ciclo correto de lavagem para cada necessidade é possível economizar até 6x mais de água do que a lavagem manual.</p>
                        </div>
                        <div className="slide__design" style={{ width: 100 }}>
                            <figure className="featured__image-container border">
                                <figcaption>Higiene e proteção</figcaption>
                                <div className="effect__hover">
                                    <img src={cicloTiraManchasFeaturedImageGordura}  title="Higiene e proteção"/>
                                </div>
                            </figure>
                            <p>A Lava louças Brastemp possui jatos de água em alta temperatura e pressão que garantem a sanitização completa das louças. Além dos 6 ciclos de lavagem que permitem uma maior precisão na limpeza de taças à panelas.</p>
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}
export default DesignPerformance;