import * as Loadable from "react-loadable";

import { ReactLoadableLoader } from "./components/Loader";

/**
 * Create a loadable version of a component.
 *
 * @param opts - The options to create the loadable with. At a minimum, the
 *     'loader' attribute containing the dynamic import must be specified.
 */
export const asLoadable = (opts: any) =>
  Loadable({
    loading: ReactLoadableLoader,
    ...opts
  });
