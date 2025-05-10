# Tic-Tac-Toe

Tämä on yksinkertainen Tic-Tac-Toe-peli, jossa pelaaja voi pelata joko toista pelaajaa vastaan tai tekoälyä vastaan. Pelissä on mahdollisuus muuttaa pelilaudan kokoa, valita teema (vaalea/tumma) ja säätää tekoälyn vaikeustasoa.

## Toiminnallisuus

- **Kahden pelaajan pelitila**: Pelaajat voivat pelata toisiaan vastaan.
- **Tekoäly-vastustaja**: Pelissä on tekoäly (AI), joka voi pelata pelaajaa vastaan. Tekoälyn vaikeusaste on säädettävissä kolmelle tasolle:
  - **Helppo**: Tekoäly tekee satunnaisia siirtoja.
  - **Keskitaso**: Tekoäly yrittää estää pelaajaa voittamasta.
  - **Vaikea**: Tekoäly käyttää parannettua strategiaa.
- **Pelilaudan koko**: Voit valita pelilaudan koon (3x3, 4x4 tai 5x5).
- **Teema**: Voit vaihtaa pelin vaalean ja tumman teeman välillä.

## Pelin aloitus

1. **Tallenna tiedostot**:
   - Tallenna seuraavat tiedostot samassa kansiossa:
     - `index.html`
     - `style.css`
     - `script.js`
2. **Avaa `index.html` tiedosto selaimessa** pelin aloittamiseksi.

## Pelin säännöt

1. Pelaajat vuorottelevat siirroilla pelilaudalla.
2. Pelissä voi voittaa, kun samalle riville, sarakkeelle tai kulmaan saadaan kolme samaa merkkiä (X tai O).
3. Peli päättyy tasapeliin, jos kaikki ruudut on täytetty ilman voittajaa.

## Asetukset

Pelin asetuksista voit muuttaa seuraavia asioita:

- **Pelilaudan koko**: Valitse 3x3, 4x4 tai 5x5 pelilauta.
- **Teema**: Vaihda vaalea tai tumma teema pelissä.
- **Tekoälyn vaikeusaste**: Valitse helppo, keskitaso tai vaikea tekoäly.

Asetukset ovat käytettävissä **Asetukset**-nappulan kautta, joka avaa ja sulkee asetuspaneelin.

## Teknologiat

Tämä peli on rakennettu käyttäen seuraavia teknologioita:

- **HTML5**: Pelin rakenne.
- **CSS3**: Pelin ulkoasu ja tyyli.
- **JavaScript**: Pelin logiikka ja tekoäly.

## Tulevat parannukset

- **Minmax-algoritmi**: Parannettu tekoäly, joka käyttää minmax-algoritmia valitakseen optimaalisen siirron.
- **Moninpeli verkossa**: Mahdollisuus pelata toista pelaajaa vastaan verkossa.
- **Tekoälyn parantaminen**: Kehitetään tekoälyn reagointikykyä vaikeimmilla tasoilla.

## Lisenssi

Tämä projekti on avoimen lähdekoodin projekti. Käytä vapaasti ja tee omia parannuksia, mutta muista mainita alkuperäinen lähde.

