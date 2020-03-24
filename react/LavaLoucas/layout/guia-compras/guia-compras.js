import React from 'react';
//components
import Title from '../../components/title/title';
import Accordion from "../../components/acoordion/accordion";

class guiaCompras extends React.Component {
    render(){
        return(
            <div id="guia__compras" className="guia__compras section">
                <Title setClass="center" SetTxtMobileRow1="Guia de Compras" SetTxtDesktopRow1="Guia de Compras"/>
                
                <p className="description">A combinação dos jatos precisos de água, alta temperatura e sabão concentrado fazem com que a máquina atinja resultados que não alcançamos na lavagem manual.</p>
                <Accordion setClass="acoordion__mobile">
                    <div label="Serviços">
                        
                        <p>
                            Um dos primeiros elementos a ser verificado, quando se pesquisa 
                            por uma máquina de lavar louças, é qual o número de serviços que ela oferece. 
                        </p>
                        <p>
                            Os serviços, neste aparelho, significam a capacidade de lavagem baseada em número 
                            de pessoas. Portanto, quanto maior o número de moradores na casa, maior deve ser 
                            o número de serviços ofertado pelo eletrodoméstico, para suprir as necessidades diárias de limpeza.
                        </p>
                        <p>  
                            Encontram-se no mercado aparelhos que vão de 6 até 14 serviços. 
                        </p>
                        <p>
                            Portanto, quanto maior a sua necessidade de lavagem, maior deverá ser o número de 
                            serviços do aparelho. Considere, além disso, a frequência com que você recebe 
                            convidados em sua casa e o quanto de pessoas são, na média. Veja a tabela abaixo: 
                        </p>
                        <ul>
                            <li>Até 6 pessoas: 6 serviços </li>
                            <li>Entre 6 e 8 pessoas: 8 serviços </li>
                            <li>Entre 8 e 10 pessoas: 10 serviços </li>
                            <li>Entre 10 e 12 pessoas: 12 serviços </li>
                            <li>Entre 12 e 14 pessoas: 14 serviços</li>
                        </ul>
                        
                    </div>
                    <div label="Formatos">
                        <p>
                            Um dos primeiros elementos a ser verificado, quando se pesquisa 
                            por uma máquina de lavar louças, é qual o número de serviços que ela oferece. 
                        </p>
                        <p>
                            Os serviços, neste aparelho, significam a capacidade de lavagem baseada em número 
                            de pessoas. Portanto, quanto maior o número de moradores na casa, maior deve ser 
                            o número de serviços ofertado pelo eletrodoméstico, para suprir as necessidades diárias de limpeza.
                        </p>
                        <p>  
                            Encontram-se no mercado aparelhos que vão de 6 até 14 serviços. 
                        </p>
                        <p>
                            Portanto, quanto maior a sua necessidade de lavagem, maior deverá ser o número de 
                            serviços do aparelho. Considere, além disso, a frequência com que você recebe 
                            convidados em sua casa e o quanto de pessoas são, na média. Veja a tabela abaixo: 
                        </p>
                        <ul>
                            <li>Até 6 pessoas: 6 serviços </li>
                            <li>Entre 6 e 8 pessoas: 8 serviços </li>
                            <li>Entre 8 e 10 pessoas: 10 serviços </li>
                            <li>Entre 10 e 12 pessoas: 12 serviços </li>
                            <li>Entre 12 e 14 pessoas: 14 serviços</li>
                        </ul>
                    </div>
                    <div label="Dimensões">
                        <p>
                            Um dos primeiros elementos a ser verificado, quando se pesquisa 
                            por uma máquina de lavar louças, é qual o número de serviços que ela oferece. 
                        </p>
                        <p>
                            Os serviços, neste aparelho, significam a capacidade de lavagem baseada em número 
                            de pessoas. Portanto, quanto maior o número de moradores na casa, maior deve ser 
                            o número de serviços ofertado pelo eletrodoméstico, para suprir as necessidades diárias de limpeza.
                        </p>
                        <p>  
                            Encontram-se no mercado aparelhos que vão de 6 até 14 serviços. 
                        </p>
                        <p>
                            Portanto, quanto maior a sua necessidade de lavagem, maior deverá ser o número de 
                            serviços do aparelho. Considere, além disso, a frequência com que você recebe 
                            convidados em sua casa e o quanto de pessoas são, na média. Veja a tabela abaixo: 
                        </p>
                        <ul>
                            <li>Até 6 pessoas: 6 serviços </li>
                            <li>Entre 6 e 8 pessoas: 8 serviços </li>
                            <li>Entre 8 e 10 pessoas: 10 serviços </li>
                            <li>Entre 10 e 12 pessoas: 12 serviços </li>
                            <li>Entre 12 e 14 pessoas: 14 serviços</li>
                        </ul>
                    </div>
            </Accordion>
            </div>
        )
    }
}

export default guiaCompras;