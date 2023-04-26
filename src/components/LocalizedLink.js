import * as React from "react";
import {useContext} from "react";
import {Link} from "gatsby";
import {LocaleContext} from "../context/LocaleContext";

export const LocalizedLink = ({to, children}) => {
	const locale = useContext(LocaleContext);

	return <Link to={`/${locale}${to}`}>{children}</Link>;
};
