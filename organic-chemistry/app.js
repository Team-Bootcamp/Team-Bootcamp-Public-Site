const search= instantsearch({
	appId: 'NXH26QFYGC',
	apiKey:'5526ca54f366f7ec766d69feb5ffe665',
	indexName: 'prod_organicchemistrybootcamp',
	urlSync:true
});

search.addWidget (
	instantsearch.widgets.searchBox({
		container:'#search-input'
	})
);

search.addWidget(
	instantsearch.widgets.hits({
		container: '#hits',
		hitsPerPage: 10,
		templates: {
			item: document.getElementById('hit-template').innerHTML,
			empty: "No results."
		}
	})
);

search.start();