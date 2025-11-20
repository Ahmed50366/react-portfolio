import cx from 'classnames';
import s from './Burger.module.scss';

const Burger = ({ onClick, className }) => {
  return (
    <button onClick={onClick} className={cx(s.burger, className)}>
      <span />
      <span />
      <span />
    </button>
  );
};

export default Burger;
