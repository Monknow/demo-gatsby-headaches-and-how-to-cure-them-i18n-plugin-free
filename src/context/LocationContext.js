import * as React from "react";
import {createContext} from "react";

export const LocationContext = createContext();

export const LocationProvider = ({location, children}) => {
	return <LocationContext.Provider value={location}>{children}</LocationContext.Provider>;
};
