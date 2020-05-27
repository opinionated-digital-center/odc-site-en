import { gitGraphSubmitProposalForReview } from './git-graph-submit-proposal-for-review.js';
export function gitGraphModifyFollowingReviews(graphContainer) {
    const gitgraph = gitGraphSubmitProposalForReview(graphContainer);

    // Simulate git commands with Gitgraph API.
    const adrBranch = gitgraph.branch("adr-propose-my-adr-title");
    adrBranch
        .commit("chore(adr): include inputs from review 1")
        .commit("chore(adr): include inputs from review 2")
    ;
    return gitgraph;
}
