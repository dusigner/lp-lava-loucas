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
                
                </div>
        )
    }
}
export default AssistenciaTecnica;