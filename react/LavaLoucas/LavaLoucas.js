import React, { Component } from 'react';
import Headroom from 'react-headroom';

// Assets
import './lava-loucas.global.css';

// Components
import Menu from './components/menu/menu';
import Modal from "./components/modal/modal";
import SliderDesignPerformance from "./components/sliderDesignPerformance/sliderDesignPerformance";

// Layouts
import DesignPerformance from './layout/design-performance/design-performance';
import ProgamasLavagem from './layout/programas-lavagem/programas-lavagem';
import Videos from './layout/videos/videos';
import GuiaCompras from './layout/guia-compras/guia-compras';
import Vitrine from "./layout/vitrine/vitrine";
import AssistenciaTecnica from "./layout/assistencia-tecnica/assistencia-tecnica";

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
		return (
            <div className="lava-loucas">
				
				<Headroom disableInlineStyles>
					<Menu />
				</Headroom>
				<div id="destaque" className="section">
					DESTAQUE
					<br/><br/><br/>
					DESTAQUE
					<br/><br/><br/>
				</div>
				<DesignPerformance openModal={this.showModal1} changeSlide={this.changeSlide} />
				<Modal 
					setClass="slider" 
					onClose={this.showModal1} 
					show={this.state.show1} >
					<SliderDesignPerformance changeSlide={this.state.sliderNumber} />
				</Modal>

				<ProgamasLavagem />
				<Videos />
				<GuiaCompras />
				<Vitrine />
				<AssistenciaTecnica />
				
			</div>
		) }
	}
export default LavaLoucas;
