# Web-ohjelmointi: Blogilista-backend -projekti
## Osa 4, tehtävät 4.1 - 

### *Tärkeää*
- Ei lisättävää toistaiseksi.

### *Muuta*
- Vanhojen vastauksien `index.js` -tiedostot sisältyvät ja ovat nimetty kunkin tehtävän mukaan (esim. `index-4-2.js` tehtävälle 4.2 jne.).
- Viimeisin vastaus tehtävään on aina tiedostossa `index.js`.
- Vanhat vastaukset ovat lähinnä varmuuskopioita toimivista versioista ja ne demonstroivat työnkulkua.

### Tehtävä 4.1, blogilista step1
- Toimii ongelmitta.
- Tehty yhteen tiedostoon koodatusta sovellusrungosta toimiva *npm-projekti*.
- Sovellus konfiguroitu suoritettavaksi *nodemonilla*
- Sovellus käyttää MongoDB Atlasissa sijaitsevaa tietokantaa.
- Lisätty ympäristömuuttujat mm. tietokannan URL-osoitteelle ja sovelluksen käytämmälle portille.
- Sovellukseen on mahdollista lisätä blogeja esim. VS Code REST Clientilla ja sovellus näyttää lisätyt blogit.
    - Lisättyjä blogeja voi tarkestella myös osoitteessa `localhost:{portti}/api/blogs`

### Tehtävä 4.2, blogilista step2
- Toimii ongelmitta.
- Sovelluksen koodi jaettu useaan moduuliin.
- Virheiden käsittely keskitetty middlewareen.
- Sovelluksen hakemistorakenne muutettu seuraavanlaiseksi:
```
├── index.js
├── app.js
├── controllers
│   └── blogs.js
├── models
│   └── blog.js
├── package-lock.json
├── package.json
├── utils
│   ├── config.js
│   └── logger.js  
│   └── middleware.js  
```

