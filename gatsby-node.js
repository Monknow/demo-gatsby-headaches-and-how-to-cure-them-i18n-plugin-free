exports.createPages = async ({actions}) => {
	const {createRedirect} = actions;

	createRedirect({
		fromPath: `/*`,
		toPath: `/en/*`,
		isPermanent: true,
	});

	createRedirect({
		fromPath: `/*`,
		toPath: `/es/*`,
		isPermanent: true,
		conditions: {
			language: [`es`],
		},
	});
};

const locales = ["en", "es"];

exports.onCreatePage = ({page, actions}) => {
	const {createPage, deletePage} = actions;

	deletePage(page);

	locales.forEach((locale) => {
		const matchPath = page.path.match(/^\/404\/$/) ? (locale === "en" ? `/*` : `/${locale}/*`) : page.matchPath;

		createPage({
			...page,
			path: `${locale}${page.path}`,
			context: {
				...page.context,
				locale,
			},
			matchPath,
		});
	});
};
