import * as React from "react";
import {createContext} from "react";

export const LocaleContext = createContext();

export const LocaleProvider = ({locale, children}) => {
	return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
};
