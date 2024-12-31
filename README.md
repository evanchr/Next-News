# Next.js News Project Ajout API

## Branche utilisée  
Toutes les modifications liées à l'ajout de l'API météo se trouvent sur la branche **`ajout-api`**.  

## Description du projet  
Ce projet est un site fictif de publication de news développé en **Next.js**. Il fait partie d'une formation que j'ai suivie pour apprendre les concepts et fonctionnalités du framework.  

Bien que j'aie suivi son développement pendant la formation, le design et le code initial du projet ne sont pas de moi. C'est pourquoi le site peut sembler incohérent (contenu en anglais, images générées par IA, etc.). L'objectif principal était d'apprendre et de comprendre le fonctionnement de **Next.js**.

## Fonctionnalité ajoutée : un onglet météo  
Dans le cadre de ce projet, j'ai ajouté une nouvelle fonctionnalité sous la forme d'un composant météo intégré au **header** du site. Ce composant affiche les données météorologiques de plusieurs villes sous forme de texte défilant en boucle.  

Les données sont récupérées depuis l'API publique **OpenWeatherMap**.  

## Configuration de l'API  
Pour utiliser l'API, il faut ajouter un fichier `.env.local` à la racine du projet avec le contenu suivant :  
NEXT_PUBLIC_WEATHER_API_KEY=be65a0fc79ceb2bb7b6ef88593a2a8df

⚠️ **Note** : Bien que cette méthode ne soit pas idéale pour sécuriser une clé d'API, elle convient pour un projet éducatif comme celui-ci.  

## Instructions pour démarrer le projet  
Pour lancer le projet, suivez ces étapes :
1. Clonez la branche **`ajout-api`**.  
2. Installez les dépendances en exécutant :  
   ```bash
   npm install
3. Ajoutez le fichier `.env.local` avec la clé d'API comme décrit plus haut.
4. Démarrez le serveur de développement :
   ```bash
   npm run dev
5. Accédez au site à l'adresse http://localhost:3000.