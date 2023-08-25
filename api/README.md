# API Users

## Overview
The API allows users to retrieve all of the users of the application in micro service through a REST architecture. This API will be mainly used for registed Accounts.

It will also create own users to recover data to the platform but is in no way related to the users collected via the crawling of profiles on Social Networks.

### [POST] Create user
Allows the creation of a single user.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : POST → user/create

#### Parameters :
```javascript
{
  'firstname': String, // Optional
  'lastname': Number, // Optional
  'age': Number, // Optional
  'city': String // Optional
}
```

#### Response :
```javascript
  {
    id: Object_ID,
    firstname: String,
    lastname: String,
    age: Number,
    city: String
  }
```

### [POST] Show user
Show an user by id.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : GET → user/show/:id

#### Parameters :
```javascript
{
  id: String // Required
}
```

#### Response :
```javascript
  {
    id: Object_ID,
    firstname: String,
    lastname: String,
    age: Number,
    city: String
  }
```

### Requirements
* node 18
* npm or yarn or pnpm
* git
* mongodb (please configure config.js for link mongodb)

### Install
```npm i```

### Production mode
```npm run prod```

### Dev mode
```npm run dev```

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