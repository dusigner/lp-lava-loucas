import React from 'react';
//components
import Title from '../../components/title/title';
import Accordion from "../../components/acoordion/accordion";
import Button from '../../components/button/button';
//libs
import Slider from "react-slick";

class guiaCompras extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
			nav1: null,
			nav2: null
		};
    }

    componentDidMount() {
        /* Controla slider pela navegação */
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render(){

        const slider__guiaText = {
			dots: false,
			arrow: false,
            autoplay: false,
            fade: true,
			infinite: true,
			slidesToShow: 1,
            centerMode: false,
            adaptiveHeight: true
        };

        const slider__guiaButtons = {
			dots: false,
			arrow: false,
			autoplay: false,
			infinite: false,
            vertical: true,
            verticalSwiping: true,
			slidesToShow: 7,
            swipeToSlide: "true",
            focusOnSelect: "true",
  
        };

        return(

               //TEXTO ESTÁ DUPLICADO, SE MUDAR NO ACCORDION (MOBILE) TEM QUE MUDAR NO SLIDER (DESKTOP) 

            <div id="guia__compras" className="guia__compras section">
                <Title setClass="center" SetTxtMobileRow1="Guia de Compras" SetTxtDesktopRow1="Guia de Compras"/>
                
                <p className="description">Confira os detalhes de cada produto Brastemp e tenha certeza na sua escolha. </p>
                <Accordion setClass="acoordion__mobile">
                    <div label="Serviços">
                        <h3>Como escolher a máquina de lavar louças ideal para a rotina da minha casa?</h3>
                        <p>
                            Cada máquina de lavar louças possui um número de <i>serviços</i>. 
                            Serviço é a medida da necessidade diária de limpeza de uma pessoa ao 
                            usar o eletrodoméstico.
                        </p>
                        <p>
                        Encontram-se no mercado aparelhos que vão de 6 até 14 serviços.
                        </p>
                        <p>  
                        Ou seja, que suportam o uso diário de 6 a 14 pessoas.
                        </p>
                        <p>
                        Funciona assim:
                        </p>
                        <ul>
                            <li>Até 6 pessoas: 6 serviços</li>
                            <li>Entre 6 e 8 pessoas: 8 serviços</li>
                            <li>Entre 8 e 10 pessoas: 10 serviços </li>
                            <li>Entre 10 e 12 pessoas: 12 serviços </li>
                            <li>Entre 12 e 14 pessoas: 14 serviços</li>
                        </ul>
                        <p>
                            Não esqueça dos convidados que você costuma receber em casa. 
                            Eles entram na conta da capacidade máxima de cada eletrodoméstico.
                        </p>
                    </div>
                    <div label="Formatos">
                        <h3>Lava-louças sobre a pia ou direto no piso: qual devo escolher?</h3>
                        <p>
                            Existem dois tipos de lava-louças: aquelas que são feitas para serem usadas sobre a pia ou instaladas diretamente no piso. A primeira é menos comum e geralmente, menor que as outras máquinas.
                        </p>
                        <p>
                        Existem modelos de lava-louças que são feitas para serem usadas sobre a pia, enquanto outras podem ser instaladas diretamente no piso. A primeira é mais difícil de achar, e também, é menor que as outras máquinas, na média.
                        </p>
                        <p>  
                        Os eletrodomésticos de piso são mais populares e costumam vir preparados para serem embutidos no armário da cozinha, combinando com a decoração. Alguns precisam de um espaço a mais nas laterais ou na parte de cima. 
                        </p>
                        <p>
                            Sempre verifique a necessidade das medidas antes de realizar a sua compra.
                        </p>
                    </div>
                    <div label="Dimensões">
                        <h3>Quais as Dimensões que devo considerar ao comprar uma Lava-louças?</h3>
                        <p>
                            Um elemento fundamental de observar, ao buscar por uma nova máquina para lavar suas louças, é o tamanho. Assim, veja quais são suas dimensões em altura, largura e profundidade para fazer uma escolha acertada para a sua casa ou apartamento.
                        </p>
                        <p>
                            Sempre bom lembrar: verifique a altura, largura e profundidade do
                            modelo que deseja para confirmar se é compatível com o espaço
                            disponível na sua casa ou apartamento.
                        </p>
                    </div>
                    <div label="Programas">
                        <h3>Como utilizar as opções dos programas de lavagem para economizar tempo e energia?</h3>
                        <p>
                            Os eletrodomésticos apresentam programas de lavagem, que são variedades de intensidade e duração dos ciclos de limpeza. Você pode escolher baseado na quantidade de peças, na delicadeza do que está sendo lavado ou pelo nível de limpeza exigida para os itens da cozinha.
                        </p>
                        <p>
                            Alguns destes eletrodomésticos permitem que você faça uma lavagem mais rápida e econômica, muito útil quando se deseja lavar menos itens em uma única vez, economizando mais energia, água e sabão.
                        </p>
                        <p>  
                            Além disso, algumas lava-louças já são capazes de calcular qual o melhor ciclo a ser usado. Com seus programas inteligentes, conseguem sugerir qual é a escolha mais eficiente para limpar seus copos, talheres, pratos e outros utensílios.
                        </p>
                    </div>
                    <div label="Consumo de Água e Energia">
                        <h3>Dizem que lava-louças gastam muita energia. Como realizar o cálculo do consumo?</h3>
                        <p>
                            Um dos grandes mitos sobre a lava-louças é que elas consomem muita energia. Primeiro, é importante lembrar que, além de econômica com energia elétrica, a lava-louças consome pouquíssima água, se compararmos sua lavagem com a lavagem a mão.
                        </p>
                        <p>
                            Seu gasto médio é medido em kilowats por hora (kWh). Por exemplo: se uma máquina analisada possui o gasto de 0,98 kW, ela gasta quase 1,0 kW a cada hora que o aparelho se encontra ligado.
                        </p>
                        <p>  
                            A escolha correta do melhor ciclo é essencial para o gasto adequado de energia. O ciclo varia muito entre marcas e funções. Os ciclos podem ir de 30 minutos a 3 horas.
                        </p>
                        <p>
                            Se por acaso não encontrar a medida “ kW por hora” (kWh), você pode procurar pela “potência” do aparelho e dividir por mil. Exemplo:
                        </p>
                        <p>Uma lava-louças possui 1200 W de potência. Dividindo 1200 por 1000, chegamos ao resultado de 1,2 kWh.</p>
                        <p>Não esqueça de verificar o consumo de água, além da energia elétrica. Algumas consomem em média 13,47 litros por ciclo de uso, outras chegam a 15 litros. Mesmo que ambos os consumos sejam mais econômicos comparado a lavagem de louças à mão, existem diferenças entre os modelos.</p>
                        <p>Agora que você sabe como é medido o consumo das lava-louças, você pode escolher o modelo que atende melhor a sua necessidade.</p>
                    </div>
                    <div label="Temperatura">
                        <h3>Qual a melhor temperatura para a lavagem das louças?</h3>
                            <p>
                                A máquina usa água quente para fazer a limpeza dos utensílios domésticos. Quanto maior for a temperatura que ela alcança, melhores tendem a ser os resultados de lavagem do aparelho – que costuma vir de 60 a 70º C.
                            </p>
                            <p>
                                Procure saber qual a temperatura máxima que a lavadora alcança antes de fazer a sua escolha.
                            </p>
                    </div>
                    <div label="Instalação">
                        <h3>Você pode escolher duas formas de instalar:</h3>
                        <p>
                            <strong>1. Instalação sem assistência. </strong><br />
                            Quer instalar você mesmo ou conhece alguém que pode instalar pra você? Não deixe de seguir o manual de instrução, que pode ser baixado na página do produto. O manual também será enviado na forma impressa, dentro da embalagem do produto.
                        </p>
                        <p>
                            <strong>2. Instalação com assistência</strong>
                            Conte com a gente se precisar de assistência para a instalação do produto. É só contatar a nossa equipe, que está totalmente preparada para te auxiliar durante todo o processo. 
                        </p>
                        <p>  
                            Clique <a href="https://www.brastemp.com.br/atendimento/solicitar-instalacao" title="agendar a sua assistência">aqui</a> para agendar a sua assistência.
                        </p>
                    </div>
            </Accordion>
                <div className="slider__guia-grid">
                    <Slider
                        className="slider__guia-nav" 

                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}
                       
                        {...slider__guiaButtons}
                        
                        >
                        <div className="slide__videos-buttons">
                            <Button setClass="not_responsive yes_slider" label="Serviços" />
                        </div>
                        <div className="slide__videos-buttons">
                            <Button setClass="not_responsive yes_slider" label="Formatos" />
                        </div>
                        <div className="slide__videos-buttons">
                            <Button setClass="not_responsive yes_slider" label="Dimensões" />
                        </div>
                        <div className="slide__videos-buttons">
                            <Button setClass="not_responsive yes_slider" label="Programas" />
                        </div>
                        <div className="slide__videos-buttons">
                            <Button setClass="not_responsive yes_slider" label="Consumo de Água e Energia" />
                        </div>
                        <div className="slide__videos-buttons">
                            <Button setClass="not_responsive yes_slider" label="Temperatura" />
                        </div>
                        <div className="slide__videos-buttons">
                            <Button setClass="not_responsive yes_slider" label="Instalação" />
                        </div>
                        
                    </Slider>

                    <Slider 
                        className="slider__guia-txt" 

                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}

                        {...slider__guiaText}
                    >   
                        <div className="slider__guia-slide">
                            <h3>Como escolher a máquina de lavar louças ideal para a rotina da minha casa?</h3>
                            <p>
                                Cada máquina de lavar louças possui um número de <i>serviços</i>. 
                                Serviço é a medida da necessidade diária de limpeza de uma pessoa ao 
                                usar o eletrodoméstico.
                            </p>
                            <p>
                            Encontram-se no mercado aparelhos que vão de 6 até 14 serviços.
                            </p>
                            <p>  
                            Ou seja, que suportam o uso diário de 6 a 14 pessoas.
                            </p>
                            <p>
                            Funciona assim:
                            </p>
                            <ul>
                                <li>Até 6 pessoas: 6 serviços</li>
                                <li>Entre 6 e 8 pessoas: 8 serviços</li>
                                <li>Entre 8 e 10 pessoas: 10 serviços </li>
                                <li>Entre 10 e 12 pessoas: 12 serviços </li>
                                <li>Entre 12 e 14 pessoas: 14 serviços</li>
                            </ul>
                            <p>
                                Não esqueça dos convidados que você costuma receber em casa. 
                                Eles entram na conta da capacidade máxima de cada eletrodoméstico.
                            </p>
                        </div>
                        <div className="slider__guia-slide">
                            <h3>Lava-louças sobre a pia ou direto no piso: qual devo escolher?</h3>
                            <p>
                                Existem dois tipos de lava-louças: aquelas que são feitas para serem usadas sobre a pia ou instaladas diretamente no piso. A primeira é menos comum e geralmente, menor que as outras máquinas.
                            </p>
                            <p>
                            Existem modelos de lava-louças que são feitas para serem usadas sobre a pia, enquanto outras podem ser instaladas diretamente no piso. A primeira é mais difícil de achar, e também, é menor que as outras máquinas, na média.
                            </p>
                            <p>  
                            Os eletrodomésticos de piso são mais populares e costumam vir preparados para serem embutidos no armário da cozinha, combinando com a decoração. Alguns precisam de um espaço a mais nas laterais ou na parte de cima. 
                            </p>
                            <p>
                                Sempre verifique a necessidade das medidas antes de realizar a sua compra.
                            </p>
                        </div>
                        <div className="slider__guia-slide">
                            <h3>Quais as Dimensões que devo considerar ao comprar uma Lava-louças?</h3>
                            <p>
                                Um elemento fundamental de observar, ao buscar por uma nova máquina para lavar suas louças, é o tamanho. Assim, veja quais são suas dimensões em altura, largura e profundidade para fazer uma escolha acertada para a sua casa ou apartamento.
                            </p>
                            <p>
                                Sempre bom lembrar: verifique a altura, largura e profundidade do
                                modelo que deseja para confirmar se é compatível com o espaço
                                disponível na sua casa ou apartamento.
                            </p>
                        </div>
                        <div className="slider__guia-slide">
                            <h3>Como utilizar as opções dos programas de lavagem para economizar tempo e energia?</h3>
                            <p>
                                Os eletrodomésticos apresentam programas de lavagem, que são variedades de intensidade e duração dos ciclos de limpeza. Você pode escolher baseado na quantidade de peças, na delicadeza do que está sendo lavado ou pelo nível de limpeza exigida para os itens da cozinha.
                            </p>
                            <p>
                                Alguns destes eletrodomésticos permitem que você faça uma lavagem mais rápida e econômica, muito útil quando se deseja lavar menos itens em uma única vez, economizando mais energia, água e sabão.
                            </p>
                            <p>  
                                Além disso, algumas lava-louças já são capazes de calcular qual o melhor ciclo a ser usado. Com seus programas inteligentes, conseguem sugerir qual é a escolha mais eficiente para limpar seus copos, talheres, pratos e outros utensílios.
                            </p>
                        </div>
                        <div className="slider__guia-slide">
                            <h3>Dizem que lava-louças gastam muita energia. Como realizar o cálculo do consumo?</h3>
                            <p>
                                Um dos grandes mitos sobre a lava-louças é que elas consomem muita energia. Primeiro, é importante lembrar que, além de econômica com energia elétrica, a lava-louças consome pouquíssima água, se compararmos sua lavagem com a lavagem a mão.
                            </p>
                            <p>
                                Seu gasto médio é medido em kilowats por hora (kWh). Por exemplo: se uma máquina analisada possui o gasto de 0,98 kW, ela gasta quase 1,0 kW a cada hora que o aparelho se encontra ligado.
                            </p>
                            <p>  
                                A escolha correta do melhor ciclo é essencial para o gasto adequado de energia. O ciclo varia muito entre marcas e funções. Os ciclos podem ir de 30 minutos a 3 horas.
                            </p>
                            <p>
                                Se por acaso não encontrar a medida “ kW por hora” (kWh), você pode procurar pela “potência” do aparelho e dividir por mil. Exemplo:
                            </p>
                            <p>Uma lava-louças possui 1200 W de potência. Dividindo 1200 por 1000, chegamos ao resultado de 1,2 kWh.</p>
                            <p>Não esqueça de verificar o consumo de água, além da energia elétrica. Algumas consomem em média 13,47 litros por ciclo de uso, outras chegam a 15 litros. Mesmo que ambos os consumos sejam mais econômicos comparado a lavagem de louças à mão, existem diferenças entre os modelos.</p>
                            <p>Agora que você sabe como é medido o consumo das lava-louças, você pode escolher o modelo que atende melhor a sua necessidade.</p>
                        </div>
                        <div className="slider__guia-slide">
                            <h3>Qual a melhor temperatura para a lavagem das louças?</h3>
                            <p>
                                A máquina usa água quente para fazer a limpeza dos utensílios domésticos. Quanto maior for a temperatura que ela alcança, melhores tendem a ser os resultados de lavagem do aparelho – que costuma vir de 60 a 70º C.
                            </p>
                            <p>
                                Procure saber qual a temperatura máxima que a lavadora alcança antes de fazer a sua escolha.
                            </p>
                        </div>
                        <div className="slider__guia-slide">
                            <h3>Você pode escolher duas formas de instalar:</h3>
                            <p>
                                <strong>1. Instalação sem assistência. </strong><br />
                                Quer instalar você mesmo ou conhece alguém que pode instalar pra você? Não deixe de seguir o manual de instrução, que pode ser baixado na página do produto. O manual também será enviado na forma impressa, dentro da embalagem do produto.
                            </p>
                            <p>
                                <strong>2. Instalação com assistência</strong>
                                Conte com a gente se precisar de assistência para a instalação do produto. É só contatar a nossa equipe, que está totalmente preparada para te auxiliar durante todo o processo. 
                            </p>
                            <p>  
                                Clique <a href="https://www.brastemp.com.br/atendimento/solicitar-instalacao" title="agendar a sua assistência">aqui</a> para agendar a sua assistência.
                            </p>
                        </div>
                        
                    </Slider>
                    
                </div>
            </div>
        )
    }
}

export default guiaCompras;