# Web-ohjelmointi: Blogilista-backend -projekti
## Osa 4, tehtävät 4.1 - 

### *Huomioitavaa*
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
- Komento `npm test` tulostaa seuraavasti, eli testit on läpäisty onnistuneesti:
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

### Tehtävä 4.5: blogilistan testit, step 1
- Toimii ongelmitta.
- Tehty SuperTest-kirjastolla testi blogilistan osoitteeseen `/api/blogs` tapahtuvalle HTTP GET -pyynnölle.
    - Testataan, että sovellus palauttaa oikean määrän JSON-muotoisia blogeja.
    - Testit läpäistään onnistuneesti, testattu komennolla `npm test`:
    ```
     PASS tests/blogs_api.test.js
    √ all blogs are returned (734 ms)
    ```
- Luotu uusi testi tiedostoon [tests/blogs_api.test.js](/tests/blogs_api.test.js).
- Muita osiossa tehtyjä muutoksia:
    - `package.json muokattu`, SuperTest asennettu.
    - [utils/config.js](/utils/config.js) muokattu, lisätty erillinen osoite testitietokannalle.
    - [logger.js](/utils/logger.js) muokattu, ei tulosta ilmoituksia testitilassa.
    - Refaktoroitu blogilistan kaikki blogit palauttava metodi `blogsRouter.get` käyttämään promisejen sijaan async/awaitia.
        - Sijainti: [controllers/blogs.js](/controllers/blogs.js)

### Tehtävä 4.6: blogilistan testit, step 2
- Toimii ongelmitta.
- Tehty testi, joka varmistaa, että sovellukseen voi lisätä blogeja osoitteeseen `/api/blogs` tapahtuvalla `HTTP POST` -pyynnöllä.
    -  Tämä uusi testi myös tiedostossa [tests/blogs_api.test.js](/tests/blogs_api.test.js).
        - Testit läpäistään onnistuneesti, testattu komennolla `npm test`:
    ```
     PASS tests/blogs_api.test.js
    √ a valid blog can be added  (197 ms)
    ```
- Refaktoroitu blogin lisäyksen tietokantaan suorittava metodi `blogsRouter.post` käyttämään promisejen sijaan async/awaitia.

### Tehtävä 4.7: blogilistan laajennus, step1
- Toimii ongelmitta.
- Toteutetty sovellukseen mahdollisuus yksittäisen blogin poistoon metodilla `blogsRouter.delete`.
    - Sijainti: [controllers/blogs.js](/controllers/blogs.js)
    - Lisätty myös [requests/delete_blog.rest](/requests/delete_blog.rest)
    - Lisätty samalla sijaintiin myös metodi `blogsRouter.get` yksittäisen blogin hakemiseen.
- Käytetään async/awaitia ja noudatetaan HTTP-rajapinnassa RESTful-käytänteitä.
- Toteutettu ominaisuudelle myös testit:
    - Testataan, että poiston jälkeen blogeja on yksi vähemmän.
    - Testataan myös, että poiston jälkeen samalla id:llä ei blogia enää löydy.

### Tehtävä 4.8: blogilistan laajennus, step2
- Toimii ongelmitta.
- Toteutettu sovellukseen mahdollisuus yksittäisen blogin muokkaamiseen.
- Käytetään edelleen async/awaitia ja noudatetaan HTTP-rajapinnassa RESTful-käytänteitä.
- Käytetään `express-async-errors` -kirjastoa.
- Lisätty myös [requests/edit_blog.rest](/requests/edit_blog.rest) pyynnön ja toiminnallisuuden testaamiseen.

### Tehtävä 4.9: blogilistan laajennus, step3
- Toimii ongelmitta.
- Toteutettu sovellukseen mahdollisuus luoda käyttäjiä tekemällä HTTP POST -pyyntö osoitteeseen `api/users`.
    - Käyttäjien router: [controllers/users.js](/controllers/users.js)
    - Käyttäjien skeema: [models/users.js](/models/users.js)
    - Käyttäjillä on käyttäjätunnus, salasana ja nimi.
- Lisätty myös [requests/edit_blog.rest](/requests/add_user.rest) pyynnön ja sen toiminnallisuuden testaamiseen.
