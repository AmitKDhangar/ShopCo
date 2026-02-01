import { lazy } from "react";
const Banner = lazy(() => import('./banner'));
const BrandsBanner = lazy(() => import('./brandslider'));
const NewArrival = lazy(() => import('./newarrival'));
const TopSelling = lazy(() => import('./topselling'));
const BrowseByDressStyle = lazy(() => import('./broswebydressstyle'));
const Layout = () => {
  return (
    <>
      <Banner />
      <BrandsBanner />
      <NewArrival />
      <TopSelling />
      <BrowseByDressStyle />
    </>
  );
};

export default Layout;
