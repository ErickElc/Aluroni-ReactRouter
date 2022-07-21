import classNames from 'classnames';
import { Prato } from 'types/Prato';
import styles from './tagsPrato.module.scss';

export default function TagsPrato({
    category,
    size,
    serving,
    price
}: Prato){

    return(
        <div className={styles.tags}>
            <div className={classNames({
                [styles.tags__tipo]: true,
                [styles[`tags__tipo__${category.label.toLowerCase()}`]] : true
            })}>
                {category.label}
            </div>
            <div className={styles.tags__porcao}>
                {size}g
            </div>
            <div className={styles.tags__qtdpessoas}>
                serve: {serving} pessoa{serving === 1 ? '' : 's'}
            </div>
            <div className={styles.tags__valor}>
                preço: {price} 
            </div>
        </div>
    );
}