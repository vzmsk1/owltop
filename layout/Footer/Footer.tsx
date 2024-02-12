import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { P } from '../../components/P/P';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <P size='m' className={styles.copyrights}>
        OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </P>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a href='#' target='_blank' className={styles.link}>
            Пользовательское соглашение
          </a>
        </li>
        <li className={styles.listItem}>
          <a href='#' target='_blank' className={styles.link}>
            Политика конфиденциальности
          </a>
        </li>
      </ul>
    </footer>
  );
};
