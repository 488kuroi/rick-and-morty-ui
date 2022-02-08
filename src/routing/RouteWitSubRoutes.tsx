import { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { IRoute } from './config';

const RouteWithSubRoutes = (route: IRoute) => {

  return (
    <Suspense fallback={route.fallback}>
      {/* ADDITIONAL LOGIC CAN BE PUT HERE */}
      <Route
        path={route.path}
        render={(props) => <route.component {...props} routes={route.routes}/> }
      />
    </Suspense>
  );
};

export default RouteWithSubRoutes;