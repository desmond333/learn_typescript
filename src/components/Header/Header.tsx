import styles from './Header.module.scss';

const Header: React.FC = () => {
   return (
      <header className={styles.header}>
         <div className={styles.header__mainTitle}>To do list with React-Redux</div>
      </header>
   );
};

export default Header;
