import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './utilities/routes';
import Loader from './components/Loaders/Loader';
import HirePlan from './Pages/Plans/HirePlan';
import Loading from './components/Loaders/Loading';

const HireServices = lazy(() => import('./Pages/HireServices/HireServices'));
const Confirmation = lazy(() => import('./Pages/HireServices/Confirmation'));
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
                    <Route path='/hire-services/confirmation' element={<Confirmation/>}/>
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
                    <Route path='*' element={<Navigate to="/"/>}/>
                </Routes>
            </Layout>
        </Suspense>
    );
}

export default App
