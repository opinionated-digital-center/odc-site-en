import { gitGraphStartingPoint } from './git-graph-starting-point.js';
export function gitGraphWorkOnProposal(graphContainer) {
    const gitgraph = gitGraphStartingPoint(graphContainer);

    // Simulate git commands with Gitgraph API.
    const master = gitgraph.branch("master");

    master.tag("propose-my-adr-title");
    return gitgraph;
}
