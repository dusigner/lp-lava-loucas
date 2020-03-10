import React from 'react';
import { Picture } from 'react-responsive-picture';

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

class DesignPerformance extends React.Component {
 
    render() {

        return (
            <div id="design-performance" className="design-performance section">

                <Title setClass="center" textMF="Design &" textMS="Perfomance" textDF="Design & Perfomance"/>

                <p>A combinação dos jatos precisos de água, alta temperatura e sabão concentrado fazem com que a máquina atinja resultados que não alcançamos na lavagem manual.</p>
                
                <div className="wrap-buttons">
                    <span 
                        onClick = { e => {
                            this.props.openModal();
                            this.props.changeSlide(0);
                            } 
                        } className="btn-left1" data-tag="painel-multifuncional">
                        <Button label="Painel Touch"/>
                    </span>
                    <span onClick={e => {
                        this.props.openModal(); 
                        this.props.changeSlide(1);
                        }} className="btn-left2" data-tag="soft-close">
                        <Button label="Gaveta de Talheres" />
                    </span>
                    <span onClick={e => {
                        this.props.openModal();
                        this.props.changeSlide(3);
                        
                        }} className="btn-right1" data-tag="agua-quente">
                        <Button label="Identificador de Etapas" />
                    </span>
                    <span onClick={e => {
                        this.props.openModal();
                        this.props.changeSlide(2);
                        
                        }} className="btn-right2" data-tag="cesto-em-inox">
                        <Button label="Cesto Flexível" />
                    </span>
                    
                </div>
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
        )
    }
}
export default DesignPerformance;