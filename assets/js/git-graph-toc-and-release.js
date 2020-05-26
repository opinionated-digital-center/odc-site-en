import { gitGraphAcceptAndMerge } from './git-graph-accept-and-merge.js';
export function gitGraphTocAndRelease(graphContainer) {
    const gitgraph = gitGraphAcceptAndMerge(graphContainer);

    // Simulate git commands with Gitgraph API.
    const master = gitgraph.branch("master");

    master.commit("chore(adr): build adr toc");
    master.tag("v0.2.0");
    return gitgraph;
}
