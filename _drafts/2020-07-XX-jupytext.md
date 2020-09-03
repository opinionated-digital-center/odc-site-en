---
title: "Jupytext: versionner efficacement ses notebooks Jupyter"
date: 2020-07-25
author: slequeux
categories:
  - blog
tags:
  - knowledge management
toc: true
---

Plan :

1. Problématique : comment versionner efficacement un notebook.
   - ne pas avoir de modif à chaque réexécution du notebook
   - ne pas commiter de la data sensible par inadvertance
   - Fonctionnement d'un fichier ipynb => mélange input et output

1. Présentation de jupytext
   - Installation
   - Utilisation
   - Versionner uniquement les `.py`
   - Impact négatif (ou positif suivant le point de vue) sur les notebooks versionnés : pas de versionning des  output / dataviz résultantes
   - Impact positif : refactoring facile depuis l'IDE
