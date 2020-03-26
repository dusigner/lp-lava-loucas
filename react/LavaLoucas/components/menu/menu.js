import React, {Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import "./menu.css";

class Menu extends React.Component {

    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);

        const target = document.querySelector(".target-lp");
        const links = document.querySelectorAll(".menu-lp .links");
        const activeLp = document.querySelectorAll(".active-lp")
        const colors = ["#F08B1D"];
        
        function mouseenterFunc() {

            if (!this.parentNode.classList.contains("active-lp")) {
                for (let i = 0; i < links.length; i++) {
                    if (links[i].parentNode.classList.contains("active-lp")) {
                        links[i].parentNode.classList.remove("active-lp");
                    }
            }
        
            this.parentNode.classList.add("active-lp");
        
            const width = this.getBoundingClientRect().width;
            const height = this.getBoundingClientRect().height;
            const left = this.getBoundingClientRect().left + window.pageXOffset;
            const color = colors[Math.floor(Math.random() * colors.length)];
        
            target.style.width = `${width}px`;
            target.style.height = `${height}px`;
            target.style.left = `${left}px`;
            target.style.borderColor = color;
            target.style.transform = "none";
            }
        }

        function mouseoutFunc() {
            this.parentNode.classList.remove("active-lp");
            target.style.width = `0`;
        }

        function mouseclickFunc(){
            this.classList.add("active");
        }
        
        for (let i = 0; i < links.length - 1; i++) {
            links[i].addEventListener("click", mouseclickFunc);
            links[i].addEventListener("mouseover", mouseenterFunc);
            links[i].addEventListener("mouseleave",  mouseoutFunc )
        }
        
        function resizeFunc() {
            const active = document.querySelector(".menu-lp a.active-lp");
        
            if (active) {
            const left = active.getBoundingClientRect().left + window.pageXOffset;
        
            target.style.left = `${left}px`;
            }
        }
        
        window.addEventListener("resize", resizeFunc);
          

    }
  
    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = () => {

        const links = document.querySelectorAll(".menu-lp .links");
        const sections = document.querySelectorAll('.section');

        function changeLinkState() {
            let index = sections.length;

            while(--index && window.scrollY + 55 < sections[index].offsetTop) {}
            
            links.forEach((link) => link.classList.remove('active'));
            links[index].classList.add('active');

            const menu = document.getElementsByClassName('menu-lp')[0];
            const active = document.querySelectorAll('nav ul li .active');
            const height = document.getElementsByClassName("design-performance")[0].clientHeight;
            //Scroll
            if(document.documentElement.scrollTop > height + 300) menu.scrollLeft = active[0].offsetLeft - 10;
            else menu.scrollLeft = active[0].offsetLeft - 10;

        }

        changeLinkState();
        window.addEventListener('scroll', changeLinkState);

    };

    render() {
        return (
            <div className="menu-lp">
                <nav id="nav">
                    <ul>
                        <li>
                            <AnchorLink offset={() => 100} href='#destaque' className="links">
                                <span>Destaque</span>
                            </AnchorLink>
                        </li>
                        <li>
                            <AnchorLink offset={() => 30} href='#design-performance' className="links">
                                <span>Design & Performance</span>
                            </AnchorLink>
                        </li>
                        <li>
                            <AnchorLink offset={() => 30} href='#beneficios' className="links">
                                <span>Benefícios</span>
                            </AnchorLink>
                        </li>
                        <li>
                            <AnchorLink offset={() => -10} href='#programas-lavagem' className="links">
                                <span>Programas de lavagem</span>
                            </AnchorLink>
                        </li>
                        <li>
                            <AnchorLink offset={() => 55} href='#guia-de-compra' className="links">
                                <span>Guia de compra</span>
                            </AnchorLink>
                        </li>
                        <li>
                            <AnchorLink offset={() => 55} href='#conhecas-os-modelos' className="links">
                                <span>Conheças os modelos</span>
                            </AnchorLink>
                        </li>
                        <li>
                            <AnchorLink offset={() => 55} href='#assistencia' className="links">
                                <span>Assistência técnica</span>
                            </AnchorLink>
                        </li>
                        <li>
                            <AnchorLink offset={() => 55} href='#eu-quero' className="links">
                                <span>Eu Quero</span>
                            </AnchorLink>
                        </li>
                    </ul>
                </nav>
                <span className="target-lp"></span>
            </div>
        )
    }
}
export default Menu;