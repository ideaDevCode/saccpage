import { Suspense, lazy } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { routes } from './utilities/routes';
import Loader from './components/Loaders/Loader';
import HirePlan from './Pages/Plans/HirePlan';
import Loading from './components/Loaders/Loading';

const HireServices = lazy(() => import('./Pages/HireServices/HireServices'));
const Manual = lazy(() => import('./Pages/Manual/Manual'));
const Layout = lazy(() => import('./components/Layout/Layout'));
const Pricing = lazy(() => import('./Pages/Pricing/Pricing'));
const Home = lazy(() => import('./Pages/Home/Home'));


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
                            ?   <Route key={index} path={item.path} element={
                                    <Suspense fallback={<Loading/>}>
                                        {item.componentName}
                                    </Suspense>
                                }/> 
                            :   <Route key={index} path={item.path} element={
                                    <Suspense fallback={<Loading/>}>
                                        {item.componentName}
                                    </Suspense>
                                }>
                                    { item.subroutes.map((subroutes, key) => (
                                        <Route key={key} path={subroutes.path} element={
                                            <Suspense fallback={<Loading/>}>
                                                {subroutes.componentName}
                                            </Suspense>
                                        }/>
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
