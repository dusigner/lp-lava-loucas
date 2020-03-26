import React from 'react';
import { Picture } from 'react-responsive-picture';

//components
import Button from '../../components/button/button';
import Title from '../../components/title/title';

class AssistenciaTecnica extends React.Component {
 
    render() {


        return (
                <div id="assistencia" className="assistencia section">

                    <Title setClass="center" SetTxtMobileRow1="Assistência Técnica" SetTxtDesktopRow1="Assistência Técnica"/>

                    <div className="assistencia__grid">
                        <div className="assistencia__grid-box">
                            <Title setClass="left" SetTxtMobileRow1="Precisa de ajuda" SetTxtMobileRow2="especializada?" SetTxtDesktopRow1="Precisa de ajuda" SetTxtDesktopRow2="especializada?" />
                            <p>Consulte o Atendimento Brastemp. Temos as soluções para suas dúvidas e solicitações.</p>
                            <Button setClass="not_responsive" label="Saiba mais" />
                        </div>
                        <div className="assistencia__grid-box">
                            <Title setClass="left" SetTxtMobileRow1="Peças e acessórios" SetTxtDesktopRow1="Peças e acessórios" />
                            <p>Consulte o Atendimento Brastemp. Temos as soluções para suas dúvidas e solicitações.</p>
                            <Button setClass="not_responsive" label="Saiba mais" />
                        </div>
                        <div className="assistencia__grid-box">
                            <Title setClass="left" SetTxtMobileRow1="Instalação" SetTxtDesktopRow1="Instalação" />
                            <p>Consulte o Atendimento Brastemp. Temos as soluções para suas dúvidas e solicitações.</p>
                            <Button setClass="not_responsive" label="Saiba mais" />
                        </div>
                    </div>
                </div>
        )
    }
}
export default AssistenciaTecnica;