import { gitGraphStartingPoint } from './git-graph-starting-point.js';
export function gitGraphSubmitProposalForReview(graphContainer) {
    const gitgraph = gitGraphStartingPoint(graphContainer);

    // Simulate git commands with Gitgraph API.
    const master = gitgraph.branch("master");

    const adrBranch = master.branch("adr-propose-my-adr-title");
    adrBranch.commit("chore(adr): [propose] XXXX-my-adr-title");
    return gitgraph;
}
