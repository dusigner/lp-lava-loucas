import React, {Component} from 'react';
import Headroom from 'react-headroom';

// Assets
import './lava-loucas.global.css';

// Components
import Menu from './components/menu/menu';
import DesignPerformance from './layout/design-performance/design-performance';

class LavaLoucas extends React.Component {


	render() { 
		return (
            <div className="lava-loucas">
				<Headroom disableInlineStyles>
					<Menu />
				</Headroom>
				<div id="destaque" className="destaque section">
					DESTAQUE<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
					<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
				</div>
				<DesignPerformance />
				<div id="beneficios" className="beneficios section">
					DESTAQUE<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
					<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
				</div>
			</div>
		) }
	}
export default LavaLoucas;
