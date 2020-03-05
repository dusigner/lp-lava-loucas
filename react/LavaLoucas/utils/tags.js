export default class tagplan {
    constructor() {
        
        // Menu Principal de navegação

        var navMenu = document.querySelectorAll('.menu-edge .links');

        navMenu.forEach(element => {
            element.addEventListener('click', ()=>{
                dataLayer.push({
                    event: 'generic',                     
                    category: 'lavadora_edge',
                    action: 'menu_scroll',
                    label: element.href.split("#")[1]
                })
            })
        });

        // Design inovador Botões Pop-Ups

        var inovadorBtn = document.querySelectorAll('.wrap-buttons > span');

        inovadorBtn.forEach(element => {
            element.addEventListener('click', ()=>{
                dataLayer.push({
                    event: 'generic',                     
                    category: 'lavadora_edge',
                    action: 'painel_opções',
                    label: element.dataset.tag
                })
            })
        });

        // Veja mais Design Inovador

        var designInovador_seemore = document.querySelectorAll('#seeMore__performance')

        designInovador_seemore[0].addEventListener('click', ()=>{
            dataLayer.push({
                event: 'generic',                     
                category: 'lavadora_edge',
                action: 'veja_mais',
                label: 'performance_de_lavagem'
            })
        })

        // Performance de lavagem

        var performanceDeLavagemNav = document.querySelectorAll('.performance-de-lavagem_slider-nav__nav');

        performanceDeLavagemNav.forEach(element=>{
            element.addEventListener('click', ()=>{
                dataLayer.push({
                    event: 'generic',                     
                    category: 'lavadora_edge',
                    action: 'menu_performance_de_lavagem',
                    label: element.dataset.tag
                })
            })
        })

        var performanceArrow = document.querySelectorAll('.performance-de-lavagem_slider .slick-arrow');
        
        performanceArrow.forEach(element=>{
            element.addEventListener('click',()=>{
                setTimeout(()=>{ 
                    var performanceCurrentSlider = document.querySelectorAll('.performance-de-lavagem_slider .slick-current .performance-de-lavagem_single');
                    dataLayer.push({
                        event: 'generic',                     
                        category: 'lavadora_edge',
                        action: 'botao_performace_de_lavagem',
                        label: performanceCurrentSlider[0].dataset.tag
                    })
                }, 300);
            })
        })

        var performanceTiraMancha = document.querySelectorAll('.performance-de-lavagem .not_responsive')
        
        performanceTiraMancha[0].addEventListener('click',()=>{
            dataLayer.push({
                event: 'generic',                     
                category: 'lavadora_edge',
                action: 'abrir_modal_lista_de_manchas',
                label: 'botao_performance_de_lavagem'
            })

        })

        
        
        
        
        

    }
}