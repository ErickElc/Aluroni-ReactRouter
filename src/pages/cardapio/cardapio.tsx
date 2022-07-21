import { useState } from 'react';
import styles  from './card.module.scss';
import Buscador from './buscador/buscador';
import Filtros from './filtros/filtros';
import Ordenador from './Ordenador/Ordenador';
import Itens from './itens/itens';
import styleTema from 'styles/tema.module.scss';
export default function Cardapio(){
    
    const [busca, setBusca] = useState('');
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState('');
    return (
        <>
            <section className={styles.cardapio}>
                <h3 className={styleTema.titulo}>Cardápio</h3>
                <Buscador  busca={busca} setBusca={setBusca}/>
                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro}/>
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
                </div>
                <Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
            </section>

        </>
    );

}