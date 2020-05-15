---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: single
author_profile: true
title: "Welcome to the Opinionated Digital Center's site"
toc: true
---
## Our aim

The aim of the Opinionated Digital Center is to share directly usable resources such as
templates, tools and knowledge, which reflect strong opinions on how to help
developers, teams and organisations to be more effective within the context of Digital
Development Centers.

These resources are designed and used day-to-day by experienced developers, facilitators
and managers who got tired of reinventing the wheel when setting up new
projects, organising digital centers, pushing developments to production,
organising the sharing of knowledge.

We want to help developers be more creative, innovative and value-adding
by creating enough structure to support and guide them through their work,
but not too much so that they don't become alienated by it.

## Resources we share

### Characteristics

The resources we share are:

* _Explained_:
  * The thinking and argumentation behind our choices is mainly recorded in the form of Architecture
    Decision Records (see [Available resources](#available-resources)).
* _Documented_:
  * Resources come with full documentation, in various forms (actual documentation,
    humanely readable and understandable tests like in
    [Gherkin](https://cucumber.io/docs/gherkin/reference/), just to give two examples).
  * References are given wherever useful (see
    [this ADR](https://github.com/opinionated-digital-center/architecture-decision-records/blob/master/docs/adr/0001-use-markdown-architectural-decision-records.md)
    as an example).
* _Crafted and Tested_:
  * No code is delivered without a
    [full test suite](https://github.com/opinionated-digital-center/python-library-project-generator/blob/master/README.rst#fully-tested-features).
  * We aim at staying as close as possible to the
    [Software Crafsmanship](https://en.wikipedia.org/wiki/Software_craftsmanship)
    principles and practices.
* _As straightforward to set up as possible_:
  * Tooling for automation coupled with detailed documentation is made available
    as often as possible.

### Resources list

Following [ADR-0008](https://github.com/opinionated-digital-center/architecture-decision-records/blob/master/docs/adr/0008-use-github-as-main-hub-for-the-opinionated-digital-center.md),
all our projects are hosted on our
[GitHub account](https://github.com/opinionated-digital-center) (even the GitLab
related work... see the previously mentioned ADR for details).

List of resources:

* [Organisation-wide Architecture Decision Records (ADRs) repository](https://github.com/opinionated-digital-center/architecture-decision-records).
* [PyADR](https://github.com/opinionated-digital-center/pyadr), a CLI to help with our
  ADR lifecycle process.
* [Python Library Project Template](https://github.com/opinionated-digital-center/python-library-project-generator),
  a fully tested, feature rich [Cookiecutter](https://github.com/audreyr/cookiecutter/)
  scaffold to kick start your Python library and command line interface development
  (including CI/CD pipelines and automated publishing).
* [Behave4cli](https://gitlab.com/opinionated-digital-center/behave4cli/) (soon to be
  transfered to GitHub), an extension (testing domain) of Behave to test commands and
  command-line interfaces (console apps).
* [Behave4git](https://github.com/opinionated-digital-center/behave4git), an extension
  (testing domain) of Behave to use Git and GitLab (and GitHub in the near future).

Planned addition (stay tuned):
* A Big Data Project Template.
