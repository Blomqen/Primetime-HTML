## Download
### Manuellt
- Ladda ner https://github.com/Blomqen/Primetime-HTML/archive/master.zip
- Unzippa och byt namn på mappen till primetime

### Använd Git
```
git clone git@github.com:Blomqen/Primetime-HTML.git primetime
```
## Primetime-HTML
En kopia av det populära frågesportspelet Primetime fast kodat i javascript.

## Setup
1. Du kommer behöva en http-server för att folk ska kunna komma in på sidan. (Hemsidan är designad för mobiltelefoner)
2. Skapa en mapp som heter primetime, lägg in alla filer där förutom mappen som heter ute den behöver ligga som en egen mapp.
3. Ladda upp på din http-server och sätt tiden till när du vill att quizet ska starta i time.js filen.

## Settings
Frågorna kan du ändra i fragor/fraga#.html  /Du får också ändra vilket alternativ som ska vara rätt genom att byta onclick.
Onclick="correct()" för rätt svar och onclick="fel()" för fel svar.<br>
Om du vill ändra tiden för varje fråga får du ändra det själv i javascript/sida#.js

## Förvarning
Det är bara det första svaret du klickar på som registrerar, byter man svar efter att man klickat första gången så registreras det inte.

## Particles
Particles is made by soulwire : https://github.com/soulwire/sketch.js
<br> Tillagd för att ha någon typ av verifikation när folk vinner så det inte är en screenshot

## Kontakt
För frågor om mjukvaran eller rättslig kontakt<br>
Mail: contact@blomqen.se
