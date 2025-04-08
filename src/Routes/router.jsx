import {createBrowserRouter} from 'react-router-dom';
import Home from '../Pages/home';
import About from '../Pages/about';
import Error404 from '../Pages/Error404';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />   
    },
    {
        path: '/sobre-mim',
        element: <About />
    },
    {
        path: '*', // Captura todas as rotas não definidas
        element: <Error404 />
      }
]);

export default router;








