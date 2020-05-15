---
permalink: /about/
title: "About the Opinionated Digital Center"
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

## Characteristics of the resources we share

The resources we share are:

### Explained

* The thinking and argumentation behind our choices is mainly recorded in the form of Architecture
  Decision Records (see [Available resources](#available-resources)).

### Documented

* Resources come with full documentation, in various forms (actual documentation,
  humanely readable and understandable tests like in
  [Gherkin](https://cucumber.io/docs/gherkin/reference/), just to give two examples).
* References are given wherever useful (see
  [this ADR](https://github.com/opinionated-digital-center/architecture-decision-records/blob/master/docs/adr/0001-use-markdown-architectural-decision-records.md)
  as an example).

### Crafted and Tested

* No code is delivered without a
  [full test suite](https://github.com/opinionated-digital-center/python-library-project-generator/blob/master/README.rst#fully-tested-features).
* We aim at staying as close as possible to the
  [Software Crafsmanship](https://en.wikipedia.org/wiki/Software_craftsmanship)
  principles and practices.

### As straightforward to set up as possible

* Tooling for automation coupled with detailed documentation is made available
  as often as possible.

## Founders

{% for item in site.data.authors %}
{% if item[1].type == "founder" %}
{% assign author = item[1] %}
{% include author-details.html %}
{% endif %}
{% endfor %}

## Distinguished Contributors
{% for item in site.data.authors %}
{% if item[0] != "esciara" %}
{% assign author = item[1] %}
{% include author-details.html %}
{% endif %}
{% endfor %}


