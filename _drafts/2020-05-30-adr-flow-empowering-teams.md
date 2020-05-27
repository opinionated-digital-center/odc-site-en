---
title: "`ADR flow`: Empowering teams to create, maintain and publish Architecture Decision Records"
date: 2020-05-26T18:30
author: esciara
categories:
  - blog
tags:
  - process
  - tools
  - techniques
  - knowledge management
toc: true
mermaid: true
gitgraph: true
---

## What are ADRs and why they are useful

## The challenges of working with ADRs within teams and organisations

So as you can see, ADRs are often a good idea when it comes to involve teams in architecture and design decisions, whether at their project level or on a wider scope. Implementing them, however, can quickly become cumbersome...

### Statuses but no existing life-cycle process

Firstly, existing literature falls short on proposing a simple but structured process to govern the life cycle of ADRs. The aim of such process would be to facilitate participation, both through clarity and simplicity, whilst giving sufficient structure to address the needs to record decisions, to keep a history, and to make ADRs available and accessible.

<div class="mermaid">
stateDiagram-v2
    state "ADR Statuses: how to move from one to the other?" as states {
    [*] --> Proposed
    Proposed --> Accepted
    Proposed --> Rejected
    Proposed --> Superseding
    Rejected --> [*]
    Accepted --> Deprecated
    Accepted --> Superseded
    Superseding --> Deprecated
    Superseding --> Superseded
    Deprecated --> [*]
    Superseded --> [*]
    }
</div>

### No tooling for `git` related tasks

Secondly, moving ADRs through its different statuses -- whatever the process -- involves a lot of steps, which, when done manually, are prone to errors and omissions. The tools available so far have limited functionalities and do not offer `git` related features. Indeed, being written in `mardown`, ADRs are `git` friendly, but one still has to:

* Organise and manage branches for ADRs to be separately reviewed from one another.
* Keep an ADR's filename in sync with its changing title and make sure `git` follows that change properly.
* Commit ADR with meaningful and correct commit messages to maintain a clean history.
* ...

And other non-`git` related features can also become useful operationally, such as:

* Change the ADR's date whenever its status changes or it is significantly modified.
* Assign a valid ID when an ADR is accepted or rejected.
* ...

## An as simple as possible process associated with an as handy as possible tool

Hence, we have worked on defining `ADR Flow`, a simple but rigorous process that aims at easing collaboration and bringing clarity around ADR repositories. We gave to this process a companion, `PyADR` and its `git adr` extension, to simplify and automate the repetitive and error prone tasks that need to be performed during this -- and other similar -- ADR process.

`ADR flow` and `git adr` are most effectively used alongside the most widely used, developer-friendly code hosting tools that are `GitHub` and `GitLab`.

In the reminder of this article, we will focus on the process. A forthcoming article will detail the associated tool's functionalities.

## A slice of `ADR Flow` - from proposal to publication

To help get a sense of `ADR Flow`, let's focus on the process from proposal of an ADR to its publication.

### 0. Starting point

Let's assume that:

* We are working on an ADR only repository.
* It already has a `docs/adr` directory to hold the ADRs.
* Some ADRs have already been accepted. As a result, the repository's version is tagged `v0.1.0`.

Work on a new ADR always starts from the `master` branch.

<div id="graph-container-initial-state"></div>
<script type="module">
    import { gitGraphStartingPoint } from '/assets/js/git-graph-starting-point.js';
    const graphContainer = document.getElementById("graph-container-initial-state");
    const gitgraph = gitGraphStartingPoint(graphContainer);
</script>

<a name="initiate-work"></a>
### 1. Initiate work on an ADR proposal

A team member wants to propose a new ADR, titled "My ADR Title". In order to work on the ADR and prepare it for review, he must:

* Instantiate the proposed ADR from the ADR template and name it following the convention `XXXX-<adr-title-slug>.md`. Here the filename will be `XXXX-my-adr-title.md`.
* Create a branch following the format `propose-<adr-title-slug>`.

<div id="graph-container-working-on-proposal"></div>
<script type="module">
    import { gitGraphWorkOnProposal } from '/assets/js/git-graph-work-on-proposal.js';
    const graphContainer = document.getElementById("graph-container-working-on-proposal");
    const gitgraph = gitGraphWorkOnProposal(graphContainer);
</script>

<a name="submit-for-review"></a>
### 2. Submit the ADR for review

Once the author feels ready to submit his proposal for review, he must:

