---
layout: default
title: Dependency Inversion
---

# Dependency Inversion Principle anwenden

Der Service hängt aktuell direkt vom Panache-Repository ab -- einer konkreten Infrastruktur-Klasse. Nach dem Dependency Inversion Principle sollte der Service stattdessen von einer Abstraktion abhängen, die in der Domäne definiert ist.

## 🎯 Lernziele

* Du verstehst das Dependency Inversion Principle (DIP) und kannst es am konkreten Beispiel anwenden.
* Du erkennst den Unterschied zwischen einer Abhängigkeit zur Infrastruktur und einer Abhängigkeit zu einer domänendefinierten Abstraktion.
* Du kannst ein Interface als DAO (Data Access Object) definieren und eine Hibernate-basierte Implementierung dafür bereitstellen.
* Du verstehst, wie `@Transactional` an der richtigen Stelle eingesetzt wird.

## ✅ Definition of Done

* [ ] Es existiert ein Interface `RecipesDao` mit Methoden wie `findAll()`, `findById()` und `save()`.
* [ ] Eine Klasse `RecipesDaoHibernateImpl` implementiert dieses Interface und delegiert an das Panache-Repository.
* [ ] `@Transactional` ist in der DAO-Implementierung platziert, nicht mehr im Service.
* [ ] Der Service hängt nur noch vom Interface ab, nicht von der konkreten Implementierung.
* [ ] Alle Tests laufen weiterhin erfolgreich.
* [ ] Du hast die Reflexionsfragen schriftlich beantwortet.

## 🪜 Arbeitsschritte

1. Definiere ein Interface `RecipesDao` mit den nötigen Methoden.
2. Erstelle eine `RecipesDaoHibernateImpl`, die das Interface implementiert und das Repository nutzt.
3. Passe den Service an, sodass er das Interface statt des Repositories verwendet.
4. Verschiebe `@Transactional` in die DAO-Implementierung.

## 🤔 Reflexionsfragen

* Warum gehört das `RecipesDao`-Interface zur Domäne und nicht zur Infrastruktur? Was wäre der Nachteil, wenn das Interface im selben Paket wie die Hibernate-Implementierung läge?
* Wie erkennt CDI automatisch, welche Implementierung für das Interface injiziert werden soll?
* Warum ist `@Transactional` in der DAO-Implementierung besser aufgehoben als im Service? In welchen Fällen könnte man das anders entscheiden?
* Wie würde sich das Design ändern, wenn wir statt Hibernate eine andere Persistenzlösung (z.B. MongoDB) einsetzen wollten?
