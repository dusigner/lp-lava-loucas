import React, { Component, Fragment } from 'react';
import { Link } from 'render';

import Slider from "react-slick";
import MediaQuery from 'react-responsive';
import { ButtonsControlSlides, Button } from 'brastemp.components';
import { DataLayer, FormatDateString, ActivatePeriod } from "brastemp.utils";

const Desktop = props => <MediaQuery {...props} minWidth={769} />;
const Mobile = props => <MediaQuery {...props} maxWidth={768} />;
class HeroCarousel extends Component {
    constructor(props) {
        super(props);
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
        this.state = {
            activeSlide: 0
        };
    }

    prev() {
        let { querySchema = {} } = this.props;
        const { dataLakePrev } = querySchema.config;
        this.slider.slickPrev();
        DataLayer.method(dataLakePrev.event, dataLakePrev.category, dataLakePrev.action, dataLakePrev.label);
    }

    next() {
        let { querySchema = {} } = this.props;
        const { dataLakeNext } = querySchema.config;
        this.slider.slickNext();
        DataLayer.method(dataLakeNext.event, dataLakeNext.category, dataLakeNext.action, dataLakeNext.label);
    }
    componentDidMount() {
        console.log("Hero");
        console.log(this.props);
    }



    render() {

        // return(
        //     <p>TESTE</p>
        // )

        let { querySchema = null, callback } = this.props;

        if (querySchema != null) {
            const { banners, config = null } = querySchema;
            const { autoplaySpeed = false, activeControlBanners = false, autoplay = false, activeTarget = false, pauseOnHover = false } = config;
            const { activeSlide } = this.state;

            var settings = {
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: autoplay,
                arrows: false,
                autoplaySpeed: autoplaySpeed,
                pauseOnHover: pauseOnHover,
                beforeChange: (current, next) => this.setState({ activeSlide: next }),
            };

            const array = banners.filter(item => item.activeBanner && ActivatePeriod.method(item)).map((item, index) => {

                const { configStyleButtonDesk = null, configStyleButtonMob = null } = item;

                let styleDesk = null, styleMob = null, isButtonDesk = false, isButtonMob = false;

                if (configStyleButtonDesk != null && configStyleButtonDesk.isButton) {

                    styleDesk = {
                        position: 'absolute',
                        right: configStyleButtonDesk.right + "%",
                        bottom: configStyleButtonDesk.bottom + "%",
                        width: configStyleButtonDesk.width + 'px',
                        height: configStyleButtonDesk.height + 'px',
                        fontSize: configStyleButtonDesk.fontSize + 'px',
                        letterSpacing: configStyleButtonDesk.letterSpacing + 'px',
                    };

                    isButtonDesk = true;
                }

                if (configStyleButtonMob != null && configStyleButtonMob.isButton) {

                    styleMob = {
                        position: 'absolute',
                        right: configStyleButtonMob.right + "%",
                        bottom: configStyleButtonMob.bottom + "%",
                        width: configStyleButtonMob.width + 'px',
                        height: configStyleButtonMob.height + 'px',
                        fontSize: configStyleButtonMob.fontSize + 'px',
                        letterSpacing: configStyleButtonMob.letterSpacing + 'px',
                    };

                    isButtonMob = true;
                }

                return (
                    <div key={index}>
                        <Link className={`hero-carousel-item ${item.isBorder ? "after-border" : null}`}
                            to={item.externalRoute && item.route != undefined ? item.route : null}
                            page={!item.externalRoute ? item.route : null}
                            params={!item.externalRoute ? item.params : null}
                            onMouseDown={() => { DataLayer.method(item.dataLake.event, item.dataLake.action, item.dataLake.category, item.dataLake.label) }}
                            target={item.target}>
                            {item.isTitle ? <div className="hero-carousel-caption hero-caption-static">
                                <div className="hero-carousel-caption-content">
                                    <h1 className="hero-carousel-caption-title">
                                        <span>{item.title}</span>
                                        <span className="brand">&nbsp;{item.titleBrand}</span>
                                    </h1>
                                </div>
                            </div> : <Fragment />}
                            <Desktop>
                                <img id={item.id}
                                    alt={item.alt}
                                    src={item.desktop}
                                    className="image-banner"
                                    onClick={e => item.anchor && callback(e, item.anchor)}
                                />
                                {isButtonDesk ? <Button style={styleDesk}
                                    title={configStyleButtonDesk.buttonTitle}
                                    externalLink={item.externalRoute}
                                    url={item.externalRoute ? item.route : null}
                                    page={!item.externalRoute ? item.route : null}
                                    params={!item.externalRoute ? item.params : null}
                                    onClick={() => { DataLayer.method(item.dataLake.event, item.dataLake.action, item.dataLake.category, item.dataLake.label) }} /> : <Fragment />}
                            </Desktop>
                            <Mobile>
                                <img id={item.id}
                                    alt={item.alt}
                                    src={item.mobile}
                                    className="image-banner"
                                    onClick={e => item.anchor && callback(e, item.anchor)}
                                />
                                {isButtonMob ? <Button style={styleMob}
                                    title={configStyleButtonMob.buttonTitle}
                                    externalLink={item.externalRoute}
                                    url={item.externalRoute ? item.route : null}
                                    page={!item.externalRoute ? item.route : null}
                                    params={!item.externalRoute ? item.params : null}
                                    onClick={() => { DataLayer.method(item.dataLake.event, item.dataLake.action, item.dataLake.category, item.dataLake.label) }} /> : <Fragment />}
                            </Mobile>
                        </Link>
                    </div>
                );
            });

            return (
                <section className="hero-carousel">
                    <Slider ref={slider => (this.slider = slider)} {...settings}>
                        {array}
                    </Slider>
                    {querySchema.banners.length > 1 && activeControlBanners ?
                        <div className="box-buttons">
                            <ButtonsControlSlides activeSlide={activeSlide}
                                totalSlide={array.length}
                                prevClick={() => this.prev()}
                                nextClick={() => this.next()}
                                activeTarget={activeTarget}
                                autoplay={autoplay} />
                        </div>
                        : <Fragment />}
                </section>
            );
        } else {
            return <Fragment />;
        }
    }
}

