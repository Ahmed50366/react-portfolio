import s from './AboutTextCard.module.scss';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Ahmed Mehmood, </span>
        <br />a software engineer currently based in{' '}
        <span className={s.purple}>Lahore, Pakistan</span>
        <br />
        <br />
        I have a Bachelor's degree in Computer Science 
        <br />
      from University of Gujrat.
        <br />
        <br />
        My hobbies beyond programming:
      </p>

      <ul style={{ marginLeft: 14 }}>
        <li className={s.aboutActivity}>
          - Playing Games
        </li>
        <li className={s.aboutActivity}>
          - Reading
        </li>
        <li className={s.aboutActivity}>
          - Sports
        </li>
        <li className={s.aboutActivity}>
          - Travelling
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
