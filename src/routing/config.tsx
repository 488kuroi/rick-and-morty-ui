import React, { ComponentType, lazy, LazyExoticComponent, ReactNode } from 'react';
import { FallBackLogoComponent } from '@components';

export interface IRoute {
  // Path, like in basic prop
  path: string;
  // Exact, like in basic prop
  exact: boolean;
  // Preloader for lazy loading
  fallback: NonNullable<ReactNode> | null;
  // Lazy Loaded component
  component?: LazyExoticComponent<ComponentType<any>>;
  // Sub routes
  routes?: IRoute[];
  // Redirect path
  redirect?: string;
  // If router is private, this is going to be true
  private?: boolean;
  // If the condition is true, user is allowed to enter
  conditions?: Array<string>;
}

export const routes: IRoute[] = [
  {
    path: "/",
    component: lazy(() => import('../pages/IndexPage/IndexPage')),
    exact: true,
    fallback: <FallBackLogoComponent />,
  },
  {
    path: "/index",
    component: lazy(() => import('../pages/IndexPage/IndexPage')),
    exact: true,
    fallback: <FallBackLogoComponent />,
  },
  {
    path: "/locations",
    component: lazy(() => import('../pages/LocationsPage/LocationsPage')),
    exact: true,
    fallback: <FallBackLogoComponent />,
  },
  {
    path: "/characters",
    component: lazy(() => import('../pages/CharactersPage/CharactersPage')),
    exact: true,
    fallback: <FallBackLogoComponent />,
  },
  {
    path: "/episodes",
    component: lazy(() => import('../pages/EpisodesPage/EpisodesPage')),
    exact: true,
    fallback: <FallBackLogoComponent />,
  },
  
  
];