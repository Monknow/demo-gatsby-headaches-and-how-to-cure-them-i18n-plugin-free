import * as React from "react";
import {LocalizedLink as Link} from "../components/LocalizedLink";
import {LocaleContext} from "../context/LocaleContext";
import {useContext} from "react";
import {translations} from "../../i18n/translations";

const NotFoundPage = () => {
	const locale = useContext(LocaleContext);

	return (
		<main>
			<h1>{translations[locale].not_found_page_title}</h1>
			<p>
				{translations[locale].not_found_page_body} <br />
				<Link to="/">{translations[locale].not_found_page_back_link}</Link>.
			</p>
		</main>
	);
};

export default NotFoundPage;

export const Head = ({pageContext}) => {
	const {locale} = pageContext;

	return <title>{translations[locale].not_found_page_title}</title>;
};
