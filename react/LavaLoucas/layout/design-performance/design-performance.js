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
            <div id="design-performance" className="design-performance section">

                <Title setClass="center" textMF="Design &" textMS="Perfomance" textDF="Design & Perfomance"/>

                <p className="none__mobile">A combinação dos jatos precisos de água, alta temperatura e sabão concentrado fazem com que a máquina atinja resultados que não alcançamos na lavagem manual.</p>
                
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
                <Slider className="slider slider__design" {...settings__design}>
                    <div className="slide__design" style={{ width: 100 }}>
                        <picture className="featured__image-container border">
                            <caption>Economia de tempo</caption>
                            <div className="effect__hover">
                                <img src={cicloTiraManchasFeaturedImageCanetinha}  title="Economia de tempo"/> 
                            </div>
                        </picture>
                        <p>A lava-louças faz todo o trabalho para que você aproveite os momentos que realmente importam. Passar mais tempo com a família e ter a certeza de que a máquina fará todo o trabalho com uma performance impecável.</p>
                    </div>
                    <div className="slide__design" style={{ width: 90 }}>
                        <picture className="featured__image-container border">
                            <caption>Praticidade</caption>
                            <div className="effect__hover">
                                <img src={cicloTiraManchasFeaturedImageGordura}  title="Praticidade"/>
                            </div>
                        </picture>
                        <p>A lava-louças Brastemp possui até 5 ciclos para suprir a todas as suas necessidades, além de economizar água e energia para sua casa. Ao selecionar o ciclo correto de lavagem para cada necessidade é possível economizar até 6x mais de água do que a lavagem manual.</p>
                    </div>
                    <div className="slide__design" style={{ width: 100 }}>
                        <picture className="featured__image-container border">
                            <caption>Higiene e proteção</caption>
                            <div className="effect__hover">
                                <img src={cicloTiraManchasFeaturedImageGordura}  title="Higiene e proteção"/>
                            </div>
                        </picture>
                        <p>Precisa de um texto pra esse beneficio. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </Slider>
            </div>
        )
    }
}
export default DesignPerformance;