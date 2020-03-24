import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      <div 
        className="accordion"
        style={{
          background: isOpen ? '#fff' : '#fff',
          border: '1px solid #DADADA',
          padding: '16px 20px',
        }}
      >
        <div onClick={onClick} style={{ cursor: 'pointer' }}>
          {label}
          <div style={{ float: 'right' }}>
            {!isOpen && <span><svg width='18' height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8.62695L8.92687 0.999834L16.8537 8.62695" stroke="#DB532A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>}
            {isOpen && <span><svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.7769 1L8.7248 8.62712L1.67274 1" stroke="#DB532A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              background: '#F2F2F2',
              border: '1px solid #DADADA',
              margin: '16px -22px -17px',
              padding: '10px 20px',
              boxShadow: '0px 25px 30px rgba(0, 0, 0, 0.25)',
              position: "relative",
            }}
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;