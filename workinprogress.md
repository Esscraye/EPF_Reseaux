# **Status du projet :**

## **Travail à faire :**

| Partie     | Description | Etat | Assigné |
| ---------- | ----------- | ---- | ------- |
| Connexion  | Page de connexion avec vérification des identifiants  | En cours   | @louis |
| Discussion | Ouverture du chat de discussion | Non commencé | @Alban |
| Discussion | Ajouter liste utilisateur dans les groupes | Non commencé | @Léo |
| Discussion | Ajouter liste groupe dans la bdd users | Non commencé | @Léo |
| Discussion | Ajouter liste groupe bloqué/appartenant dans la bdd users | Non commencé | @Léo + @maxence + @augustin ? |

## **Rendre le projet fonctionnel :**

| Partie | Description | Etat | Assigné |
| ------ | ------------------------------------------ | ---------- | ------- |
| BDD    | Connexion à une seule bdd avec une seule clé | Non commencé | @léo |

## **Arborescence des pages :**

| Pages | Paths | Exigences | sinon |
| ----- | ----- | --------- | ----- |
| Accueil | `/` | être connecté | redirection vers connexion |
| Connexion | `/connexion` |  |  |
| Discussion | `partout` |  |  |
| Liste Assos | `/assos` | être connecté | redirection vers connexion |
| Page d'une asso | `/assos/:name` | être connecté | redirection vers connexion |
| Profil | `/profil` ou `/profil/:id` | être connecté | redirection vers connexion |

## **Présentation du projet :**

### **Tests du projet :**
- tentative d'accès aux pages sans être connecté
- connexion avec un compte existatnt (vérifier la redirection après connexion)
- ouverture du chat de discussion
- ouverture du chat de discussion à partir d'un deuxième compte
- envoie des messages
- bloquer quelqu'un
- navigation entre les pages, header + footer + boutons
- pages des assos
- ouverture d'une page d'asso à partir de la liste des assos
- page d'asso avec un compte admin + non admin
- test des modifications + créations des éléments
- page de profil
- page de profil avec un compte admin + non admin
- recherche d'un profil
---
- test de la bdd


## **Amélioration du projet :**
- bcrypt : hash des password
- Bouton de déconnexion
- créer une url automatique pour chaque assos
- CGU - mensions légales