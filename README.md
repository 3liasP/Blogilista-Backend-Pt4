# Web-ohjelmointi: Blogilista-backend -projekti
## Osa 4, tehtävät 4.1 - 

### *Tärkeää*
- Ei lisättävää toistaiseksi.

### *Muuta*
- Vanhojen vastauksien `index.js` -tiedostot sisältyvät ja ovat nimetty kunkin tehtävän mukaan (esim. `index-4-1.js` tehtävälle 4.1 jne.).
- Viimeisin vastaus tehtävään on aina tiedostossa `index.js`.
- Vanhat vastaukset ovat lähinnä varmuuskopioita toimivista versioista ja ne demonstroivat työnkulkua.

### Tehtävä 4.1: blogilista step1
- Toimii ongelmitta.
- Sijainnissa: [index-4-1.js](/index-4-1.js)
- Tehty yhteen tiedostoon koodatusta sovellusrungosta toimiva *npm-projekti*.
- Sovellus konfiguroitu suoritettavaksi *nodemonilla*
- Sovellus käyttää MongoDB Atlasissa sijaitsevaa tietokantaa.
- Lisätty ympäristömuuttujat mm. tietokannan URL-osoitteelle ja sovelluksen käytämmälle portille.
- Sovellukseen on mahdollista lisätä blogeja esim. VS Code REST Clientilla ja sovellus näyttää lisätyt blogit.
    - Lisättyjä blogeja voi tarkestella myös osoitteessa `localhost:{portti}/api/blogs`

### Tehtävä 4.2: blogilista step2
- Toimii ongelmitta.
- Toistaiseksi sijainnissa: [index.js](/index.js)
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

### Tehtävä 4.3: apufunktioita ja yksikkötestejä, step1
- Toimii ongelmitta.
- Tehty apufunktio `dummy` tiedostoon [utils/list_helper.js](/utils/list_helper.js)
- Tehty testi tiedostoon [tests/dummy.test.js](/tests/dummy.test.js)
- Komento `npm test` tulostaa seuraavasti, eli testi on läpäisty onnistuneesti:
```
> part4-bloglist-backend@0.0.1 test
> jest --verbose

PASS  tests/dummy.test.js
  √ dummy returns one (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.93 s
Ran all test suites.
```

### Tehtävä 4.4: apufunktioita ja yksikkötestejä, step2
- Toimii ongelmitta.
- Tehty apufunktio `totalLikes` tiedostoon [utils/list_helper.js](/utils/list_helper.js)
    - Funktio palauttaa blogien yhteenlaskettujen tykkäysten eli likejen määrän.
- Määritelty funktiolle sopivat testit:
    - Tyhjä lista palauttaa nollan.
    - Yhden blogin sisältävän listan yhteistykkäykset vastaavat kyseisen blogin tykkäysten määrää.
    - Erään isomman blogilistan tykkäykset lasketaan oikein.
- Testit on sijoitettu describe-lohkoon tiedostossa [tests/totalLikes.test.js](/tests/totalLikes.test.js)
- Komento `npm test` tulostaa seuraavasti, eli testi on läpäisty onnistuneesti:
```
> part4-bloglist-backend@0.0.1 test
> jest --verbose

PASS  tests/dummy.test.js
  √ dummy returns one (5 ms)

PASS  tests/totalLikes.test.js
 √ when list has only one blog equals the likes of that (2 ms) 
 √ when list has no blogs equals the likes 0 
 √ when list has multiple blogs equals the likes the sum of all likes (1 ms) 
 
Test Suites: 2 passed, 2 total
Tests: 4 passed, 4 total
Snapshots: 0 total
Time: 3.172 s
Ran all test suites.
```

