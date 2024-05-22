- [Dynamic Techniques](#dynamic-techniques)
  - [Collaboration-based Test Approaches](#collaboration-based-test-approaches)
    - [User Acceptance Testing (UAT)](#user-acceptance-testing-uat)
    - [Collaborative User Story Writing](#collaborative-user-story-writing)
    - [Alpha and Beta Testing](#alpha-and-beta-testing)
  - [Black-box Testing Techniques](#black-box-testing-techniques)
    - [Equivalence Partitioning](#equivalence-partitioning)
    - [Boundary Value Analysis](#boundary-value-analysis)
    - [Decision Table Testing](#decision-table-testing)
    - [State Transition Testing](#state-transition-testing)
  - [Experience-based Techniques](#experience-based-techniques)
    - [Error Guessing](#error-guessing)
    - [Exploratory Testing](#exploratory-testing)
    - [Checklist-Based Testing](#checklist-based-testing)
    - [Smoke and Sanity Testing](#smoke-and-sanity-testing)
  - [White-box Testing Techniques](#)
    - [Statement Testing and Coverage](#)
    - [Decision Testing and Coverage](#)
    - [Branch Testing](#)
    - [Graph-Based Testing](#)
    - [Path Testing](#)
  - [Confirmation Testing](#)
    - [Re-testing](#)
    - [Regression Testing](#)

# Dynamic Techniques

**Explanation:**

Dinaminiai metodai - tai programinės įrangos kūrimo metodai, susiję su programinės įrangos vykdymu. Šie metodai naudojami programinės įrangos funkcinei elgsenai patvirtinti, siekiant užtikrinti, kad ji veiktų taip, kaip tikėtasi. Jie dažnai naudojami kartu su statiniais metodais, kurie naudojami nevykdant programinės įrangos.

**Key Concepts:**

1. **Bendradarbiavimu pagrįsti testavimo metodai:** Pagal šiuos metodus komanda dirba kartu rašydama naudotojų istorijas, atlikdama naudotojų priėmimo testavimą ir alfa bei beta testavimą.

2. **Black-box testavimo metodai:** Šie metodai, pavyzdžiui, lygiavertiškumo skaidymas, ribinių verčių analizė ir sprendimų lentelės testavimas, sutelkia dėmesį į programinės įrangos funkcionalumą, neatsižvelgiant į jos vidinę struktūrą.

3. **Įgūdžiais pagrįsti metodai:** Šie metodai, įskaitant klaidų spėjimą, žvalgomąjį testavimą ir kontroliniais sąrašais pagrįstą testavimą, remiasi testuotojo patirtimi ir žiniomis.

4. **Baltojo testavimo metodai:** Šie metodai, pavyzdžiui, teiginių testavimas ir aprėptis, sprendimų testavimas ir aprėptis bei kelio testavimas, daugiausia dėmesio skiria vidinei programinės įrangos struktūrai.

5. **Patvirtinimo testavimas:** Tai apima pakartotinį testavimą ir regresinį testavimą, siekiant užtikrinti, kad defektai būtų ištaisyti ir kad modifikacijos nesukėlė naujų problemų.

## Collaboration-based Test Approaches

**Explanation:**

Bendradarbiavimu grindžiami testavimo metodai apima kolektyvinį įvairių suinteresuotųjų šalių dalyvavimą testavimo procese. Šiais metodais siekiama panaudoti įvairias grupės perspektyvas, žinias ir įgūdžius, kad būtų galima nustatyti galimas problemas, pagerinti programinės įrangos kokybę ir užtikrinti, kad ji atitiktų visų suinteresuotųjų šalių poreikius.

**Key Concepts:**

1. **Vartotojo priėmimo testavimas (UAT):** Tai paskutinis testavimo proceso etapas prieš išleidžiant programinę įrangą naudoti. Tikslas - patvirtinti programinės įrangos atitiktį verslo reikalavimams.

2. **Bendradarbiavimas rašant naudotojo istoriją:** Tai reiškia, kad komanda kartu rašo naudotojo istorijas - programinės įrangos funkcijos aprašymus iš galutinio naudotojo perspektyvos.

3. **Alfa ir beta testavimas:** Alfa testavimą atlieka vidiniai darbuotojai prieš programinę įrangą perduodant išoriniams testuotojams (beta testuotojams).

4. **Priėmimo eksploatacijai testavimas:** Atliekamas siekiant užtikrinti, kad sistema atitiktų eksploatacijos ir priežiūros reikalavimus.

5. **Sutartyje ir teisės aktuose numatyti priėmimo bandymai:** Atliekami siekiant užtikrinti, kad sistema atitiktų sutartyje ir visuose taikomuose teisės aktuose nustatytus reikalavimus.

### User Acceptance Testing (UAT)

**Explanation:**

Vartotojo priėmimo testavimas (UAT) - tai paskutinis testavimo proceso etapas prieš išleidžiant programinę įrangą naudoti. UAT tikslas - patvirtinti programinės įrangos atitiktį verslo reikalavimams. Jį paprastai atlieka galutiniai programinės įrangos naudotojai arba klientai, kad užtikrintų, jog sistema atitinka jų poreikius ir yra parengta naudoti pagal realius scenarijus.

**Key Concepts:**

1. **Realaus pasaulio scenarijai:** UAT apima programinės įrangos testavimą pagal realaus pasaulio scenarijus, siekiant užtikrinti, kad ji galėtų atlikti užduotis, kurioms buvo sukurta.

2. **Galutinio vartotojo dalyvavimas:** Testavimą paprastai atlieka galutiniai vartotojai arba klientai, o ne kūrėjai ar testuotojai.

3. **Verslo reikalavimai:** Atliekant UAT daugiausia dėmesio skiriama patvirtinti, kad programinė įranga atitinka verslo reikalavimus, o ne tik technines specifikacijas.

4. **Galutinis etapas:** UAT paprastai būna paskutinis testavimo etapas, atliekamas po vienetų, integracijos ir sistemos testavimo.

5. **Priėmimo kriterijai:** Programinė įranga tikrinama pagal iš anksto nustatytus priėmimo kriterijus, siekiant nustatyti, ar ji parengta pristatymui.

  **Syntax:**

  Acceptance criteria are typically written in a simple language in the format: **"Given [initial context], when [event occurs], then [ensure some outcomes]"**.

  **Example:**

  ```text
  - Given I have a product in my shopping cart,
    When I click on 'Checkout' and complete the payment process,
    Then I should receive an order confirmation.
  ```

### Collaborative User Story Writing

**Explanation:**

Bendradarbiaudami rašydami naudotojo istoriją, komandos nariai kartu rašo naudotojo istorijas, kurios yra programinės įrangos funkcijos aprašymai iš galutinio naudotojo perspektyvos. Šis bendradarbiavimo procesas padeda užtikrinti, kad būtų atsižvelgta į visas perspektyvas ir kad sukurta programinė įranga atitiktų visų suinteresuotųjų šalių poreikius.

**Key Concepts:**

1. **Vartotojo istorijos:** Tai paprasti, aiškūs, trumpi funkcionalumo aprašymai, kaip juos mato vartotojas.

  **Syntax:**

  A user story is typically written in the format: **"As a [type of user], I want [an action] so that [a benefit/a value]"**.

  **Example:**

  ```text
  User Story: 

  "As a Customer, I want to purchase a product so that I can own the product."

  Acceptance Criteria:

  I can add a product to the cart.
  I can complete the payment process.
  I receive an order confirmation after purchase.
  ```

2. **Bendradarbiavimas:** Šiame procese dalyvauja visos susijusios suinteresuotosios šalys, įskaitant kūrėjus, testuotojus, verslo analitikus ir naudotojus.

3. **Galutinio naudotojo perspektyva:** Vartotojo istorijos rašomos iš galutinio naudotojo perspektyvos, daugiausia dėmesio skiriant jo poreikiams ir patirčiai.

4. **Priėmimo kriterijai:** Kiekviena naudotojo istorija apima priėmimo kriterijus, kurie apibrėžia naudotojo istorijos ribas ir yra naudojami patvirtinti, kada istorija yra užbaigta ir veikia taip, kaip numatyta.

5. **Iteracijų planavimas:** Vartotojo istorijos dažnai naudojamos pagal "Agile" kūrimo metodiką per iteracijų planavimo arba sprinto planavimo susitikimus.

### Alpha and Beta Testing

**Explanation:**

Alfa ir beta testavimas - tai programinės įrangos testavimo etapai, atliekami siekiant užtikrinti produkto kokybę prieš jį išleidžiant galutiniams naudotojams. Alfa testavimą organizacijos viduje atlieka specializuota testavimo komanda. Kita vertus, beta testavimą atlieka ribotas skaičius galutinių naudotojų, kurie nepriklauso organizacijai.

**Key Concepts:**

1. **Alpha testavimas:** Tai pirmasis testavimo etapas, kurio metu programinė įranga testuojama organizacijos viduje. Jį paprastai atlieka specializuota testavimo grupė.

2. **Beta testavimas:** Tai antrasis testavimo etapas, kurio metu programinė įranga išleidžiama ribotam galutinių naudotojų skaičiui, siekiant surinkti grįžtamąjį ryšį ir nustatyti visas galimas problemas, kurių nepavyko rasti alfa testavimo metu.

3. **Grįžtamojo ryšio ciklas:** Tiek alfa, tiek beta testavimas suteikia vertingų atsiliepimų, kuriuos galima panaudoti programinės įrangos kokybei gerinti.

4. **Realaus pasaulio poveikis:** Beta testavimo metu programinė įranga išbandoma pagal realaus pasaulio scenarijus, todėl gali būti atskleistos problemos, kurios galėjo būti nenustatytos alfa testavimo metu.

5. **Kandidatinė versija:** Programinės įrangos versija, išleista beta testavimui, dažnai vadinama "kandidatine versija", nes ji yra artima galutinei versijai, kuri bus išleista visuomenei.

## Black-box Testing Techniques

**Explanation:**

Juodosios dėžės" testavimo metodais daugiausia dėmesio skiriama programinės įrangos funkcionalumui, neatsižvelgiant į jos vidinę struktūrą. Testuotojas nežino apie vidinį sistemos veikimą ir testuoja programinę įrangą remdamasis įvesties ir išvesties duomenimis. Pagrindinis tikslas - patikrinti, kaip programinė įranga elgiasi reaguodama į įvairias įvestis, o ne patikrinti, kaip programinė įranga apdoroja įvestį ir sukuria išvestį.

**Key Concepts:**

1. **Equivalence Partitioning (lygiavertiškumo skaidymas)** Tai programinės įrangos testavimo metodas, kuriuo programinės įrangos vieneto įvesties duomenys suskirstomi į lygiaverčių duomenų dalis, iš kurių galima išvesti testavimo atvejus.

2. **Pagrindinių verčių analizė:** Tai testavimo atvejų projektavimo metodas, kai daugiausia dėmesio skiriama programinės įrangos ribinėms arba kraštinėms sąlygoms.

3. **Sprendimų lentelės testavimas:** Tai geras būdas, kai reikia nagrinėti įvesties duomenų derinį, kuris duoda skirtingus rezultatus.

4. **State Transition Testing (būsenos perėjimo testavimas)** Tai naudojama, kai tam tikrą sistemos aspektą galima aprašyti vadinamąja "baigtinių būsenų mašina".

### Equivalence Partitioning

**Explanation:**

Equivalence Partitioning is a software testing technique that divides the input data of a software unit into partitions of equivalent data from which test cases can be derived.

**Key Concepts:**

1. **Skirstymas:** Šiame kontekste skaidymas reiškia programinės įrangos vieneto įvesties duomenų suskirstymą į skirtingas kategorijas arba skirsnius. Kiekviename skirsnyje turėtų būti duomenys, kurie yra lygiaverčiai programinės įrangos vieneto elgsenos požiūriu.

2. **Atitikmenų klasė:** Atitikmenų klasė yra įvesties sąlygų galiojančių arba negaliojančių būsenų rinkinys. Lygiavertiškumo klasė yra duomenų poaibis, kuris yra didesnės klasės atstovas.

3. **Testavimo atvejai:** Testavimo atvejai išvedami iš kiekvieno skirstinio arba lygiavertiškumo klasės. Pagrindinė idėja yra ta, kad jei testavimo atvejis atskleidžia vieno skirsnio duomenų taško klaidą, tikėtina, kad jis atskleis ir visų kitų to paties skirsnio duomenų taškų klaidas.

4. **Pagrindinių verčių analizė:** Ji dažnai naudojama kartu su lygiavertiškumo skirstymu. Ji apima lygiavertiškumo klasių ribų tikrinimą.

**Example:**

**Feature to Test:** User Age Validation during Registration

The application requires that users be between 13 and 100 years old to register. Users outside this age range are not allowed to register.

We can divide the input data (age) into three equivalence classes:

1. Invalid inputs less than 13
2. Valid inputs between 13 and 100
3. Invalid inputs greater than 100

| Equivalence Class    | Test Input | Expected Outcome                       |
|----------------------|------------|----------------------------------------|
| Age less than 13     | 10         | Registration rejected, error message   |
| Age between 13 and 100 | 30       | Registration accepted                  |
| Age greater than 100 | 110        | Registration rejected, error message   |

### Boundary Value Analysis

**Explanation:**

Ribinių verčių analizė (BVA) - tai programinės įrangos testavimo metodas, naudojamas klaidoms, esančioms ties ribomis, nustatyti, o ne įvesties srities centre. Ji apima įvesties srities kraštinių galų, t. y. mažiausios ir didžiausios reikšmės, įskaitant jų tik vidines ir tik išorines reikšmes, testavimą.

**Key Concepts:**

1. **Pagrindinės reikšmės:** Tai įvesties reikšmės, kurios padalina įvesties sritį į skirsnius. Jos yra kraštutiniai įvesties srities galai, pavyzdžiui, mažiausios ir didžiausios reikšmės.

2. **Kraštinės reikšmės:** Tai reikšmės, esančios ribinių reikšmių viduje ir už jų ribų. Jos yra labai svarbios, nes dažnai sukelia klaidų.

3. **Galiojančios ir negaliojančios pertvaros:** BVA įvesties sritis padalijama į galiojančias ir negaliojančias pertvaras. Galiojančiame skirsnyje yra reikšmės, kurias sistema turėtų priimti, o negaliojančiame skirsnyje - reikšmės, kurios turėtų būti atmestos.

4. **Testavimas:** Pagrindinė BVA idėja - testavimui parinkti įvesties reikšmes iš kiekvieno skirsnio ir ribines reikšmes. Tai padeda nustatyti ribose esančias klaidas, kurių galėjo nepastebėti kiti testavimo metodai.

**Example:**

**Feature to Test:** Withdrawal from a Bank Account

The application allows a user to withdraw an amount between $20 and $1000 from their bank account in a single transaction. Withdrawals outside this range are not allowed.

We can identify the boundary values as $19, $20, $1000, and $1001.

| Boundary Value Analysis | Test Input | Expected Outcome                       |
|-------------------------|------------|----------------------------------------|
| Just below lower limit  | $19        | Withdrawal rejected, error message     |
| At lower limit          | $20        | Withdrawal processed                   |
| At upper limit          | $1000      | Withdrawal processed                   |
| Just above upper limit  | $1001      | Withdrawal rejected, error message     |

### Decision Table Testing

**Explanation:**

Sprendimų lentelės testavimas - tai programinės įrangos testavimo metodas, naudojamas tiek funkciniam, tiek juodosios dėžės testavimui. Šis metodas ypač naudingas kuriant testavimo atvejus sudėtingoms verslo taisyklėms, kurios apima įvairius įvesties derinius ir turi skirtingus rezultatus.

**Key Concepts:**

1. **Sprendimų lentelė:** Tai lentelė, kurioje išvardyti visi galimi įvesties deriniai ir atitinkami jų išvesties rezultatai. Kiekviena eilutė reiškia unikalų sąlygų derinį, dėl kurio priimamas sprendimas.

2. **Sąlygos ir veiksmai:** Sąlygos - tai įvestys arba sistemos būsenos, kurios gali kisti, o veiksmai - tai sistemos elgsena arba išvestis, pagrįsta tomis sąlygomis.

3. **Taisyklės:** Kiekviena sprendimų lentelės taisyklė reiškia sąlygų derinį, kuris lemia vieną ar daugiau veiksmų. Kiekviena sprendimų lentelės eilutė paprastai reiškia taisyklę.

4. **Paprastumas:** Sprendimų lentelės supaprastina sudėtingą verslo logiką, pateikdamos ją struktūrizuotai ir suprantamai. Taip lengviau nustatyti trūkstamus ar neteisingus reikalavimus.

5. **Visapusiška aprėptis:** Atsižvelgdamas į visus galimus įvesties derinius, sprendimų lentelės testavimas užtikrina visapusišką testavimo aprėptį.

**Example:**

**Feature to Test:** Discount Calculation in an E-commerce Application

The application provides discounts based on the type of user and the total purchase amount. The rules are as follows:

1. Regular users get a 5% discount on purchases over $500.
2. Premium users get a 10% discount on purchases over $500 and a 15% discount on purchases over $1000.

| Type of User | Purchase Amount > $500 | Purchase Amount > $1000 | Discount |
|--------------|------------------------|-------------------------|----------|
| Regular      | No                     | No                      | 0%       |
| Regular      | Yes                    | No                      | 5%       |
| Regular      | Yes                    | Yes                     | 5%       |
| Premium      | No                     | No                      | 0%       |
| Premium      | Yes                    | No                      | 10%      |
| Premium      | Yes                    | Yes                     | 15%      |

### State Transition Testing

**Explanation:**

Būsenos perėjimo testavimas - tai programinės įrangos testavimo metodas, naudojamas testuojamos taikomosios programos (AUT) elgsenai testuoti skirtingomis įvesties sąlygomis nuosekliai. Jis ypač naudingas sistemoms, kuriose dabartinė sistemos būsena priklauso nuo praeities įvykių arba įvesties duomenų sekos.

**Key Concepts:**

1. **Būsena:** Atskira sistemos būklė arba režimas esant skirtingiems įvesties duomenims arba sąlygoms.

2. **Pereiga:** Sistemos perėjimas iš vienos būsenos į kitą būseną, paprastai sukeliamas įvykių ar sąlygų.

3. **Sąlygų diagrama:** Visų galimų sistemos būsenų, perėjimų ir įvykių grafinis atvaizdavimas.

4. **Pradinė ir galutinė būsena:** Būklė, kurioje sistema prasideda, vadinama pradine būsena, o būsena, kurioje ji baigiasi, vadinama galutine būsena.

5. **Įvykiai:** Įvykis - tai įvykis, kuris gali sukelti būsenos perėjimą.

6. **Būsenų lentelė:** Visų galimų būsenų, perėjimų ir įvykių lentelė, panaši į būsenų diagramą, tačiau pateikiama lentelės forma.

7. **Apimtis:** Bandant būsenų perėjimus siekiama aprėpti visas galimas būsenas ir perėjimus. Taip užtikrinama, kad sistema teisingai elgtųsi visų įvykių sekų atveju.

**Example:**

**Feature to Test:** Online Music Player

The music player has several states depending on user actions. The rules are as follows:

1. When a user presses the 'Play' button, the player starts playing music.
2. When a user presses the 'Pause' button, the player pauses the music.
3. When a user presses the 'Stop' button, the player stops the music and resets to the beginning of the track.
4. When a user presses the 'Next' button, the player stops the current track and starts playing the next one.

**State Diagram:**

Initial State: Stopped

States:

1. Playing
2. Paused
3. Stopped

Transitions:

1. Press 'Play': Stopped -> Playing
2. Press 'Pause': Playing -> Paused
3. Press 'Play': Paused -> Playing
4. Press 'Stop': Playing -> Stopped
5. Press 'Stop': Paused -> Stopped
6. Press 'Next': Playing -> Playing (next track)
7. Press 'Next': Paused -> Playing (next track)

**State Table:**

| Current State | Input     | Next State |
|---------------|-----------|------------|
| Stopped       | Play      | Playing    |
| Playing       | Pause     | Paused     |
| Paused        | Play      | Playing    |
| Playing       | Stop      | Stopped    |
| Paused        | Stop      | Stopped    |
| Playing       | Next      | Playing    |
| Paused        | Next      | Playing    |