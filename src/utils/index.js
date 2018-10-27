// @flow

import memoize from "lodash/memoize";
import url from "url";

export const getHostname = memoize(
  (href: string): string => url.parse(href).hostname || ""
);
