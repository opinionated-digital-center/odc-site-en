import { gitGraphModifyFollowingReviews } from './git-graph-modify-following-reviews.js';
export function gitGraphAcceptAndMerge(graphContainer) {
    const gitgraph = gitGraphModifyFollowingReviews(graphContainer);

    // Simulate git commands with Gitgraph API.
    const master = gitgraph.branch("master");

    const adrBranch = gitgraph.branch("adr-propose-my-adr-title");

    adrBranch.commit("feat(adr): [accepted] 0003-my-updated-adr-title");

    master.merge(adrBranch);
    return gitgraph;
}