HeroCarousel.getSchema = (props) => {
    return {
        title: 'Hero Carousel',
        description: 'Configuração da HeroCarousel através do store front',
        type: 'object',
        properties: {
            querySchema: {
                title: 'querySchemaTitle',
                description: 'querySchemaDescription',
                type: 'object',
                properties: {
                    banners: {
                        items: {
                            // tslint:disable-line
                            properties: {
                                // tslint:disable-line
                                activeBanner: {
                                    title: 'Exibir Banner',
                                    type: 'boolean',
                                    default: true
                                },
                                activeDtInit: {
                                    title: 'Exibir Banner apartir de uma data',
                                    type: 'boolean',
                                    default: false
                                },
                                dtInit: {
                                    default: FormatDateString.method(new Date()),
                                    title: 'Data Inícial padrão ( dd/mm/yyyy )',
                                    type: 'string',
                                },
                                activeDtEnd: {
                                    title: 'Ocultar Banner apartir de uma data',
                                    type: 'boolean',
                                    default: false
                                },
                                dtEnd: {
                                    default: FormatDateString.method(new Date()),
                                    title: 'Data Final padrão ( dd/mm/yyyy )',
                                    type: 'string',
                                },
                                id: {
                                    default: 'image-banner-id-default',
                                    title: 'Banner id',
                                    type: 'string',
                                },
                                alt: {
                                    default: 'image-banner-alt-default',
                                    title: 'Banner image alt',
                                    type: 'string',
                                },
                                description: {
                                    default: 'banner-description-default',
                                    title: 'Banner descrição',
                                    type: 'string',
                                },
                                desktop: {
                                    default: 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/2018/09/heroHomeLojaDesktop.jpg',
                                    title: 'Url banner desktop',
                                    type: 'string',
                                },
                                mobile: {
                                    default: 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/2018/09/heroHomeLojaMobile.jpg',
                                    title: 'Url banner mobile',
                                    type: 'string',
                                },
                                target: {
                                    default: '_self',
                                    title: 'target ( _self = mesma aba / _blank = nova aba)',
                                    type: 'string',
                                },
                                externalRoute: {
                                    title: 'Rota externa',
                                    type: 'boolean',
                                    default: false
                                },
                                route: {
                                    default: "store/home",
                                    title: 'Rota ou url redirect',
                                    type: 'string',
                                },
                                anchor: {
                                    default: "",
                                    title: "Âncora",
                                    type: "string"
                                },
                                params: {
                                    title: 'Parametros',
                                    type: 'object',
                                    properties: {
                                        department: {
                                            default: "",
                                            title: 'Inserir o departamento',
                                            type: 'string',
                                        }
                                    }
                                },
                                isBorder: {
                                    title: 'Exibir bordas',
                                    type: 'boolean',
                                    default: false
                                },
                                isTitle: {
                                    title: 'Exibir Título',
                                    type: 'boolean',
                                    default: false
                                },
                                title: {
                                    default: "banner-title",
                                    title: 'Banner Título',
                                    type: 'string',
                                },
                                titleBrand: {
                                    default: "banner-subtitulo",
                                    title: 'Banner Subtítulo ',
                                    type: 'string',
                                },
                                dataLake: {
                                    title: 'Data Lake',
                                    type: 'object',
                                    properties: {
                                        event: {
                                            default: 'generic-event-trigger',
                                            title: 'Evento data lake',
                                            type: 'string',
                                        },
                                        category: {
                                            default: "hero-carousel-banner",
                                            title: 'Categoria data lake',
                                            type: 'string',
                                        },
                                        action: {
                                            default: 'Click',
                                            title: 'Action data lake',
                                            type: 'string',
                                        },
                                        label: {
                                            default: "",
                                            title: 'Label data lake',
                                            type: 'string',
                                        },

                                    }
                                },
                                configStyleButtonDesk: {
                                    title: 'Configuração style button desk',
                                    type: 'object',
                                    properties: {
                                        isButton: {
                                            title: 'Exibir Botão Desktop',
                                            type: 'boolean',
                                            default: false
                                        },
                                        right: {
                                            default: 35,
                                            title: 'Espaçamento a direita desktop',
                                            type: 'number',
                                        },
                                        bottom: {
                                            default: 20,
                                            title: 'Espaçamento inferior desktop',
                                            type: 'number',
                                        },
                                        buttonTitle: {
                                            default: "Botão Click",
                                            title: 'Botão Título',
                                            type: 'string',
                                        },
                                        width: {
                                            default: 140,
                                            title: 'Largura',
                                            type: 'number',
                                        },
                                        height: {
                                            default: 50,
                                            title: 'Altura',
                                            type: 'number',
                                        },
                                        fontSize: {
                                            default: 14,
                                            title: 'Tamanho Font',
                                            type: 'number',
                                        },
                                        letterSpacing: {
                                            default: 1,
                                            title: 'Espaçamento Font',
                                            type: 'number',
                                        },
                                    }
                                },
                                configStyleButtonMob: {
                                    title: 'Configuração style button mob',
                                    type: 'object',
                                    properties: {
                                        isButton: {
                                            title: 'Exibir Botão Mobile',
                                            type: 'boolean',
                                            default: false
                                        },
                                        right: {
                                            default: 35,
                                            title: 'Espaçamento a direita mobile',
                                            type: 'number',
                                        },
                                        bottom: {
                                            default: 20,
                                            title: 'Espaçamento inferior mobile',
                                            type: 'number',
                                        },
                                        buttonTitle: {
                                            default: "Botão Click",
                                            title: 'Botão Título',
                                            type: 'string',
                                        },
                                        width: {
                                            default: 140,
                                            title: 'Largura',
                                            type: 'number',
                                        },
                                        height: {
                                            default: 50,
                                            title: 'Altura',
                                            type: 'number',
                                        },
                                        fontSize: {
                                            default: 14,
                                            title: 'Tamanho Font',
                                            type: 'number',
                                        },
                                        letterSpacing: {
                                            default: 1,
                                            title: 'Espaçamento Font',
                                            type: 'number',
                                        },
                                    }
                                },
                            },
                            title: 'banner-default',
                            type: 'object',
                        },
                        minItems: 1,
                        title: 'Lista de Banners Hero Carousel',
                        type: 'array',
                    },
                    config: {
                        title: 'Configurações',
                        type: 'object',
                        properties: {
                            autoplay: {
                                default: true,
                                title: 'Troca automática de banners',
                                type: 'boolean',
                            },
                            activeControlBanners: {
                                default: true,
                                title: 'Mostrar Botões',
                                type: 'boolean'
                            },
                            activeTarget: {
                                default: true,
                                title: 'Mostrar barra de carregamento',
                                type: 'boolean'
                            },
                            pauseOnHover: {
                                default: false,
                                title: 'Parrar ao passar o mouse',
                                type: 'boolean'
                            },
                            autoplaySpeed: {
                                default: 6000,
                                title: 'milissegundos para troca automática',
                                type: 'number',
                            },
                            dataLakePrev: {
                                title: 'Data lake Botão prev',
                                type: 'object',
                                properties: {
                                    event: {
                                        default: 'generic-event-trigger',
                                        title: 'Evento data lake prev',
                                        type: 'string',
                                    },
                                    category: {
                                        default: "botao-prev-banner",
                                        title: 'Categoria data lake prev',
                                        type: 'string',
                                    },
                                    action: {
                                        default: 'Click Prev',
                                        title: 'Action data lake prev',
                                        type: 'string',
                                    },
                                    label: {
                                        default: "",
                                        title: 'Label do data lake prev',
                                        type: 'string',
                                    },
                                },
                            },
                            dataLakeNext: {
                                title: 'Data Lake Next',
                                type: 'object',
                                properties: {
                                    event: {
                                        default: 'generic-event-trigger',
                                        title: 'Evento data lake next',
                                        type: 'string',
                                    },
                                    category: {
                                        default: "botao-next-banner",
                                        title: 'Categoria data lake next',
                                        type: 'string',
                                    },
                                    action: {
                                        default: 'Click Next',
                                        title: 'Action data lake next',
                                        type: 'string',
                                    },
                                    label: {
                                        default: "",
                                        title: 'Label do data lake next',
                                        type: 'string',
                                    },
                                }
                            }
                        }
                    },
                }
            }
        }
    };
};

export default HeroCarousel;
