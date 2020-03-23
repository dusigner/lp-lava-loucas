import React from 'react'
import ReactDOM from 'react-dom';

export default props => {
    
    var txtMobileRow1 = props.SetTxtMobileRow1,
        txtMobileRow2 = props.SetTxtMobileRow2,
        txtMobileRow3 = props.SetTxtMobileRow3 ,
        txtDesktopRow1 = props.SetTxtDesktopRow1,
        txtDesktopRow2 = props.SetTxtDesktopRow2,
        markupMobileLines,
        markupDesktopLines;

            /* Mobile */

        if (txtMobileRow1 != undefined && txtMobileRow2 != undefined && txtMobileRow3 != undefined){
            markupMobileLines = (
                <span className="mobile">
                    <h2>{txtMobileRow1}</h2>
                    <br></br>
                    <h2>{txtMobileRow2}</h2>
                    <br></br>
                    <h2>{txtMobileRow3}</h2>
                </span>
            )
        }else if (txtMobileRow1 != undefined && txtMobileRow2 != undefined && txtMobileRow3 == undefined) {
            markupMobileLines = (
                <span className="mobile">
                    <h2>{txtMobileRow1}</h2>
                    <br></br>
                    <h2>{txtMobileRow2}</h2>
                </span>
            )
        } else {
            markupMobileLines = (
                <span className="mobile">
                    <h2>{txtMobileRow1}</h2>
                </span>
            )
        }

        /* Desktop */

        if (txtDesktopRow1 != undefined && txtDesktopRow2 != undefined){
            markupDesktopLines = (
                <span className="desktop">
                    <h2>{txtDesktopRow1}</h2>
                    <br></br>
                    <h2>{txtDesktopRow2}</h2>
                </span>
            )
        }else {
            markupDesktopLines = (
                <span className="desktop">
                    <h2>{txtDesktopRow1}</h2>
                </span>
            )
        }
      
    
    return (
        <div className={`${props.setClass} title__wrap`}>
                { markupMobileLines }
                { markupDesktopLines }
        </div>
    )
}
