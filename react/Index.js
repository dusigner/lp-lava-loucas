import React, {Component} from 'react'
import { SEO, StoredDatalayer } from 'brastemp.components';
import { ExtensionPoint } from "render";
import LavaLoucas from "./LavaLoucas/LavaLoucas";
import LazyLoad from 'react-lazyload';

class lavaloucas extends Component {

    constructor(props) {
        super(props);
    }

    setDataLayerPromos = value => {
		const { page } = StoredDatalayer.get();
		const { promos } = page;
		if (!promos) {
			StoredDatalayer.set({
				page: {
					promos: value
				}
			});
		}
	};

	componentDidMount() {
		StoredDatalayer.clean();
		StoredDatalayer.start({
			event: "virtualPageview",
			step: "lavaloucas",
			page: {
				type: "lavaloucas",
				currencyCode: "BRL",
				promos: null
			}
		});
	}
   
    render () { 
        return(
            <React.Fragment>
                <LazyLoad height={'100%'} offset={0}>
                    <SEO title={"Brastemp | Sem dúvida, Brastemp."} description={"Eletrodomésticos e acessórios para sua cozinha e lavanderia. Conheça nossa linha de fogões, fornos, geladeiras, lavadoras, microondas e muito mais."} />
                    <main id="main" className="main">
                    <ExtensionPoint id="header" hideSupportMenu={true} />
                    <LavaLoucas />
                    <ExtensionPoint id="footer"  hideSupportMenu={true} />
                </main>
                </LazyLoad>
            </React.Fragment>
        )
    }

}

export default lavaloucas;