import {createBrowserRouter} from 'react-router-dom';
import Home from '../Pages/home';
import About from '../Pages/about';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />   
    },
    {
        path: '/sobre-mim',
        element: <About />
    }
]);

export default router;