* Commit the work done on the branch, with a message of format `chore(adr): [propose] XXXX-<adr-title-slug>` (the first part of the message follows the widely used [Angular Commit Message Guideline](https://github.com/angular/angular/blob/13495c64f7b245fd4828b998858f1dc9030c2454/CONTRIBUTING.md#commit)).

    <div id="graph-container-submit-proposal-for-review"></div>
    <script type="module">
        import { gitGraphSubmitProposalForReview } from '/assets/js/git-graph-submit-proposal-for-review.js';
        const graphContainer = document.getElementById("graph-container-submit-proposal-for-review");
        const gitgraph = gitGraphSubmitProposalForReview(graphContainer);
    </script>

* Push the branch to `GitHub` or `GitLab`.
* Create a Pull Request (Merge Request for `GitLab`).
* Request a review from the team and/or other relevant people.

### 3. Include the modifications following reviews

At the end of each review iteration, the author must:

* Commit the changes reflecting the inputs of the reviews (two iterations in our example).

    <div id="graph-container-modify-following-reviews"></div>
    <script type="module">
        import { gitGraphModifyFollowingReviews } from '/assets/js/git-graph-modify-following-reviews.js';
        const graphContainer = document.getElementById("graph-container-modify-following-reviews");
        const gitgraph = gitGraphModifyFollowingReviews(graphContainer);
    </script>

### 4. Commit the accepted (or rejected) ADR proposal and merge to `master`

Once the ADR is accepted (or rejected, which follows a similar process), the author must:

* Give the next available unique id to the ADR.
* Update the ADR filename to include the id and the up-to-date title slug, using format `<id>-<adr-title-slug>.md`. Here the filename will be `0003-my-updated-adr-title.md`.
* Update the status and the date inside the ADR file.
* Commit the work done to the branch, with a message following the format `feat(adr): [accept] <id>-<adr-title-slug>`.
* Merge the ADR branch to `master`.

<div id="graph-container-accept-and-merge"></div>
<script type="module">
    import { gitGraphAcceptAndMerge } from '/assets/js/git-graph-accept-and-merge.js';
    const graphContainer = document.getElementById("graph-container-accept-and-merge");
    const gitgraph = gitGraphAcceptAndMerge(graphContainer);
</script>

### 5. Create table of content and release

Once the accepted (or rejected) ADR is merged, the author must:

* Generate/update the table of content `index.md`, which will help to navigate though the ADRs.
* Create a new release since we are in an ADR only repository. Here `v0.2.0`.

<div id="graph-container-toc-and-release"></div>
<script type="module">
    import { gitGraphTocAndRelease } from '/assets/js/git-graph-toc-and-release.js';
    const graphContainer = document.getElementById("graph-container-toc-and-release");
    const gitgraph = gitGraphTocAndRelease(graphContainer);
</script>

### Proposal process overview

<div class="mermaid">
graph TD
	A((Start)) --> B(Instantiate template with filename format `XXXX-&lt;adr-title-slug&gt;.md`)
	B --> C("Create feature branch with format `propose-&lt;adr-title-slug&gt;` and switch to it")
	C --> D(Work on ADR)
	D --> E{Proposal ready?}
	E -->|Yes| F("Commit with message `chore(adr): [propose] XXXX-&lt;adr-title-slug&gt;`")
    E -->|No| D
    F --> G(Push to GitHub/GitLab and create a Pull/Merge request)
    G --> H(Organise review iteration)
    H --> I("Apply and commit changes reflecting inputs with message `chore(adr): include inputs from review &lt;i&gt;`")
    I --> J{Ready to accept/reject?}
    J -->|No| H
    J -->|Yes| K(Get next available id)
    K --> L("Update ADR filename with id and up-to-date title in format `&lt;id&gt;-&lt;adr-title-slug&gt;.md`")
    L --> M(Update ADR's status and date)
    M --> N{ADR only repo or project repo?}
    N -->|ADR only repo| O("Commit message will start with `feat(adr): `")
    N -->|Project repo| P("Commit message will start with `docs(adr): `")
    O --> Q{Accepted or rejected?}
    P --> Q
    Q -->|Accepted| R("Commit message will end with `[accepted] &lt;id&gt;-&lt;adr-title-slug&gt;`")
    Q -->|Rejected| S("Commit message will end with `[rejected] &lt;id&gt;-&lt;adr-title-slug&gt;`")
    R --> T(Commit accepted/rejected ADR with aforementioned commit message elements)
    S --> T
    T --> U("Merge feature branch to `master`")
    U --> V(Generate/update `index.md` table of content)
    V --> W{ADR only repo?}
    W -->|Yes| X(Create a new release/tag)
    W -->|No| Z((End))
    X --> Z
</div>

## Next steps

In a forthcoming article, we will discuss `git adr` and how it helps manage and maintain your ADR life cycle, and `ADR flow` in particular.
