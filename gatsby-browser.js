import * as React from "react";
import {LocationProvider} from "./src/context/LocationContext";
import {LocaleProvider} from "./src/context/LocaleContext";
import {LanguageSelector} from "./src/components/LanguageSelector";

export const wrapPageElement = ({element, props}) => {
	const {location} = props;
	const {locale} = element.props.pageContext;

	return (
		<LocaleProvider locale={locale}>
			<LocationProvider location={location}>
				<LanguageSelector />
				{element}
			</LocationProvider>
		</LocaleProvider>
	);
};
