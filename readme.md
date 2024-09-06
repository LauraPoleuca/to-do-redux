Rularea aplicatiei se realizeaza prin rularea simultana a celor doua module ale aplicatiei, client si server.
Ambele sunt construite la baza folosind npm, astfel incat instalarea dependintelor se realizeaza ruland in fiecare folder comanda "npm install". 
Pe baza fisierelor packagelock.json se vor pregati dependintele necesare pentru a putea rula aplicatia.
Comanda "npm start" va fi folosita in ambele foldere pentru a rula aplicatiile. 

Dependinte client:
 - axios: realizarea request-urilor catre server
 - font-awesome: folosirea unor iconite pentru design-ul aplicatiei
 - react-redux, redux: management-ul state-ului aplicatie
 - redux-thunk: middleware pentru interactiunea cu react-redux,

Dependinte server:
 - body-parser: parsarea continutului din body-ul cererilor http
 - cors: permite modificarea policy-ului de cors pentru a putea executa request-uri (din client) folosind adresa locala
 - dotenv: permite folosirea si citirea fisierelor .env pentru a stoca credentialele de acces la baza de date
 - express: framework pentru dezvoltarea aplicatiilor web
 - mongodb: conectare la baza de date
 - mongoose: utilizarea schemelor de mongodb din node.js
 - nodemon: monitorizeaza schimbari in fisiere si reporneste server-ul de node.js