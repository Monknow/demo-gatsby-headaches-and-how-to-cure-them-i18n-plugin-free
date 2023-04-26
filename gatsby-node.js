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

	const {createRedirect} = actions;

	createRedirect({
		fromPath: page.path,
		toPath: `/en${page.path}`,
		isPermanent: true,
	});

	createRedirect({
		fromPath: page.path,
		toPath: `/es${page.path}`,
		isPermanent: true,
		conditions: {
			language: [`es`],
		},
	});
};
