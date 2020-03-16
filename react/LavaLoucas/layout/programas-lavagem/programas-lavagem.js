import React from 'react';
import { Picture } from 'react-responsive-picture';

//libs
import Slider from "react-slick";

//components
import Title from '../../components/title/title';

//imgs
const imgSmallPng = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,w_563/2020-lava-loucas/desatqueBLF14AR__1_xhzw0v.png';
const imgMediumPng = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,w_1144/2020-lava-loucas/desatqueBLF14AR__1_xhzw0v.png';
const imgLargerPng = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,w_1144/2020-lava-loucas/desatqueBLF14AR__1_xhzw0v.png';

const imgSmallWebp = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,w_563/2020-lava-loucas/desatqueBLF14AR__1_xhzw0v.webp';
const imgMediumWebp = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,w_1144/2020-lava-loucas/desatqueBLF14AR__1_xhzw0v.webp';
const imgLargerWebp = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,w_1144/2020-lava-loucas/desatqueBLF14AR__1_xhzw0v.webp';

class programasLavagem extends React.Component {
 
    render() {

        const settings__lavagem = {
			dots: false,
			arrow: false,
			autoplay: false,
			infinite: false,
			slidesToShow: 3,
			centerMode: true,
            centerPadding: "20px",
			responsive: [
				{
					breakpoint: 767,
					settings: {
						dots: true,
                        arrow: false,
                        autoplay: false,
                        infinite: false,
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: "20px",
					}
				}
			]
		};

        return (
            <div id="programas-lavagem" className="programas-lavagem section">

                <Slider className="slider slider__lavagem" {...settings__lavagem}>
                    <div className="slide__design" style={{ width: 100 }}>
                        <div className="slide__design-icons">
                            <svg width="58" height="67" viewBox="0 0 58 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M55.8127 23.7838H2.31384C1.50867 23.7838 0.792969 23.1561 0.792969 22.2593V15.6235C0.792969 7.3736 7.50269 0.737793 15.6438 0.737793H42.3038C50.5344 0.737793 57.1547 7.46327 57.1547 15.6235V22.2593C57.3336 23.1561 56.6179 23.7838 55.8127 23.7838ZM3.83471 20.8246H54.3813V15.6235C54.3813 9.07738 49.0135 3.697 42.4827 3.697H15.7333C9.20249 3.697 3.83471 9.07738 3.83471 15.6235V20.8246Z" fill="white"/>
                                <path d="M46.329 66.4681C45.5238 66.4681 44.8081 65.8404 44.8081 64.9436V56.1557C44.8081 55.3486 45.4344 54.6312 46.329 54.6312C47.2236 54.6312 47.8499 55.2589 47.8499 56.1557V64.9436C47.7604 65.7507 47.1342 66.4681 46.329 66.4681Z" fill="white"/>
                                <path d="M46.329 49.2513C45.5238 49.2513 44.8081 48.6236 44.8081 47.7269V39.746C44.8081 38.9389 45.4343 38.2216 46.329 38.2216C47.2236 38.2216 47.7604 38.9389 47.7604 39.746V47.7269C47.7604 48.534 47.1341 49.2513 46.329 49.2513Z" fill="white"/>
                                <path d="M34.7006 58.8461C33.8954 58.8461 33.1797 58.2184 33.1797 57.3217V48.5337C33.1797 47.7267 33.8059 47.0093 34.7006 47.0093C35.5952 47.0093 36.2214 47.637 36.2214 48.5337V57.3217C36.132 58.2184 35.5057 58.8461 34.7006 58.8461Z" fill="white"/>
                                <path d="M34.7006 42.3464C33.8954 42.3464 33.1797 41.7186 33.1797 40.8219V32.9307C33.1797 32.1236 33.8059 31.4062 34.7006 31.4062C35.5952 31.4062 36.2214 32.034 36.2214 32.9307V40.9116C36.132 41.7186 35.5057 42.3464 34.7006 42.3464Z" fill="white"/>
                                <path d="M23.4281 66.4681C22.6229 66.4681 21.9072 65.8404 21.9072 64.9436V56.1557C21.9072 55.3486 22.5335 54.6312 23.4281 54.6312C24.2333 54.6312 24.949 55.2589 24.949 56.1557V64.9436C24.949 65.7507 24.3227 66.4681 23.4281 66.4681Z" fill="white"/>
                                <path d="M23.4281 49.2513C22.6229 49.2513 21.9072 48.6236 21.9072 47.7269V39.746C21.9072 38.9389 22.5335 38.2216 23.4281 38.2216C24.2333 38.2216 24.949 38.8493 24.949 39.746V47.7269C24.949 48.534 24.3227 49.2513 23.4281 49.2513Z" fill="white"/>
                                <path d="M11.8871 58.8461C11.0819 58.8461 10.3662 58.2184 10.3662 57.3217V48.5337C10.3662 47.7267 10.9924 47.0093 11.8871 47.0093C12.7817 47.0093 13.4079 47.637 13.4079 48.5337V57.3217C13.3185 58.2184 12.6922 58.8461 11.8871 58.8461Z" fill="white"/>
                                <path d="M11.8871 42.3464C11.0819 42.3464 10.3662 41.7186 10.3662 40.8219V32.9307C10.3662 32.1236 10.9924 31.4062 11.8871 31.4062C12.7817 31.4062 13.4079 32.034 13.4079 32.9307V40.9116C13.3185 41.7186 12.6922 42.3464 11.8871 42.3464Z" fill="white"/>
                            </svg>
                        </div>


                        <p>A lava-louças faz todo o trabalho para que você aproveite os momentos que realmente importam. Passar mais tempo com a família e ter a certeza de que a máquina fará todo o trabalho com uma performance impecável.</p>
                    </div>
                    <div className="slide__design" style={{ width: 100 }}>
                       
                        <p>A lava-louças faz todo o trabalho para que você aproveite os momentos que realmente importam. Passar mais tempo com a família e ter a certeza de que a máquina fará todo o trabalho com uma performance impecável.</p>
                    </div>
                    <div className="slide__design" style={{ width: 100 }}>
             
                        <p>A lava-louças faz todo o trabalho para que você aproveite os momentos que realmente importam. Passar mais tempo com a família e ter a certeza de que a máquina fará todo o trabalho com uma performance impecável.</p>
                    </div>
                    <div className="slide__design" style={{ width: 100 }}>
            
                        <p>A lava-louças faz todo o trabalho para que você aproveite os momentos que realmente importam. Passar mais tempo com a família e ter a certeza de que a máquina fará todo o trabalho com uma performance impecável.</p>
                    </div>
                    <div className="slide__design" style={{ width: 90 }}>
                   
                        <p>A lava-louças Brastemp possui até 5 ciclos para suprir a todas as suas necessidades, além de economizar água e energia para sua casa. Ao selecionar o ciclo correto de lavagem para cada necessidade é possível economizar até 6x mais de água do que a lavagem manual.</p>
                    </div>
                    <div className="slide__design" style={{ width: 100 }}>
            
                        <p>Precisa de um texto pra esse beneficio. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </Slider>
            </div>
        )
    }
}
export default programasLavagem;