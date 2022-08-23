import React, { lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ROUTES } from './config/ROUTES';
import ProtectedRoute from './modules/common/components/ProtectedRoute';

const LoginPage = lazy(() => import('./modules/auth/page/login'));
const HomePage = lazy(() => import('./modules/home/page/home'));

const ListRoutes = () => {

    const location = useLocation();

    return (
        <Suspense fallback={<div>Loading.....</div>} >
            <Switch location = {location}>
               <Route path={ROUTES.login} component={LoginPage} />
               <ProtectedRoute path={ROUTES.home} component={HomePage} />
            </Switch>
        </Suspense>
    )
}

export default ListRoutes;