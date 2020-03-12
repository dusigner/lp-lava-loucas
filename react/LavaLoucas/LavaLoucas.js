import React, { Component } from 'react';
import Headroom from 'react-headroom';
import { StoredDatalayer } from 'brastemp.components';

// Assets
import './lava-loucas.global.css';

// Components
import Menu from './components/menu/menu';
import Modal from "./components/modal/modal";
import SliderDesignPerformance from "./components/sliderDesignPerformance/sliderDesignPerformance";
import HeroCarousel from './widgets/heroCarousel/src/HeroCarousel';

// Layouts
import DesignPerformance from './layout/design-performance/design-performance';


class LavaLoucas extends React.Component {

	constructor(props) {
        super(props);


        this.state = {
			show1: false, 
			show2: false, 
			sliderNumber: null,
			tags: null,
        }

	}
	
	componentDidMount() {

    }

    componentDidUpdate() {
  
    }

	showModal1   = e => {  
		this.setState({ 
			show1: !this.state.show1
		});
	};

    showModal2   = e => {  
		this.setState({
			show2: !this.state.show2
		});
		if(!this.state.show2 == true){

			modal1s = setTimeout(()=>{ 
                dataLayer.push({
                    event: 'generic',                     
                    category: 'lavadora_edge',
                    action: 'exibicao_modal_lista_de_manchas',
                    label: '1'
                })
            }, 1000);
    
            modal4s = setTimeout(()=>{ 
                dataLayer.push({
                    event: 'generic',                     
                    category: 'lavadora_edge',
                    action: 'exibicao_modal_lista_de_manchas',
                    label: '4'
                })
            }, 4000);
    
            modal10s = setTimeout(()=>{ 
                dataLayer.push({
                    event: 'generic',                     
                    category: 'lavadora_edge',
                    action: 'exibicao_modal_lista_de_manchas',
                    label: '10'
                })
            }, 10000);
			
		} else {
			clearTimeout(modal1s);
			clearTimeout(modal4s);
			clearTimeout(modal10s);
		}
	};

	
	changeSlide = (value)=> {
		this.setState({
			sliderNumber: value
		})
	
	}
	
	render() { 
		const Banners = {};

		return (
            <div className="lava-loucas">
				<Headroom disableInlineStyles>
					<Menu />
				</Headroom>
				<div className="hero-edu">
				<HeroCarousel data={Banners} parentState={this.state} />
				</div>
				<DesignPerformance openModal={this.showModal1} changeSlide={this.changeSlide} />
				<Modal 
					setClass="slider" 
					onClose={this.showModal1} 
					show={this.state.show1} >
					<SliderDesignPerformance changeSlide={this.state.sliderNumber} />
				</Modal>
			</div>
		) }
	}
export default LavaLoucas;
