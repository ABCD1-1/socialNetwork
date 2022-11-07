# MongoDB

1. Télécharger et installer MongoDB Compass sur https://www.mongodb.com/try/download/compass2
   (MongoDB Compass est une interface utilisateur graphique pour visualiser et interagir avec les données MongoDB)

2. Mettre en place la base de données sur le cloud MongoDB

- S'inscrire ou se connecter sur https://www.mongodb.com/cloud/atlas/register
- Cliquer sur "Build a Database" pour créer une base de données
- Choisir le forfait souhaité (le forfait Shared est gratuit)
- Laisser les paramètres par défaut et cliquer sur Create Cluster
- Définir un utilisateur avec username et mot de passe
- Cliquer sur Database dans le menu, puis cliquer sur "Connect" dans le cluster créé (Cluster0 par défaut)
- Cliquer sur "Add Your Current IP Address" et ajouter votre addresse IP
- Cliquer sur "Chosse a connection method", puis cliquer sur MongoDB Compass
- Cliquer sur "I have MongoDB Compass"
- Copier le lien proposé
  (exemple : 
  mongodb+srv://YOURUSERNAME:<password>@cluster0.yeivbdp.mongodb.net/socialNetworkDB
  )

3. Utiliser MongoDB Compass

- Ouvrir MongoDB Compass
- Copier coller le lien dans l'espace dédié URI, et mettez à jour le mot de passe dans le lien
  (exemple: 
  mongodb+srv://YOURUSERNAME:YOURPASSWORD@cluster0.yeivbdp.mongodb.net/socialNetworkDB
  )
- Cliquer sur "Connect"

4. À présent, dans le projet :

- Ouvrir le fichier config/.env
- Compléter la ligne DB_USER_PASS= avec le lien mis à jour utilisé précédemment
  (exemple : 
  DB_USER_PASS=mongodb+srv://YOURUSERNAME:YOURPASSWORD@cluster0.yeivbdp.mongodb.net/socialNetworkDB
  )
- Vous pouvez modifier le contenu de TOKEN_SECRET avec la valeur aléatoire que vous souhaitez (cette valeur sera utilisée pour crypter des tokens)

5. À partir de la racine du projet, ouvrir un terminal et la commande suivante pour lancer le Back :
   npm start

6. Ouvrir un autre terminal, se déplacer dans le dossier client et lancer le Front :
   cd client
   npm start

7. En naviguant dans l'url http://localhost:3000/, vous pouvez à présent créer des utilisateurs, vous connecter, poster, commenter, liker, suivre d'autres utilisateurs, etc. !

#
