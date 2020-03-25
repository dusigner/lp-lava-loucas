// Components
import React from 'react';
import Slider from "react-slick";

import { CardProdutoVitrine, StoredDatalayer } from "brastemp.components";
import { Query } from 'react-apollo';

import BWR12A9 from './BWR12A9.gql';
import BWR12AB from './BWR12AB.gql';
import BWK12A9 from './BWK12A9.gql';
import BWK14AB from './BWK14AB.gql';
import BWK12AB from './BWK12AB.gql';

const cards = [];

// imgs

const imgFiltro = "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/filtro.png";



var filtro = [
    {BWR12A9 : {
        cor: 'titanio',
        funcao: 'agua_quente',
        peso: '12kg',
        manchas: 'pro',
        soft: 'softclose'
        }
    },
    {BWK12A9 : {
        cor:'titanio',
        peso: '12kg',
        manchas: 'advanced'
        }
    },
    {BWR12AB : {
        cor:'branco',
        funcao: 'agua_quente',
        peso: '12kg',
        manchas: 'pro'
        }
    },
    {BWK12AB : {
        cor:'branco',
        peso: '12kg',
        manchas: 'advanced'
        }
    },
    {BWK14AB : {
        cor:'branco',
        peso: '14kg',
        manchas: 'advanced'
        }
    },
]

var features_checked;

