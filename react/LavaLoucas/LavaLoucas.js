import React, {Component} from 'react';

// Assets
import './lavadora-edge.global.css';

// Components
import Menu from './components/menu/menu';
import Modal from "./components/modal/modal";
import DesignInovador from './layout/design-inovador/design-inovador';
import PerformanceDeLavagem from './layout/performance-de-lavagem/performance-de-lavagem';
import Capacidade from './layout/capacidade/capacidade';
import ConhecaALinha from './layout/conheca-a-linha/conheca-a-linha';
import Vitrine from "./layout/vitrine/vitrine";
import SliderDesignInovador from "./components/sliderDesignInovador/sliderDesignInovador";
import tagPlan from "./utils/tags"
import Headroom from 'react-headroom';
import LazyLoad from 'react-lazyload';
import AnchorLink from 'react-anchor-link-smooth-scroll';

/*
import { CardProdutoVitrine, StoredDatalayer } from "brastemp.components";
import { Query } from 'react-apollo';
import ProductShowcaseQuery from './produto.gql'
import ProductShowcaseQuery2 from './produto2.gql'
*/

var modal1s = '';
var modal4s = '';
var modal10s = '';

class LavaLoucas extends React.Component {

	state = { 
		show1: false, 
		show2: false, 
		sliderNumber: null,
		tags: null,
	};

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

	componentDidMount() {
		new tagPlan();
		function displayWindowSize(){
			var h = window.innerHeight;
			if(h > 800){
				document.getElementById("seeMore__performance").style.top = "650px";
			}else {
				document.getElementById("seeMore__performance").style.top = (h - 80) + "px";
			}
		}
		window.addEventListener("resize", displayWindowSize);
		displayWindowSize();

    }

	render() { 
		return (
            <div className="lavaloucas">
				<Headroom disableInlineStyles>
					<Menu />
				</Headroom>
			</div>
		) }
	}
export default LavaLoucas;
