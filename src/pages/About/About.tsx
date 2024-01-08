import { FC } from 'react';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import { useAppSelector } from '../../store/hook/hook';
import { ILang } from '../../types/localisation';
import style from './About.module.scss';

const About: FC = () => {
  const lang = useAppSelector((store) => store.changeLang.language);

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <div className={style.container}>
          <img className={style.photo} src="/photo.jpg" alt="my Photo" />
          <p>{text[lang].description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

const text: ILang = {
  Ua: {
    description: `Привіт! Я фронтернт розробник початківець.
		Відтоді як я почав вивчати фронтенд - я все більше захоплююсь програмуванням і прагну вивчити нові та цікаві для мене технології.\n
		Цей проєкт створений для роботи з Graphql запитами. `,
  },
  En: {
    description: `Hello! I am a beginner frontend developer.
		Since I started learning frontend, I am more and more interested in programming and I want to learn new and interesting technologies for me.
		This project was created to work with Graphql requests.`,
  },
};