class Vitrine extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            BWR12A9 : true,
            BWR12AB : true,
            BWK12A9 : true,
            BWK14AB : true,
            BWK12AB : true,

            datalayer: []
        }

        this.dispatchedData = 0;
        StoredDatalayer.clean();
        StoredDatalayer.start({
          event: 'virtualPageview',
          step: `categoria/lavadora-edge`,
        });
    }

    componentDidMount() {
        
        window.addEventListener('scroll', this.onWindowScroll);

        const dataCategory = {
            page: {
              type: 'category',
              currencyCode: 'BRL',
              category: "lavadora-edge",
              promos: []
            }
        };
      
        StoredDatalayer.set(dataCategory);
        //this.datalayerCategory();




        var filtroMobile = document.querySelectorAll('.vitrine-edge__filtro-mobile');
        var filtroContent = document.querySelectorAll('.vitrine-edge__filtro');
        var filtroRedefinir = document.querySelectorAll('.vitrine-edge__refinar')

        filtroMobile[0].addEventListener('click', element=>{
            if(filtroContent[0].classList.contains('-active')){
                filtroContent[0].classList.remove('-active')
            } else {
                filtroContent[0].classList.add('-active')
            }
        })

        filtroRedefinir[0].addEventListener('click', element=>{
            if(filtroContent[0].classList.contains('-active')){
                filtroContent[0].classList.remove('-active')
            }
        })

        
        var features = document.querySelectorAll('.filtroSearch');
        features.forEach((element,index) => {
            element.addEventListener('change', ()=>{
                
                features_checked = [];

                features.forEach((element,index) => {
                    element.checked && features_checked.push(element.value)
                })

                var result1 = []
                var resultado = []
                
                var result = filtro.forEach(elemento => {
                    const ele = Object.values(elemento)
                    const fil_ele = Object.values(ele[0]).filter(l => features_checked.includes(l))
                    

                    if(fil_ele.length == features_checked.length){
                        result1.push(elemento)
                    }

                })
                

                Object.keys(this.state).map(element=>{
                    this.setState({[element]: false})

                    for(var i=0;i<result1.length;i++){
                        if(Object.keys(result1[i]) == element){
                            this.setState({[element]: true})
                        }
                    }
                })

                result1.forEach(elemento => {
                    const ele = Object.values(elemento)
                    const fil_ele = Object.values(ele[0]);

                    for(var i=0;i<fil_ele.length;i++){
                        if(resultado.indexOf(fil_ele[i]) == -1){
                            resultado.push(fil_ele[i])
                        }
                    }
                    
                })

                features.forEach(element => {
                    element.disabled = true;
                    for(var i=0;i<resultado.length;i++){
                        if(element.value == resultado[i]){
                            element.disabled = false;
                        }
                    }
                })

            })
        });

    }

    onWindowScroll = () => {

        const cardsclick = document.querySelectorAll('.vitrine_card')

        cardsclick.forEach(element=>{
            element.addEventListener('click', ()=>{
                if (element.classList.contains('clicado')===false){
                    var texto = element.querySelectorAll('.card-product__title');
                    var novo_texto = texto[0].innerText.replace(/\s/g,'_')
                    dataLayer.push({
                        event: 'generic',                     
                        category: 'lavadora_edge',
                        action: 'product_click',
                        label: novo_texto
                    })
                    element.classList.add('clicado')
                }
            })
        })

        const cards = document.querySelectorAll('.vitrine_card')

        for (let index = 0; index < cards.length; index++) {
            const element = cards[index];

            const observer = new IntersectionObserver(function(entries) {
                if(entries[0].isIntersecting === true) {
                    
                    if (element.classList.contains('visto')===false){
                        var texto = element.querySelectorAll('.card-product__title');
                        var novo_texto = texto[0].innerText.replace(/\s/g,'_')
                        
                        dataLayer.push({
                            event: 'generic',                     
                            category: 'lavadora_edge',
                            action: 'product_impressions',
                            label: novo_texto
                        })

                        element.classList.add('visto')
                    }
                    
                }
            }, { threshold: [0.5] });
            
            observer.observe(element);
            
        }

    }

    // datalayerCategory = () => {
    //     const { searchQuery } = this.props;
    
    //     // ----- START - Read Products Objects
    //     let tempDatalayer = StoredDatalayer.get()
    //     let products = []
    //     console.log(products);
    
    //     if (tempDatalayer.event === 'updateImpressions') {
    //       products = tempDatalayer.impressions || []
    //     } else {
    //       products = tempDatalayer.page.impressions || []
    //     }
    
    //     tempDatalayer.step = `categoria/lavaloucas`
    
    //     if (products.length && products.length >= (searchQuery.products.length - this.dispatchedData)) {
    //         StoredDatalayer.dispatch();
    
    //           if (tempDatalayer.event && tempDatalayer.event === 'updateImpressions') {
    //             this.currDatalayer = tempDatalayer.impressions || []
    //           } else {
    //             this.currDatalayer = tempDatalayer.page.impressions || []
    //           }
    //           this.dispatchedData = searchQuery.products.length
    
    //     } else {
    //           StoredDatalayer.interval(this.datalayerCategory);
    //     }
    //     // ----- End - Read Products Objects
    // }
    

    produtos = () => {
        return(
            <React.Fragment>
                {this.state.BWR12A9 &&
                <div>
                    <Query query={BWR12A9}>
                        {({ loading, data }) => {

                            if(loading)
                                return (<p>loading</p>)
                                
                            const produtos = {
                                price : data.product.items[0].sellers[0].commertialOffer.Price,
                                listPrice : data.product.items[0].sellers[0].commertialOffer.ListPrice,
                                installment : data.product.items[0].sellers[0].commertialOffer.Installments,
                                title: data.product.productName,
                                skuProduto: data.product.items[0].referenceId[0].Value,
                                modelo: [
                                    {
                                        imageUrl: data.product.items[0].images[0].imageUrl,
                                        slug: data.product.linkText
                                    }
                                ]
                            };

                            return (
                                <div className="vitrine_card BWR12A9">
                                    <CardProdutoVitrine 
                                        produto={produtos}
                                        brand={"Brastemp"}
                                        position={1}
                                        list={"lava-seca"}
                                        categoria={"lava-seca"}
                                        installment={true}
                                        listPrice={true}
                                        price={true}
                                        page={"store/product"}
                                    />
                                </div>
                            )
                            
                        }}
                    </Query>					
                </div>
                }
                {this.state.BWR12AB &&
                <div>
                    <Query query={BWR12AB}>
                        {({ loading, data }) => {
                            
                            if(loading)
                                return (<p>loading</p>)
                                
                            const produtos = {
                                price : data.product.items[0].sellers[0].commertialOffer.Price,
                                listPrice : data.product.items[0].sellers[0].commertialOffer.ListPrice,
                                installment : data.product.items[0].sellers[0].commertialOffer.Installments,
                                title: data.product.productName,
                                skuProduto: data.product.items[0].referenceId[0].Value,
                                modelo: [
                                    {
                                        imageUrl: data.product.items[0].images[0].imageUrl,
                                        slug: data.product.linkText
                                    }
                                ]
                            };
                            
                            return (
                                <div className="vitrine_card BWR12AB">
                                    <CardProdutoVitrine 
                                        produto={produtos}
                                        brand={"Brastemp"}
                                        position={1}
                                        list={"lava-seca"}
                                        categoria={"lava-seca"}
                                        installment={true}
                                        listPrice={true}
                                        price={true}
                                        page={"store/product"}
                                    />
                                </div>
                            )
                            
                        }}
                    </Query>					
                </div>
                }
                {this.state.BWK12A9 &&
                <div>
                    <Query query={BWK12A9}>
                        {({ loading, data }) => {
                            
                            if(loading)
                                return (<p>loading</p>)
                                
                            const produtos = {
                                price : data.product.items[0].sellers[0].commertialOffer.Price,
                                listPrice : data.product.items[0].sellers[0].commertialOffer.ListPrice,
                                installment : data.product.items[0].sellers[0].commertialOffer.Installments,
                                title: data.product.productName,
                                skuProduto: data.product.items[0].referenceId[0].Value,
                                modelo: [
                                    {
                                        imageUrl: data.product.items[0].images[0].imageUrl,
                                        slug: data.product.linkText
                                    }
                                ]
                            };

                            return (
                                <div className="vitrine_card BWK12A9">
                                    <CardProdutoVitrine 
                                        produto={produtos}
                                        brand={"Brastemp"}
                                        position={1}
                                        list={"lava-seca"}
                                        categoria={"lava-seca"}
                                        installment={true}
                                        listPrice={true}
                                        price={true}
                                        page={"store/product"}
                                    />
                                </div>
                            )
                        }}
                    </Query>					
                </div>
                }
                {this.state.BWK14AB &&
                <div>
                    <Query query={BWK14AB}>
                        {({ loading, data }) => {
                            
                            if(loading)
                                return (<p>loading</p>)
                                
                            const produtos = {
                                price : data.product.items[0].sellers[0].commertialOffer.Price,
                                listPrice : data.product.items[0].sellers[0].commertialOffer.ListPrice,
                                installment : data.product.items[0].sellers[0].commertialOffer.Installments,
                                title: data.product.productName,
                                skuProduto: data.product.items[0].referenceId[0].Value,
                                modelo: [
                                    {
                                        imageUrl: data.product.items[0].images[0].imageUrl,
                                        slug: data.product.linkText
                                    }
                                ]
                            };
                            
                            return (
                                <div className="vitrine_card BWK14AB">
                                    <CardProdutoVitrine 
                                        produto={produtos}
                                        brand={"Brastemp"}
                                        position={1}
                                        list={"lava-seca"}
                                        categoria={"lava-seca"}
                                        installment={true}
                                        listPrice={true}
                                        price={true}
                                        page={"store/product"}
                                    />
                                </div>
                            )
                        }}
                    </Query>					
                </div>
                }
                {this.state.BWK12AB &&
                <div>
                    <Query query={BWK12AB}>
                        {({ loading, data }) => {
                            
                            if(loading)
                                return (<p>loading</p>)
                                
                            const produtos = {
                                price : data.product.items[0].sellers[0].commertialOffer.Price,
                                listPrice : data.product.items[0].sellers[0].commertialOffer.ListPrice,
                                installment : data.product.items[0].sellers[0].commertialOffer.Installments,
                                title: data.product.productName,
                                skuProduto: data.product.items[0].referenceId[0].Value,
                                modelo: [
                                    {
                                        imageUrl: data.product.items[0].images[0].imageUrl,
                                        slug: data.product.linkText
                                    }
                                ]
                            };
                            
                            return (
                                <div className="vitrine_card BWK12AB">
                                    <CardProdutoVitrine 
                                        produto={produtos}
                                        brand={"Brastemp"}
                                        position={1}
                                        list={"lava-seca"}
                                        categoria={"lava-seca"}
                                        installment={true}
                                        listPrice={true}
                                        price={true}
                                        page={"store/product"}
                                    />
                                </div>
                            )
                        }}
                    </Query>					
                </div>
                }
            </React.Fragment>
        )
    }

    render() {

        return (
            
            <div id="vitrine-edge" className="vitrine-edge section">

				<h1>Conheça os modelos</h1>

                <button className="vitrine-edge__filtro-mobile"><i><img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/filtro-.png" alt="Filtro" /></i>Filtrar</button>

				<p className="-text">Todos os modelos possuem</p>

				<div className="-inline">
				    <p className="-text"><i><img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/check-1.png" alt="Check" /></i>Ciclo Edredom</p>
                    <p className="-text"><i><img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/check-1.png" alt="Check" /></i>Ciclo Antibolinhas</p>
                </div>

                <div className="vitrine-edge__content">
                    
                    <div className="vitrine-edge__filtro">

                        <div className="vitrine-edge__filtro-content">

                            <h2><i><img src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/filtro.png" alt="filtro" /></i>Refine sua pesquisa</h2>

                            <ul>
                                <li>
                                    <h2>Cor</h2>
                                    <label>
                                        <input className="filtroSearch" type="checkbox" value="branco"></input>
                                        <span></span>
                                        <p>Branca</p>
                                    </label>
                                    <label>
                                        <input className="filtroSearch" type="checkbox" value="titanio"></input>
                                        <span></span>
                                        <p>Titânio</p>
                                    </label>
                                </li>
                                <li>
                                    <h2>Ciclo Tira-Manchas</h2>
                                    <label>
                                        <input className="filtroSearch" type="checkbox" value="pro"></input>
                                        <span></span>
                                        <p>Pro</p>
                                    </label>
                                    <label>
                                        <input className="filtroSearch" type="checkbox" value="advanced"></input>
                                        <span></span>
                                        <p>Advanced</p>
                                    </label>
                                </li>
                                <li>
                                    <h2>Capacidade</h2>
                                    <label>
                                        <input className="filtroSearch" type="checkbox" value="12kg"></input>
                                        <span></span>
                                        <p>12kg</p>
                                    </label>
                                    <label>
                                        <input className="filtroSearch" type="checkbox" value="14kg"></input>
                                        <span></span>
                                        <p>14kg</p>
                                    </label>
                                </li>
                                <li>
                                    <h2>Soft Close</h2>
                                    <label>
                                        <input className="filtroSearch" type="checkbox" value="softclose"></input>
                                        <span></span>
                                        <p>Sim</p>
                                    </label>
                                </li>
                                <li>
                                    <h2>Água Quente</h2>
                                    <label>
                                        <input className="filtroSearch" type="checkbox" value="agua_quente"></input>
                                        <span></span>
                                        <p>Sim</p>
                                    </label>
                                </li>
                            </ul>

                            <button className="vitrine-edge__refinar">Refinar</button>

                        </div>


                    </div>

                    <div className="vitrine-edge__vitrine">
                        {this.produtos()}
                    </div>

                </div>

            </div>

        )
    }
}
export default Vitrine;