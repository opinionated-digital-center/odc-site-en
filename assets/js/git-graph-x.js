import { gitGraphStartingPoint } from './git-graph-starting-point.js';
export function gitGraphX(graphContainer) {
    const gitgraph = gitGraphStartingPoint(graphContainer);

    // Simulate git commands with Gitgraph API.
    const master = gitgraph.branch("master");
    master.commit("Starting commit").tag("v0.12.0");

    const adrBranch = master.branch("adr-propose-my-adr-title");
    adrBranch
        .commit("chore(adr): [propose] XXXX-my-adr-title")
        .commit("chore(adr): update following review")
        .commit("chore(adr): update following review")
    ;

    // const aFeature = adrBranch.branch("a-feature");
    // aFeature
    //     .commit("Make it work")
    //     .commit("Make it right")
    //     .commit("Make it fast");

    // adrBranch.merge(aFeature);
    adrBranch.commit("feat(adr): [accepted] 0007-my-adr-title");

    master.merge(adrBranch);
    master.commit("chore(adr): build adr toc");
    master.tag("v0.13.0");
    return gitgraph;
}
