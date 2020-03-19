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
			slidesToShow: 1,
			centerMode: true,
            centerPadding: "20px",
            rows: 2,
            slidesPerRow: 4,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						dots: true,
                        arrow: true,
                        autoplay: false,
                        infinite: false,
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: "40px",
                        rows: 1,
                        slidesPerRow: 1,
					}
				}
			]
		};

        return (
            <div id="programas-lavagem" className="programas-lavagem section">

                <Title setClass="center" SetTxtMobileRow1="Programas de" SetTxtMobileRow2="lavagem" SetTxtDesktopRow1="Programas de lavagem"/>

                <Slider className="slider slider__lavagem" {...settings__lavagem}>
                    <div className="slide__lavagem" style={{ width: 100 }}>
                        <div className="slide__lavagem-flex">
                            <div className="slide__lavagem-icons">
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
                            <div className="slide__lavagem-text">
                                <h3>Acquaspray</h3>
                                <p>Com a função Acqua Spray, você pode acumular a louça e lavar de uma vez só. Isso porque ela libera jatos de água fazendo uma pré-lavagem que remove a sujeira e evita odores.</p>
                            </div>
                        </div>
                    </div>

                    <div className="slide__lavagem" style={{ width: 100 }}>
                        <div className="slide__lavagem-flex">
                            <div className="slide__lavagem-icons">
                                <svg width="80" height="48" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M66.6052 16.1641C65.6783 16.1641 65.0042 15.4206 65.0042 14.5945V12.9423C65.0042 11.2074 63.5718 9.72038 61.7181 9.72038H18.7449C16.9755 9.72038 15.4588 11.1248 15.4588 12.9423V14.5119C15.4588 15.4206 14.7004 16.0815 13.8578 16.0815C12.9309 16.0815 12.2568 15.338 12.2568 14.5119V12.8596C12.2568 9.30732 15.206 6.41589 18.8292 6.41589H61.8023C65.4255 6.41589 68.3747 9.30732 68.3747 12.8596V14.5119C68.2062 15.4206 67.5321 16.1641 66.6052 16.1641Z" fill="white"/>
                                    <path d="M57.0001 47.6393H23.5485C21.6947 47.6393 20.0095 46.8958 18.5771 45.4913C13.3529 40.3694 12.5945 26.4906 12.5103 21.699H2.0619C1.21929 21.699 0.460938 20.9555 0.460938 20.0468C0.460938 19.1381 1.21929 18.4772 2.0619 18.4772H14.1112C14.5325 18.4772 14.9538 18.6424 15.2909 18.9728C15.6279 19.2207 15.7964 19.6337 15.7964 20.0468C15.7964 25.0861 16.6391 38.8824 20.9364 43.1782C21.6947 44.0043 22.6216 44.3348 23.5485 44.3348H57.0001C58.264 44.3348 59.4436 43.8391 60.4548 42.8478C64.9206 38.3041 65.5104 24.9209 65.3419 20.1294C65.3419 19.7164 65.5104 19.3033 65.7632 18.9728C66.1003 18.6424 66.5216 18.4772 66.9429 18.4772H78.3181C79.245 18.4772 79.9191 19.2207 79.9191 20.0468C79.9191 20.9555 79.1607 21.6164 78.3181 21.6164H68.6281C68.6281 26.3253 68.1225 39.6259 62.8141 45.0783C61.1289 46.7305 59.1909 47.6393 57.0001 47.6393Z" fill="white"/>
                                    <path d="M47.9847 3.52461H32.3964C31.5538 3.52461 30.7954 2.7811 30.7954 1.87237C30.7954 1.04624 31.5538 0.302734 32.3964 0.302734H47.9847C48.9115 0.302734 49.5856 1.04624 49.5856 1.87237C49.6699 2.7811 48.9115 3.52461 47.9847 3.52461Z" fill="white"/>
                                </svg>
                            </div>
                            <div className="slide__lavagem-text">
                                <h3>Pesado</h3>
                                <p>Indicado para remover as sujeiras mais difíceis! Lava com eficiência até panelas e travessas, sem ser necessária a pré-lavagem.</p>
                            </div>
                        </div>
                    </div>

                    <div className="slide__lavagem" style={{ width: 100 }}>
                        <div className="slide__lavagem-flex">
                            <div className="slide__lavagem-icons">
                                <svg width="45" height="57" viewBox="0 0 45 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.1133 37.9211C4.55233 37.9211 0.0390625 33.3096 0.0390625 27.5242V2.45413C0.0390625 1.44798 0.764409 0.693359 1.73154 0.693359H18.4145C19.3816 0.693359 20.107 1.44798 20.107 2.45413V27.5242C20.107 33.3096 15.5937 37.9211 10.1133 37.9211ZM3.42401 4.2149V27.5242C3.42401 31.3811 6.40599 34.4834 10.1133 34.4834C13.8207 34.4834 16.8026 31.3811 16.8026 27.5242V4.2149H3.42401Z" fill="white"/>
                                    <path d="M33.1631 46.5574C26.9573 46.5574 21.8799 41.275 21.8799 34.8189V24.5896C21.8799 23.5835 22.6052 22.8289 23.5724 22.8289H42.7538C43.7209 22.8289 44.4462 23.5835 44.4462 24.5896V34.735C44.3656 41.275 39.3688 46.5574 33.1631 46.5574ZM25.2648 26.3504V34.735C25.2648 39.2627 28.811 42.952 33.1631 42.952C37.5151 42.952 41.0613 39.2627 41.0613 34.735V26.3504H25.2648Z" fill="white"/>
                                    <path d="M10.1139 56.9547C9.14673 56.9547 8.42139 56.2001 8.42139 55.1939V37.4185C8.42139 36.4123 9.14673 35.6577 10.1139 35.6577C11.081 35.6577 11.8063 36.4123 11.8063 37.4185V55.1939C11.8063 56.1162 11.0004 56.9547 10.1139 56.9547Z" fill="white"/>
                                    <path d="M15.9167 56.9545H4.31113C3.344 56.9545 2.61865 56.1999 2.61865 55.1938C2.61865 54.1876 3.344 53.433 4.31113 53.433H15.9167C16.8838 53.433 17.6092 54.1876 17.6092 55.1938C17.6092 56.1161 16.8032 56.9545 15.9167 56.9545Z" fill="white"/>
                                    <path d="M33.6466 56.9546C32.6794 56.9546 31.9541 56.2 31.9541 55.1938V44.7969C31.9541 43.7907 32.6794 43.0361 33.6466 43.0361C34.6137 43.0361 35.3391 43.7907 35.3391 44.7969V55.1938C35.3391 56.1162 34.5331 56.9546 33.6466 56.9546Z" fill="white"/>
                                    <path d="M39.4494 56.9545H27.8438C26.8767 56.9545 26.1514 56.1999 26.1514 55.1938C26.1514 54.1876 26.8767 53.433 27.8438 53.433H39.4494C40.3359 53.433 41.1419 54.1876 41.1419 55.1938C41.1419 56.1161 40.3359 56.9545 39.4494 56.9545Z" fill="white"/>
                                </svg>
                            </div>
                            <div className="slide__lavagem-text">
                                <h3>Delicado</h3>
                                <p>Ciclo que garante o maior cuidado com as peças delicadas como taças e cristais, mas mantendo a performance para uma lavagem impecável.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="slide__lavagem" style={{ width: 100 }}>
                        <div className="slide__lavagem-flex">
                            <div className="slide__lavagem-icons">
                                <svg width="77" height="46" viewBox="0 0 77 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M75.4308 23.8936C74.9695 23.8936 74.5851 23.663 74.3545 23.2786C67.0514 10.5943 53.3678 2.75314 38.8385 2.75314C24.2324 2.75314 10.6256 10.5943 3.32255 23.2786C2.93818 23.8936 2.16944 24.1242 1.55444 23.7399C0.939448 23.3555 0.708814 22.5867 1.09319 21.9717C8.8575 8.51871 23.3099 0.139404 38.8385 0.139404C54.3672 0.139404 68.8196 8.51871 76.5839 21.9717C76.9683 22.5867 76.7376 23.3555 76.1226 23.7399C75.892 23.8936 75.6614 23.8936 75.4308 23.8936Z" fill="white"/>
                                    <path d="M64.8994 29.9663C64.4382 29.9663 64.0538 29.7357 63.8232 29.3513C58.6726 20.4338 49.0633 14.8989 38.839 14.8989C28.6147 14.8989 19.0054 20.4338 13.8548 29.3513C13.4704 29.9663 12.7017 30.1969 12.0867 29.8125C11.4717 29.4282 11.241 28.6594 11.6254 28.0444C17.2372 18.3582 27.6922 12.2852 38.839 12.2852C49.9858 12.2852 60.4407 18.2814 66.0525 28.0444C66.4369 28.6594 66.2063 29.4282 65.5913 29.8125C65.3606 29.9663 65.13 29.9663 64.8994 29.9663Z" fill="white"/>
                                    <path d="M38.7611 45.0339C38.5305 45.0339 38.2998 44.957 38.1461 44.8802L23.6937 36.5777C23.3862 36.424 23.1556 36.1165 23.0787 35.809C23.0018 35.5015 23.0018 35.1171 23.2324 34.8096C26.4612 29.2747 32.3805 25.8153 38.7611 25.8153C45.1417 25.8153 51.061 29.2747 54.2897 34.8096C54.4435 35.1171 54.5203 35.4246 54.4435 35.809C54.3666 36.1165 54.136 36.424 53.8285 36.5777L39.3761 44.8802C39.2223 45.0339 38.9917 45.0339 38.7611 45.0339ZM26.1537 35.0402L38.7611 42.3433L51.3685 35.0402C48.5241 30.889 43.7579 28.429 38.7611 28.429C33.7642 28.429 28.998 30.889 26.1537 35.0402Z" fill="white"/>
                                </svg>
                            </div>
                            <div className="slide__lavagem-text">
                                <h3>Smart sensor</h3>
                                <p>Tecnologia avançada que identifica o nível de sujeira e seleciona automaticamente o melhor ciclo de lavagem!</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide__lavagem" style={{ width: 90 }}>
                        <div className="slide__lavagem-flex">
                            <div className="slide__lavagem-icons">
                                <svg width="76" height="50" viewBox="0 0 76 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M50.9155 49.3346C37.1872 49.3346 26.0562 38.3388 26.0562 24.7773C26.0562 11.2158 37.1872 0.219971 50.9155 0.219971C64.6438 0.219971 75.7749 11.2158 75.7749 24.7773C75.7749 38.3388 64.6438 49.3346 50.9155 49.3346ZM50.9155 3.22549C38.894 3.22549 29.1728 12.9018 29.1728 24.704C29.1728 36.5795 38.9682 46.1825 50.9155 46.1825C62.9371 46.1825 72.6582 36.5061 72.6582 24.704C72.6582 12.9018 62.9371 3.22549 50.9155 3.22549Z" fill="white"/>
                                    <path d="M50.9157 26.3167C50.3963 26.3167 49.8768 26.0234 49.58 25.5836L41.343 11.4357C40.8977 10.7026 41.1946 9.74964 41.9366 9.3098C42.6787 8.86997 43.6434 9.16319 44.0887 9.89625L52.3256 24.0442C52.6967 24.7039 52.3998 25.6569 51.6578 26.0967C51.4352 26.2434 51.1383 26.3167 50.9157 26.3167Z" fill="white"/>
                                    <path d="M50.9155 26.3166C50.3961 26.3166 49.8766 26.0234 49.5798 25.5836C49.1346 24.8505 49.4314 23.8975 50.1735 23.4577L58.8557 18.473C59.5978 18.0331 60.5625 18.3263 61.0077 19.0594C61.4529 19.7924 61.1561 20.7454 60.414 21.1852L51.6576 26.0967C51.435 26.2433 51.1382 26.3166 50.9155 26.3166Z" fill="white"/>
                                    <path d="M50.9153 9.08993C50.0248 9.08993 49.3569 8.43018 49.3569 7.55052V5.71788C49.3569 4.83822 50.0248 4.17847 50.9153 4.17847C51.8058 4.17847 52.4736 4.83822 52.4736 5.71788V7.55052C52.4736 8.35687 51.7316 9.08993 50.9153 9.08993Z" fill="white"/>
                                    <path d="M50.9153 44.8629C50.0248 44.8629 49.3569 44.2032 49.3569 43.3235V41.4909C49.3569 40.6112 50.0248 39.9515 50.9153 39.9515C51.8058 39.9515 52.4736 40.6112 52.4736 41.4909V43.3235C52.4736 44.2032 51.7316 44.8629 50.9153 44.8629Z" fill="white"/>
                                    <path d="M33.6992 26.0235H31.844C30.9535 26.0235 30.2856 25.3637 30.2856 24.4841C30.2856 23.6044 30.9535 22.9446 31.844 22.9446H33.6992C34.5897 22.9446 35.2575 23.6044 35.2575 24.4841C35.2575 25.3637 34.5897 26.0235 33.6992 26.0235Z" fill="white"/>
                                    <path d="M69.913 26.0235H68.0579C67.1674 26.0235 66.4995 25.3637 66.4995 24.4841C66.4995 23.6044 67.1674 22.9446 68.0579 22.9446H69.913C70.8035 22.9446 71.4714 23.6044 71.4714 24.4841C71.4714 25.3637 70.8035 26.0235 69.913 26.0235Z" fill="white"/>
                                    <path d="M23.1622 12.7552H6.46558C5.57509 12.7552 4.90723 12.0955 4.90723 11.2158C4.90723 10.3361 5.57509 9.67639 6.46558 9.67639H23.1622C24.0527 9.67639 24.7205 10.3361 24.7205 11.2158C24.7205 12.0222 24.0527 12.7552 23.1622 12.7552Z" fill="white"/>
                                    <path d="M19.0064 27.1964H2.30981C1.41933 27.1964 0.751465 26.5367 0.751465 25.657C0.751465 24.7774 1.41933 24.1176 2.30981 24.1176H19.0064C19.8969 24.1176 20.5648 24.7774 20.5648 25.657C20.5648 26.5367 19.8969 27.1964 19.0064 27.1964Z" fill="white"/>
                                    <path d="M23.1622 39.3651H6.46558C5.57509 39.3651 4.90723 38.7053 4.90723 37.8257C4.90723 36.946 5.57509 36.2863 6.46558 36.2863H23.1622C24.0527 36.2863 24.7205 36.946 24.7205 37.8257C24.7205 38.7053 24.0527 39.3651 23.1622 39.3651Z" fill="white"/>
                                </svg>
                            </div>
                            <div className="slide__lavagem-text">
                                <h3>Rápido</h3>
                                <p>Com a função Acqua Spray, você pode acumular a louça e lavar de uma vez só. Isso porque ela libera jatos de água fazendo uma pré-lavagem que remove a sujeira e evita odores.</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide__lavagem" style={{ width: 100 }}>
                        <div className="slide__lavagem-flex">
                            <div className="slide__lavagem-icons">
                                <svg width="30" height="55" viewBox="0 0 30 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.2737 49.0655C15.0592 49.0655 14.8448 48.9949 14.7018 48.9243C6.05205 43.9811 0.619141 34.7303 0.619141 24.9145C0.619141 15.0281 5.98057 5.84792 14.7018 0.904738C15.0592 0.692887 15.4881 0.692887 15.9171 0.904738C24.5668 5.84792 29.9997 15.0987 29.9997 24.9145C29.9997 34.8009 24.6383 43.9811 15.9171 48.9243C15.7026 48.9949 15.4881 49.0655 15.2737 49.0655ZM15.2737 3.2351C7.69622 7.8252 2.97816 16.0874 2.97816 24.9145C2.97816 33.7416 7.69622 41.9332 15.2737 46.5939C22.8512 42.0038 27.5692 33.7416 27.5692 24.9145C27.5692 16.0874 22.8512 7.8252 15.2737 3.2351Z" fill="white"/>
                                    <path d="M15.2733 54.3617C14.63 54.3617 14.0581 53.8674 14.0581 53.1612V30.7757C14.0581 30.1401 14.5585 29.5752 15.2733 29.5752C15.9882 29.5752 16.4886 30.0695 16.4886 30.7757V53.1612C16.4171 53.7968 15.9167 54.3617 15.2733 54.3617Z" fill="white"/>
                                </svg>
                            </div>
                            <div className="slide__lavagem-text">
                                <h3>Econômico</h3>
                                <p>Indicado para remover as sujeiras mais difíceis! Lava com eficiência até panelas e travessas, sem ser necessária a pré-lavagem.</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide__lavagem" style={{ width: 100 }}>
                        <div className="slide__lavagem-flex">
                            <div className="slide__lavagem-icons">
                                <svg width="79" height="53" viewBox="0 0 79 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.797 53C12.1917 53 0.349609 41.073 0.349609 26.4605C0.349609 11.848 12.1917 0 26.797 0C41.4022 0 53.3233 11.848 53.3233 26.4605C53.3233 41.073 41.4022 53 26.797 53ZM26.797 3.31744C14.0075 3.31744 3.58645 13.7437 3.58645 26.4605C3.58645 39.1773 14.0075 49.6036 26.797 49.6036C39.5865 49.6036 49.9286 39.1773 49.9286 26.4605C49.9286 13.7437 39.5865 3.31744 26.797 3.31744Z" fill="white"/>
                                    <path d="M15.5077 39.9672C15.113 39.9672 14.6393 39.8092 14.3235 39.4933C10.8498 36.0179 8.95508 31.4367 8.95508 26.4605C8.95508 16.3502 17.1656 8.05664 27.3498 8.05664C32.2446 8.05664 36.8235 9.95232 40.2972 13.4277C40.9288 14.0596 40.9288 15.0864 40.2972 15.7973C39.6656 16.4292 38.6393 16.4292 37.9288 15.7973C35.0867 13.0328 31.3761 11.4531 27.3498 11.4531C19.0603 11.4531 12.2709 18.2459 12.2709 26.5395C12.2709 30.5678 13.8498 34.3592 16.6919 37.2027C17.3235 37.8346 17.3235 38.8614 16.6919 39.5723C16.3761 39.8092 15.9024 39.9672 15.5077 39.9672Z" fill="white"/>
                                    <path d="M72.6653 53H62.0075C58.8496 53 56.3232 50.4725 56.3232 47.313V18.2459C56.3232 17.2981 57.0338 16.5872 57.9811 16.5872H76.6917C77.639 16.5872 78.3496 17.2981 78.3496 18.2459V47.313C78.3496 50.4725 75.7443 53 72.6653 53ZM59.639 19.9047V47.313C59.639 48.6558 60.6653 49.6826 62.0075 49.6826H72.6653C74.0074 49.6826 75.0338 48.6558 75.0338 47.313V19.9047H59.639Z" fill="white"/>
                                </svg>
                            </div>
                            <div className="slide__lavagem-text">
                                <h3>Dia a dia</h3>
                                <p>Ciclo que garante o maior cuidado com as peças delicadas como taças e cristais, mas mantendo a performance para uma lavagem impecável.</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide__lavagem" style={{ width: 100 }}>
                        <div className="slide__lavagem-flex">
                            <div className="slide__lavagem-icons">
                                <svg width="79" height="46" viewBox="0 0 79 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M66.331 36.1847H14.6388C14.4176 36.1847 14.1964 36.1124 13.9751 36.04L1.43923 28.4443C0.923043 28.0103 0.775562 27.2869 1.14427 26.7081C1.51297 26.1294 2.25038 25.9847 2.8403 26.3464L15.0813 33.7975H66.0361L76.581 26.4188C77.0972 26.0571 77.9083 26.1294 78.277 26.7081C78.6457 27.2145 78.572 28.0103 77.9821 28.372L67.0684 35.9677C66.8472 36.1124 66.626 36.1847 66.331 36.1847Z" fill="white"/>
                                    <path d="M66.331 45.372H14.6388C14.4176 45.372 14.1964 45.2996 13.9751 45.2273L1.43923 37.6316C0.923043 37.1975 0.775562 36.4741 1.14427 35.8954C1.51297 35.3167 2.25038 35.172 2.8403 35.5337L15.0813 42.9847H66.0361L76.581 35.606C77.0972 35.2443 77.9083 35.3167 78.277 35.8954C78.6457 36.4018 78.572 37.1975 77.9821 37.5592L67.0684 45.0826C66.8472 45.2996 66.626 45.372 66.331 45.372Z" fill="white"/>
                                    <path d="M28.6499 3.41449L25.8477 4.8613L25.4053 3.26981L28.8711 1.4613H30.7146V17.0868H28.6499V3.41449Z" fill="white"/>
                                    <path d="M35.4346 18.0273L42.2925 0.593262H43.9885L37.0569 18.0273H35.4346Z" fill="white"/>
                                    <path d="M44.9458 17.0867V15.7845L46.6418 14.1931C50.6976 10.359 52.5411 8.40584 52.5411 6.01861C52.5411 4.42713 51.7299 2.98032 49.3702 2.98032C47.8954 2.98032 46.7156 3.70372 45.9782 4.28245L45.3882 2.7633C46.4944 1.82288 48.0429 1.17181 49.8864 1.17181C53.2785 1.17181 54.7533 3.4867 54.7533 5.72925C54.7533 8.62286 52.6148 10.9378 49.2228 14.1207L47.9692 15.2782V15.3505H55.122V17.0867H44.9458Z" fill="white"/>
                                </svg>
                            </div>
                            <div className="slide__lavagem-text">
                                <h3>Meia carga</h3>
                                <p>Tecnologia avançada que identifica o nível de sujeira e seleciona automaticamente o melhor ciclo de lavagem!</p>
                            </div>
                        </div>
                    </div>
                </Slider>
                
                <p className="small">
                    A lava-louças Brastemp alcançou o nível A de performance de lavagem, 
                    segundo a regulação mais rígida do mundo*
                </p>
                <p className="small">
                    *Conforme certificação da Regulação Européia EC 1059/2010
                </p>
            </div>
        )
    }
}
export default programasLavagem;