---
title: "Architecture Decision Records are not Architecture Records"
date: 2020-07-25
author: slequeux
categories:
  - blog
tags:
  - knowledge management
toc: true
---

# Les ADRs ne sont pas des AR

Lorsque j'ai découvert les Architecture Decision Records (ADRs) il y a un an, cela a été pour moi une réelle évolution dans la façon de gérer de la documentation.
Je me suis retrouvé à vouloir en écrire pour tout et n'importe quoi.
Mais j'ai fini par douter : et si tout ce que j'écrivais dans ces ADRs n'y avait pas forcément sa place.

Pour résumer le contenu de cet article :
**les ADRs ne sont pas des Architecture Records**.

Prenez les deux exemples suivants d'information relatives à l'architecture.
Essayez de deviner laquelle des deux (ou les deux, ou aucune) a sa place dans un ADR.
1. Voici les tables de la base de données par découpage fonctionnel
1. Les schémas de base de données commencent par tel préfixe
Nous reviendrons dessus en fin d'article.

## Trop d'information tue l'information

Imaginons une situation représentative d'une équipe qui documente tout dans des ADRs.
Je souhaite documenter une décision sur un choix peu habituel que l'équipe a fait sur la base de données.
Il y a dans ce projet plusieurs dizaines d'ADRs qui concernent la base de données (schémas, tables, nomenclatures, dénormalisation des tables, ...).
Il me sera alors très compliqué de :
- identifier un potentiel ADR qui doit être mis à jour en lieu et place d'en créer un nouveau.
- identifier un potentiel ADR qui serait en conflit avec le choix de l'équipe.

Une grande quantité d'information diluera par définition chaque information : `"Trop d'information tue l'information"`.
Il est donc nécessaire de conserver un nombre d'ADR humainement maintenable si on souhaite qu'ils soient utiles.

## Un n-ième moyen de documentation

Une décision d'architecture implique par essence l'équipe de développement.
Elle devrait être co-construite avec elle, voire être sous sa responsabilité.

Je me suis souvent retrouvé dans des environnements dans lesquels les personnes impliquées dans la mise à jour de la documentation d'architecture ne font pas partie de l'équipe de développement.
Pire, parfois, ces personnes n'ont même pas un profil de développeur et font donc des choix sans une connaissance complète du sujet.
Les ADRs sont souvent gérés par des outils de type GIT.
Les pratiques qui sont associées à ces outils (gestion de branches, gestion de merge/pull requests, ...) représentent donc un obstacle pour ces personnes.

Pour la documentation d'architecture, ces personnes ont des habitudes et savent travailler efficacement avec des outils de gestion documentaire plus classiques.
Il n'est donc pas utile d'ajouter un n-ième moyen de documentation.

## Une structure pas forcément adaptée

Un ADR sert à identifier les décisions d'architecture.
Habituellement, un ADR vient avec un template type dans chaque projet.
Les différents templates que l'on trouve (MADR, ...) contiennent généralement des sections comme les différentes options envisagées, les conséquences des choix ...

La structure de ces templates n'est clairement pas adaptés à toutes les documentations d'architecture.
Prenons comme exemple la configuration attendue du firewall d'entreprise.
Cette section qui décrit, par envrionnements les ports à ouvrir entre les différentes machines serait compliqué à représenter dans un ADR et ne relève pas d'une décision d'architecture.

## Un ADR est un choix qui peut être remis en cause

Nous avons vu pourquoi une décision d'architecture n'est pas documentée de la même façon que l'architecture dans sa globalité.
Mais qu'est-ce qui pourrait me mettre la puce à l'oreille quand je suis en train d'écrire de la documentation d'architecture dans un ADR ?

A propos d'une information; si un futur (ou actuel) membre de l'équipe peut ne pas apprécier ce que j'écris et préférerait autre chose, alors il s'agira probablement d'un ADR.
Ainsi, en le documentant, je pourrais au moins faire comprendre à cette personne pourquoi ce choix lui ait imposé.
Elle pourra de plus challenger ce choix si la connaissance de la situation a changé.

Si l'information que je suis en train d'écrire ne pourra pas être remis en cause si la situation évolue, alors cette information ne devrait pas être placée dans un ADR.

En appliquant cette approche, parmi les deux exemples donnés en introduction
1. `Voici les tables de la base de données par découpage fonctionnel`n'a pas sa place dans un ADR.
   > La liste des tables de la base de données n'est pas une décision en soit et ne peut pas être remise en cause.
1. `Les schémas de base de données commencent par tel préfixe` a sa place dans un ADR.
   > Il s'agit en effet d'une décision pouvant être remise en cause si l'argumentaire qu'elle fournie évolue.