import style from './item.module.scss';
import { Prato } from 'types/Prato';
import TagsPrato from 'components/tagsPrato';
import { useNavigate } from 'react-router-dom';
export default function Item(props: Prato) {
    const { title, description, photo, id} = props;
    const navegate = useNavigate();
    return (
        <div className={style.item} onClick={()=> navegate(`/prato/${id}`)}>
            <div className={style.item__imagem}>
                <img src={photo} alt={title} />
            </div>
            <div className={style.item__descricao}>
                <div className={style.item__titulo}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <TagsPrato {...props}/>
        </div>
    );
}