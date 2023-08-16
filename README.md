# EPF_Reseaux Informations

## Table of contents

- [Introduction](#introduction)
- [About](#about)
- [Installing and running the program](#installing-and-running-the-program)
    - [Installing](#installing)
    - [Running](#running)
    - [How to use git](#how-to-use-git)
- [Contribute to the project](#contribute-to-the-project)
    - [Road Map](#road-map)
    - [Goals](#goals)
- [Further description of components](#further-description-of-components)
    - [API](#api)
        - [overview](#overview)
        - [create user](#post-create-user)
        - [show user](#post-show-user)
    - [Database](#database)
        - [Fonctionnement](#fonctionnement)
        - [Routes](#routes)


## Introduction

`EPF_Reseaux` aims to provide EPF students with an intranet. It enables students to communicate with each other and with campus associations.


## About

`EPF_reseaux` runs on a Linux server. The API (Application Programming Interface) is coded in Node.js. The database is hosted on [mongodb](https://www.mongodb.com).


## Installing and running the program

As the program runs under Linux, it must be installed in a Linux environment. Then, to run it, you'll need to connect it to the database.


### Installing

To install the program, you need :

1. if you are using Windows, [install Windows Subsystem for Linux](https://lecrabeinfo.net/windows-11-installer-wsl-windows-subsystem-for-linux.html) (`WSL`).

2. Then install a Linux distribution `Ubuntu` :
```bash
wsl --install -d Ubuntu
```

3. Clone the 'EPF_reseaux' file into one of Ubuntu's folders :
```bash
git clone https://github.com/mab1o/EPF_Reseaux.git # Git is already installed on Ubuntu
```


### Running

1. Install Node Version Manager (`nvm`)

2. Install Node Package Manager (`npm`) :

```bash
nvm install 16  # installs Node.js version 16
```

3. Installer les bibliothèques nécessaire dans /front et /api

```bash
npm i
```

4. Create config.js files in /front and .env files in /api

config.js
```bash
const config = {
  IP_API: '',   # add the value of IP_API
  IP_FRONT: ''  # add the value of IP_FRONT
};

export default config;
```

.env
```bash
MONGODB_URL=""      # add value 
JWT_TOKEN=""        # add value 
JWT_ALGORITHM=""    # add value
JWT_AUDIENCE=""     # add value
JWT_EXPIRES_IN=""   # add value
JWT_ISSUER=""       # add value
NODE_ENV=""         # add value
```

5. Launch the site

Start the application dev with :

```bash
npm run start
```

Created the dist with :

```bash
npm run dist
```

Analyse the coding rules with :

```bash
npm run lint
```

Production mode for API :
```bash
npm run prod
```

Dev mode for API :
```bash
npm run dev
```


### How to use git

As this project is made by students for students, here's a quick reminder of how to use `Git` and `Github`.

- Customize your `Git` with, for example :

```bash
git config user.name "John Doe"             # add a user name
git config user.email "John.Doe@gmail.com"  # add a user email
git config --list                           # to view all parameters
```

- Adding and deleting shortcuts

```bash
git remote remove origin                                        # delete the shortcut origin
git remote add origin git@github.com:Esscraye/EPF_Reseaux.git   # add the shortcut origin
git remote add git@github.com:PSEUDO/EPF_Reseaux.git            # add the shortcut upstream
git remote -v                                                   # to view all shortcuts
```

- Submit a modification (currently all modifications are made on the `devel` branch)

```bash
git status                      # check staged files
git add exp.txt                 # stage modifications
git commit -m "mon message"     # commit files
git push upstream devel         # push on the devel branch
```

- Update local directory

```bash
git fetch --all          # get the latest version
git rebase origin/devel  # validate latest version
```

## Contribute to the project

Would you like to contribute to the project? Here are some ways you can help!


### Road Map
This is a list of the features planned for `EPF_Reseaux`:

- [ ] bcrypt : password hash
- [ ] Logout button
- [ ] create an automatic url for each association
- [ ] CGU - legal terms


### Goals

- Inscription
    - [ ] Création d'un compte
    - [ ] Vérification de l'adresse mail
    - [ ] Connexion au compte

- Connexion
    - [ ] Connexion au compte

- Mot de passe oublié
    - [ ] Envoie d'un mail de réinitialisation du mot de passe
    - [ ] Réinitialisation du mot de passe

- Accueil
    - [ ] Liste des discussions
    - [ ] Création d'une discussion

- Discussion
    - [ ] Liste des messages
    - [ ] Ajout d'un message
    - [ ] Suppression d'un message
    - [ ] Ajout d'un fichier
    - [ ] Suppression d'un fichier
    - [ ] Suppression de la discussion
    - [ ] Ajout d'un membre
    - [ ] Suppression d'un membre
    - [ ] Modification du nom de la discussion

- Profil
    - [ ] Modification du nom
    - [ ] Modification de l'adresse mail
    - [ ] Modification du mot de passe
    - [ ] Suppression du compte
    - [ ] Déconnexion

- Admin
    - [ ] Liste des utilisateurs
    - [ ] Ajout d'un utilisateur
    - [ ] Modification d'un utilisateur
    - [ ] Suppression d'un utilisateur
    - [ ] Liste des discussions
    - [ ] Ajout d'une discussion
    - [ ] Modification d'une discussion
    - [ ] Suppression d'une discussion
    - [ ] Liste des messages
    - [ ] Ajout d'un message
    - [ ] Modification d'un message
    - [ ] Suppression d'un message



## Further description of components


### API


#### Overview
The API allows users to retrieve all of the users of the application in micro service through a REST architecture. This API will be mainly used for registed Accounts.

It will also create own users to recover data to the platform but is in no way related to the users collected via the crawling of profiles on Social Networks.


#### [POST] Create user
Allows the creation of a single user.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : POST → user/create

Parameters :
```javascript
{
  'firstname': String, // Optional
  'lastname': Number, // Optional
  'age': Number, // Optional
  'city': String // Optional
}
```

Response :
```javascript
  {
    id: Object_ID,
    firstname: String,
    lastname: String,
    age: Number,
    city: String
  }
```


#### [POST] Show user
Show an user by id.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : GET → user/show/:id

Parameters :
```javascript
{
  id: String // Required
}
```

Response :
```javascript
  {
    id: Object_ID,
    firstname: String,
    lastname: String,
    age: Number,
    city: String
  }
```


#### Requirements
* node 18
* npm or yarn or pnpm
* git
* mongodb (please configure config.js for link mongodb)


### Database

#### Fonctionnement


<h4>Discussion</h4>

| composant | type | description |
| :--- | :--- | :--- |
| name | `string` | nom de la discussion |
| icon | `string` | path de l'icone de la discussion |
| members | `[{ObjectId, ref: 'User'}]` | liste des membres de la discussion |


<h4>Message</h4>

| composant | type | description |
| :--- | :--- | :--- |
| content | `string` | contenu du message |
| author | `{ObjectId, ref: 'User'}` | auteur du message |
| fromDiscussion | `{ObjectId, ref: 'Discussion'}` | discussion associée |


<h4>User</h4>

| composant | type | description |
| :--- | :--- | :--- |
| email | `string` | email |
| firstname | `string` | prénom |
| lastname | `string` | nom |
| password | `string` | mot de passe |
| isAdmin | `boolean` | détermine si l'utilisateur est admin |
| discussions | `[{ObjectId, ref: 'Discussion'}]` | liste des discussions de l'utilisateur |
| messages | `[{ObjectId, ref: 'Message'}]` | liste des messages de l'utilisateur |


#### **Routes**

- Users

| route | method | description |
| :--- | :--- | :--- |
| `/user/login` | `POST` | connexion d'un utilisateur |
| `/user/register` | `POST` | inscription d'un utilisateur |
| `/user/forgotPassword` | `POST` | demande de réinitialisation du mot de passe |
| `/user/` | `GET` | récupération des utilisateurs |
| `/user/:id` | `GET` | récupération d'un utilisateur |
| `/user/:id` | `PUT` | modification d'un utilisateur |
| `/user/:id` | `DELETE` | suppression d'un utilisateur |

- Discussions

| route | method | description |
| :--- | :--- | :--- |
| `/discussion/` | `GET` | récupération des discussions |
| `/discussion/:id` | `GET` | récupération d'une discussion |
| `/discussion/` | `POST` | création d'une discussion |
| `/discussion/:id` | `PUT` | modification d'une discussion |
| `/discussion/:id` | `DELETE` | suppression d'une discussion |

- Messages

| route | method | description |
| :--- | :--- | :--- |
| `/message/` | `GET` | récupération des messages |
| `/message/:id` | `GET` | récupération d'un message |
| `/message/` | `POST` | création d'un message |
| `/message/:id` | `PUT` | modification d'un message |
| `/message/:id` | `DELETE` | suppression d'un message |

- Associations

| route | method | description |
| :--- | :--- | :--- |
| `/association/` | `GET` | récupération des associations |
| `/association/:id` | `GET` | récupération d'une association |
| `/association/` | `POST` | création d'une association |
| `/association/:id` | `PUT` | modification d'une association |
| `/association/:id` | `DELETE` | suppression d'une association |

- SocialNetworks

| route | method | description |
| :--- | :--- | :--- |
| `/socialNetwork/` | `GET` | récupération des réseaux sociaux de toutes les assos |
| `/socialNetwork/:id` | `GET` | récupération des réseaux sociaux de l'asso `id` |
| `/socialNetwork/:id` | `POST` | création des réseaux sociaux pour l'asso `id` |
| `/socialNetwork/:id` | `PUT` | modification des réseaux sociaux pour l'asso `id` |
| `/socialNetwork/:id` | `DELETE` | suppression des réseaux sociaux pour l'asso `id` |

- Events

| route | method | description |
| :--- | :--- | :--- |
| `/event/` | `GET` | récupération des événements |
| `/event/:id` | `GET` | récupération d'un événement |
| `/event/` | `POST` | création d'un événement |
| `/event/:id` | `PUT` | modification d'un événement |
| `/event/:id` | `DELETE` | suppression d'un événement |

- News

| route | method | description |
| :--- | :--- | :--- |
| `/news/` | `GET` | récupération des actualités |
| `/news/:id` | `GET` | récupération d'une actualité |
| `/news/` | `POST` | création d'une actualité |
| `/news/:id` | `PUT` | modification d'une actualité |
| `/news/:id` | `DELETE` | suppression d'une actualité |

- Upload

| route | method | description |
| :--- | :--- | :--- |
| `/upload/` | `POST` | upload d'un fichier |

- Download

| route | method | description |
| :--- | :--- | :--- |
| `/download/:filename` | `GET` | téléchargement d'un fichier |
