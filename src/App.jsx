import { Suspense, lazy } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { routes } from './utilities/routes';
import Loader from './components/Loaders/Loader';
import HirePlan from './components/Plans/HirePlan';

const Layout = lazy(() => import('./components/Layout/Layout'));
const Home = lazy(() => import('./components/Home/Home'));
const Manual = lazy(() => import('./components/Manual/Manual'));
const Pricing = lazy(() => import('./Pages/Pricing/Pricing'));
const HireServices = lazy(() => import('./Pages/HireServices/HireServices'));


function App() {
    return (
        <Suspense fallback={<Loader/>}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/prices" element={<Pricing/>}/>
                    <Route path="/hire-services" element={<HireServices/>}>
                        <Route path=":id" element={<HirePlan/>}/>
                    </Route>
                    <Route path="/manual" element={<Manual/>}>
                        { routes.map((item, index) => !item.subroutes 
                            ?   <Route key={index} path={item.path} element={item.componentName}/> 
                            :   <Route key={index} path={item.path} element={item.componentName}>
                                    { item.subroutes.map((subroutes, key) => (
                                        <Route key={key} path={subroutes.path} element={subroutes.componentName}/>
                                    ))}
                                </Route>
                        )}
                    </Route>
                </Routes>
            </Layout>
        </Suspense>
    );
}

export default App
