# **Status du projet :**

## **Fonctionnement de la BDD mongodb :**
<center>
</br>
<h3><b>Discussion</b></h3>

| composant | type | description |
| :--- | :--- | :--- |
| name | `string` | nom de la discussion |
| icon | `string` | path de l'icone de la discussion |
| members | `[{ObjectId, ref: 'User'}]` | liste des membres de la discussion |

</br>
<h3 align="center"><b>Message</b></h3>

| composant | type | description |
| :--- | :--- | :--- |
| content | `string` | contenu du message |
| author | `{ObjectId, ref: 'User'}` | auteur du message |
| fromDiscussion | `{ObjectId, ref: 'Discussion'}` | discussion associée |

</br>
<h3 align="center"><b>User</b></h3>

| composant | type | description |
| :--- | :--- | :--- |
| email | `string` | email |
| firstname | `string` | prénom |
| lastname | `string` | nom |
| password | `string` | mot de passe |
| isAdmin | `boolean` | détermine si l'utilisateur est admin |
| discussions | `[{ObjectId, ref: 'Discussion'}]` | liste des discussions de l'utilisateur |
| messages | `[{ObjectId, ref: 'Message'}]` | liste des messages de l'utilisateur |

</center>

## **Routes :**

- **Users**

| route | method | description |
| :--- | :--- | :--- |
| `/user/login` | `POST` | connexion d'un utilisateur |
| `/user/register` | `POST` | inscription d'un utilisateur |
| `/user/forgotPassword` | `POST` | demande de réinitialisation du mot de passe |
| `/user/` | `GET` | récupération des utilisateurs |
| `/user/:id` | `GET` | récupération d'un utilisateur |
| `/user/:id` | `PUT` | modification d'un utilisateur |
| `/user/:id` | `DELETE` | suppression d'un utilisateur |

- **Discussions**

| route | method | description |
| :--- | :--- | :--- |
| `/discussion/` | `GET` | récupération des discussions |
| `/discussion/:id` | `GET` | récupération d'une discussion |
| `/discussion/` | `POST` | création d'une discussion |
| `/discussion/:id` | `PUT` | modification d'une discussion |
| `/discussion/:id` | `DELETE` | suppression d'une discussion |

- **Messages**

| route | method | description |
| :--- | :--- | :--- |
| `/message/` | `GET` | récupération des messages |
| `/message/:id` | `GET` | récupération d'un message |
| `/message/` | `POST` | création d'un message |
| `/message/:id` | `PUT` | modification d'un message |
| `/message/:id` | `DELETE` | suppression d'un message |

- **Associations**

| route | method | description |
| :--- | :--- | :--- |
| `/association/` | `GET` | récupération des associations |
| `/association/:id` | `GET` | récupération d'une association |
| `/association/` | `POST` | création d'une association |
| `/association/:id` | `PUT` | modification d'une association |
| `/association/:id` | `DELETE` | suppression d'une association |

- **SocialNetworks**

| route | method | description |
| :--- | :--- | :--- |
| `/socialNetwork/` | `GET` | récupération des réseaux sociaux de toutes les assos |
| `/socialNetwork/:id` | `GET` | récupération des réseaux sociaux de l'asso `id` |
| `/socialNetwork/:id` | `POST` | création des réseaux sociaux pour l'asso `id` |
| `/socialNetwork/:id` | `PUT` | modification des réseaux sociaux pour l'asso `id` |
| `/socialNetwork/:id` | `DELETE` | suppression des réseaux sociaux pour l'asso `id` |

- **Events**

| route | method | description |
| :--- | :--- | :--- |
| `/event/` | `GET` | récupération des événements |
| `/event/:id` | `GET` | récupération d'un événement |
| `/event/` | `POST` | création d'un événement |
| `/event/:id` | `PUT` | modification d'un événement |
| `/event/:id` | `DELETE` | suppression d'un événement |

- **News**

| route | method | description |
| :--- | :--- | :--- |
| `/news/` | `GET` | récupération des actualités |
| `/news/:id` | `GET` | récupération d'une actualité |
| `/news/` | `POST` | création d'une actualité |
| `/news/:id` | `PUT` | modification d'une actualité |
| `/news/:id` | `DELETE` | suppression d'une actualité |

- **Upload**

| route | method | description |
| :--- | :--- | :--- |
| `/upload/` | `POST` | upload d'un fichier |

- **Download**

| route | method | description |
| :--- | :--- | :--- |
| `/download/:filename` | `GET` | téléchargement d'un fichier |

## **Fonctionnement de l'application :**
- **Inscription :**
    - Création d'un compte
    - Vérification de l'adresse mail
    - Connexion au compte
- **Connexion :**
    - Connexion au compte
- **Mot de passe oublié :**
    - Envoie d'un mail de réinitialisation du mot de passe
    - Réinitialisation du mot de passe
- **Accueil :**
    - Liste des discussions
    - Création d'une discussion
- **Discussion :**
    - Liste des messages
    - Ajout d'un message
    - Suppression d'un message
    - Ajout d'un fichier
    - Suppression d'un fichier
    - Suppression de la discussion
    - Ajout d'un membre
    - Suppression d'un membre
    - Modification du nom de la discussion
- **Profil :**
    - Modification du nom
    - Modification de l'adresse mail
    - Modification du mot de passe
    - Suppression du compte
    - Déconnexion
- **Admin :**
    - Liste des utilisateurs
    - Ajout d'un utilisateur
    - Modification d'un utilisateur
    - Suppression d'un utilisateur
    - Liste des discussions
    - Ajout d'une discussion
    - Modification d'une discussion
    - Suppression d'une discussion
    - Liste des messages
    - Ajout d'un message
    - Modification d'un message
    - Suppression d'un message


## **Amélioration du projet :**
- bcrypt : hash des password
- Bouton de déconnexion
- créer une url automatique pour chaque assos
- CGU - mensions légales