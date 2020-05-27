export function gitGraphStartingPoint(graphContainer) {
    // Create template to remove hashes and authors.
    const withoutHashOrAuthor = GitgraphJS.templateExtend(GitgraphJS.TemplateName.Metro, {
        commit: {
            message: {
                displayHash: false,
                displayAuthor: false,
            },
        },
    });

    // Instantiate the graph.
    const gitgraph = GitgraphJS.createGitgraph(graphContainer, {
        orientation: GitgraphJS.Orientation.VerticalReverse,
        template: withoutHashOrAuthor,
    });

    // Simulate git commands with Gitgraph API.
    const master = gitgraph.branch("master");
    master
        .commit("Previous commits...")
        .commit("Starting commit")
        .tag("v0.1.0");

    return gitgraph;
}
