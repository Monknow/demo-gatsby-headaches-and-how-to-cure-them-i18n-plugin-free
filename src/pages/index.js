import * as React from "react";
import {graphql} from "gatsby";
import {RecipePreview} from "../components/RecipePreview";
import {LocaleContext} from "../context/LocaleContext";
import {useContext} from "react";
import {translations} from "../../i18n/translations";

const IndexPage = ({data}) => {
	const recipes = data.allMarkdownRemark.nodes;
	const locale = useContext(LocaleContext);

	return (
		<main>
			<h1>{translations[locale].index_page_title}</h1>
			<h2>{translations[locale].index_page_subtitle}</h2>
			{recipes.map(({frontmatter}) => {
				return <RecipePreview key={frontmatter.slug} data={frontmatter} />;
			})}
		</main>
	);
};

export const Head = ({pageContext}) => {
	const {locale} = pageContext;

	return <title>{translations[locale].index_page_title}</title>;
};
export const indexQuery = graphql`
	query IndexQuery($locale: String) {
		allMarkdownRemark(filter: {frontmatter: {locale: {eq: $locale}}}) {
			nodes {
				frontmatter {
					slug
					title
					date
					cover_image {
						image {
							childImageSharp {
								gatsbyImageData
							}
						}
						alt
					}
				}
			}
		}
	}
`;

export default IndexPage;
