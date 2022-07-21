import Footer from 'components/footer';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/Padraoi';
import Cardapio from 'pages/cardapio/cardapio';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/notFound/notfond';
import Prato from 'pages/prato';
import Sobre from 'pages/sobre';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function AppRouter(){

    return(
        <main className='container'>
            <Router>
                <Menu/>
                <Routes>
                    <Route path='/' element={<PaginaPadrao/>} >
                        <Route index element={<Inicio/>}/>
                        <Route path='cardapio' element={<Cardapio/>}/> 
                        <Route path='sobre' element={<Sobre/>}/>
                    </Route>
                    <Route path='prato/:id'element={<Prato/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
                <Footer/>
            </Router>
        </main>
    );
}
