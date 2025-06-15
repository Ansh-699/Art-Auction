import { lazy } from "react";

/* 
Router Structure
export interface Router {
  index?: true;
  label: string;
  icon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
  path?: string;
  children?: Router[];
  element?: LazyExoticComponent<() => JSX.Element>;
}
*/

export const ROUTER = [
  {
    label: "Home",
    path: "/",
    element: lazy(() => import("@/pages/Home")),
  },
  {
    label: "Sales",
    path: "/sales",
    element: lazy(() => import("@/pages/Sales")),
  },
  {
    label: "Works",
    path: "/works",
    element: lazy(() => import("@/pages/Works")),
  },
  {
    label: "Auction Art Details",
    path: "/works/:auctionArtID",
    element: lazy(() => import("@/pages/ArtDetails")),
  },
];
