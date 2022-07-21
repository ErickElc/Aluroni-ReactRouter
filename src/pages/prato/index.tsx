import styles from './prato.module.scss';
import { useParams, useNavigate} from  'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/tagsPrato';
import NotFound from 'pages/notFound/notfond';
import PaginaPadrao from 'components/Padraoi';

export default function Prato(){
    const navigate = useNavigate();
    const {id} = useParams();
    const prato = cardapio.find(item => item.id == Number(id));
    if(!prato){
        return <NotFound/>;
    }
    return(
        <PaginaPadrao>
            <button className={styles.voltar} onClick={()=> navigate(-1)} >
                {'< Voltar'}
            </button>
            <section className={styles.container}>
                <h1 className={styles.titulo}>
                    {prato.title}
                </h1>
                <div className={styles.imagem}> 
                    <img src={prato.photo} alt={prato.title}/>
                </div>
                <div className={styles.conteudo}>
                    <p className={styles.conteudo__descricao}>
                        {prato.description}
                    </p>
                </div>
                <TagsPrato {...prato}/>
            </section>

        </PaginaPadrao>
    );
}