# Content of Table

- [Static Techniques](#static-techniques)
  - [Benefits of Early and Frequent Stakeholder Feedback](#benefits-of-early-and-frequent-stakeholder-feedback)
  - [Review Process Activities](#review-process-activities)
  - [Review Types](#review-types)
  - [Checklist-based reviewing](#checklist-based-reviewing)
  - [Scenario-based reviewing](#scenario-based-reviewing)
  - [Static Analysis](#static-analysis)
  - [Model-Based Analysis](#model-based-analysis)

## Static Techniques

**Paaiškinimas:**

Atliekant „baltosios dėžutės“ testavimą tikrinama vidinė programinės įrangos struktūra, dizainas ir kodavimas - tai vadinama struktūriniu testavimu. Šiame procese naudojami statiniai metodai, kuriais patvirtinamas kodas, projektavimo dokumentai ir programinės įrangos reikalavimai, iš tikrųjų nevykdant programinės įrangos.

**Pagrindinės sąvokos:**

1. **Ankstyvo ir dažno suinteresuotųjų šalių grįžtamojo ryšio nauda:** Ankstyvas ir dažnas suinteresuotųjų šalių grįžtamojo ryšio gavimas gali padėti užfiksuoti nesusipratimus ar klaidas reikalavimuose ar projekte prieš pradedant kodavimą.

2. **Peržiūros proceso veikla:** Peržiūros procesas paprastai apima peržiūros planavimą, atlikimą, rezultatų pateikimą ir būtinų tolesnių veiksmų atlikimą.

3. **Peržiūrų tipai:** Yra keletas peržiūrų tipų, įskaitant neoficialias peržiūras, apžvalgas, technines peržiūras ir patikrinimus. Kiekviena peržiūros rūšis turi savo tikslą, formalumo lygį ir procesą.

4. **Peržiūra pagal kontrolinį sąrašą:** Tai metodas, kai peržiūrą atliekantys asmenys vadovaujasi dažniausiai pasitaikančių klaidų kontroliniu sąrašu.

5. **Scenarijais pagrįsta peržiūra:** Taikant šį metodą, peržiūrą atliekantys asmenys vadovaujasi iš anksto parengtų scenarijų rinkiniu.

6. **Statybinė analizė:** Tai metodas, kai kodui analizuoti, ieškant galimų klaidų ir saugumo spragų, naudojamos priemonės.

7. **Modeliu pagrįsta analizė:** Tai metodas, kai analizuojami programinės įrangos modeliai (pvz., duomenų srautų diagramos arba esybių sąsajų diagramos), siekiant rasti klaidų arba galimų patobulinimų.

## Benefits of Early and Frequent Stakeholder Feedback

**Paaiškinimas:**

Tai leidžia nustatyti ir ištaisyti reikalavimų ar projekto nesusipratimus ar klaidas prieš pradedant kodavimą. Taip galima sutaupyti laiko, pastangų ir išteklių, kurie kitu atveju būtų išleisti perdarymui.

**Pagrindinės sąvokos:**

1. **Klaidų nustatymas:** Ankstyvas grįžtamasis ryšys gali padėti aptikti klaidas ar nesusipratimus pradiniuose kūrimo etapuose, todėl juos ištaisyti yra lengviau ir pigiau.

2. **Pagerinta kokybė:** Reguliarus grįžtamasis ryšys gali pagerinti programinės įrangos kokybę, nes leidžia nuolat tobulinti reikalavimus ir dizainą.

3. **Rizikos mažinimas:** Ankstyvas ir dažnas grįžtamasis ryšys gali padėti nustatyti ir sumažinti projekto riziką, nes galima greičiau nustatyti ir spręsti galimas problemas.

4. **Geresnis atitikimas verslo poreikiams:** Reguliarus bendravimas su suinteresuotosiomis šalimis užtikrina, kad kuriama programinė įranga atitiktų verslo poreikius ir lūkesčius, o tai lemia didesnį suinteresuotųjų šalių pasitenkinimą.

5. **Efektyvus išteklių naudojimas:** Anksti pastebėjus ir sprendžiant problemas, išteklius galima naudoti efektyviau, todėl sutrumpėja kūrimo laikas ir sumažėja išlaidos.

## Review Process Activities

**Paaiškinimas:**

Statinių metodų peržiūros procesas apima sistemingą programinės įrangos projektavimo dokumentų, reikalavimų ir kodo nagrinėjimą.

**Pagrindinės sąvokos:**

1. **Planavimas:** Šis pradinis etapas apima peržiūros apimties, tikslų ir peržiūrėtinų dokumentų nustatymą. Taip pat nustatomi peržiūroje dalyvaujantys komandos nariai ir jiems priskiriami vaidmenys.

2. **Įžanga:** Šiame etape komandai pranešama apie peržiūros apimtį ir tikslus. Išdalijami dokumentai, kuriuos reikia peržiūrėti, ir paaiškinamas peržiūros procesas.

3. **Individuali peržiūra:** Kiekvienas recenzentas savarankiškai patikrina dokumentus, ieškodamas galimų problemų. Jie gali naudoti tokius metodus, kaip kontroliniais sąrašais pagrįsta peržiūra arba scenarijais pagrįsta peržiūra.

4. **Peržiūros posėdis:** Peržiūrėtojai susitinka aptarti savo išvadų. Visi nesutarimai ar nesusipratimai išsprendžiami ir grupė susitaria dėl klausimų, kuriuos reikia spręsti.

5. **Peržiūra:** Remiantis peržiūros susitikimo rezultatais, dokumentuose ar kode atliekami būtini pakeitimai.

6. **Patikrinimas:** Pakeitimai tikrinami, kad būtų įsitikinta, jog jie buvo tinkamai įgyvendinti ir išspręstos nustatytos problemos.

## Review Types

**Paaiškinimas:**

Peržiūros yra statinio testavimo rūšis, kai programinės įrangos dokumentus (pvz., reikalavimus, projektavimo dokumentus ir kodą) tikrina asmuo arba grupė žmonių. Tikslas - rasti ir ištaisyti klaidas, pagerinti programinės įrangos kokybę ir užtikrinti, kad ji atitiktų reikalavimus.

**Pagrindinės sąvokos:**

1. **Neformalioji peržiūra:** Neformalioji peržiūra - tai lankstus procesas, kai dokumentai peržiūrimi be formalaus proceso ar defektų dokumentavimo. Ji dažnai naudojama norint greitai pastebėti akivaizdžias klaidas arba apžvelgti dokumento kokybę.

2. **Peržiūra:** Peržiūra - tai tokia peržiūros rūšis, kai dokumento autorius pristato dokumentą recenzentams ir juos vedžioja po dokumentą.

3. **Techninė peržiūra:** Techninė peržiūra - tai labiau formalus procesas, kai kvalifikuotų darbuotojų grupė peržiūri techninį dokumento turinį.

4. **Patikrinimas:** Patikrinimas - tai labai formalus peržiūros procesas, kai dokumentą išsamiai nagrinėja peržiūrėtojų grupė.

## Checklist-based reviewing

**Paaiškinimas:**

Kontroliniu sąrašu pagrįsta peržiūra - tai statinio testavimo metodas, kai peržiūrėtojai, peržiūrėdami programinės įrangos dokumentus, pvz., reikalavimus, projektavimo dokumentus ir kodą, vadovaujasi iš anksto parengtu kontroliniu sąrašu. Į kontrolinį sąrašą paprastai įtraukiamos dažniausiai pasitaikančios klaidos ar problemos, į kurias reikia atkreipti dėmesį, taip užtikrinant sistemingą ir išsamią peržiūrą.

![alt text](./assets/images/checklistReviewing.png)

**Pagrindinės sąvokos:**

1. **Sisteminė apžvalga:** Naudojant kontrolinį sąrašą užtikrinama, kad apžvalga būtų sisteminga ir apimtų visus svarbius dokumento aspektus.

2. **Bendrosios klaidos:** Į kontrolinį sąrašą paprastai įtraukiamos bendrosios klaidos arba klausimai, į kuriuos reikia atkreipti dėmesį.

3. **Suderinamumas:** Kontroliniai sąrašai padeda užtikrinti nuoseklumą visose peržiūrose, nes visi peržiūrą atliekantys asmenys vadovaujasi tuo pačiu tikrintinų elementų sąrašu.

## Scenario-based reviewing

**Paaiškinimas:**

Scenarijais pagrįsta peržiūra - tai statinio testavimo metodas, kai peržiūrėtojai, peržiūrėdami programinės įrangos dokumentus, pvz., reikalavimus, projektavimo dokumentus ir kodą, vadovaujasi iš anksto nustatytais scenarijais.

**Pagrindinės sąvokos:**

**Panaudojimo atvejai:** Scenarijuose dažnai pateikiami galimi programinės įrangos naudojimo atvejai.

**Kelių analizė:** Scenarijai taip pat gali atspindėti galimus programinės įrangos kelius, padedančius recenzentams nustatyti tokias problemas kaip nepasiekiamas kodas ar galimi trikdžiai.

**Konteksto supratimas:** Peržiūrėdami programinę įrangą scenarijaus kontekste, recenzentai gali geriau suprasti, kaip programinė įranga turėtų veikti.

**Problemų nustatymas:** Scenarijumi pagrįsta peržiūra gali padėti nustatyti problemas, kurios gali būti nepastebėtos atliekant bendresnio pobūdžio peržiūrą, pavyzdžiui, tinkamumo naudoti problemas arba problemas, kurios atsiranda tik konkrečiuose scenarijuose.

**Vartotojo požiūris:** Padeda pagerinti programinės įrangos tinkamumą naudoti ir patogumą naudotojui.

**Example:**

  **Scenario:** User logs in and updates profile information

  **Steps:**

  1. User navigates to the login page
  2. User enters their username and password
  3. User clicks the 'Log In' button
  4. User is taken to their profile page
  5. User clicks the 'Edit Profile' button
  6. User updates their profile information
  7. User clicks the 'Save Changes' button
  8. User's updated profile information is saved

## Static Analysis

**Paaiškinimas:**

Tai derinimo metodas, kai kodas tikrinamas jo nevykdant programos. Statinę analizę paprastai atlieka ir kūrėjai, ir programinės įrangos testuotojai

  1. **Kūrėjai** atlieka statinę analizę kaip kodavimo ir derinimo proceso dalį. Jie naudoja statinės analizės įrankius, kad patikrintų, ar jų kode nėra klaidų, klaidų ar kodo.

  2. **Programinės įrangos testuotojai** gali naudoti statinės analizės įrankius, kad patikrintų kodą, ar jame nėra galimų problemų, kurių gali nepavykti užfiksuoti atliekant dinaminį testavimą. Tai gali apimti tokius dalykus, kaip galimų saugumo spragų tikrinimas arba kodo sritys, kurios yra pernelyg sudėtingos ir kurias gali reikėti refaktorizuoti.

**Pagrindinės sąvokos:**

1. **Statinės analizės įrankio pasirinkimas:** Įrankio pasirinkimas priklauso nuo naudojamos programavimo kalbos ir konkrečių projekto reikalavimų. Pavyzdžiai: „Pylint“ - „Python“, „ESLint“ - „JavaScript“.

2. **Konfigūruokite įrankį:** Galite konfigūruoti ir pasirinkti, kokias taisykles norite taikyti, remdamiesi savo komandos kodavimo standartais ir konkrečiais projekto poreikiais.

3. **Įrankio paleidimas:** Tai galima atlikti rankiniu būdu, tačiau dažnai jis integruojamas į kūrimo procesą arba nuolatinės integracijos vamzdyną, todėl paleidžiamas automatiškai, kai tik kodas sukuriamas arba perduodamas.

4. **Peržiūrėkite rezultatus:** Įrankis pateiks ataskaitą apie visas rastas problemas, pavyzdžiui, galimas klaidas arba kodavimo standartų pažeidimus.

5. **Ištaisykite problemas:** Atnaujinkite pirminį kodą, kad būtų ištaisytos statinės analizės įrankio nustatytos problemos. Tai gali būti klaidų taisymas, kodo pertvarkymas arba kodo atitikimas kodavimo standartams.

6. **Pakartokite procesą:** Statinė analizė nėra vienkartinis procesas. Ją reikėtų atlikti reguliariai, geriausia - kiekvieną kartą, kai kodas kuriamas arba perduodamas, kad būtų galima užfiksuoti naujas atsiradusias problemas.

## Model-Based Analysis

**Paaiškinimas:**

Modeliu pagrįsta analizė - tai statinio testavimo metodas, kai analizuojami programinės įrangos modeliai (pvz., duomenų srautų diagramos, esybių ir ryšių diagramos arba būsenų perėjimo diagramos), siekiant rasti klaidų arba galimų patobulinimų. Šis metodas leidžia suprasti aukšto lygio sistemos elgseną ir gali padėti nustatyti problemas, kurios gali būti neįžvelgiamos nagrinėjant vien tik kodą.
**Pagrindinės sąvokos:**

1. **Aukšto lygio supratimas:** Modeliai suteikia aukšto lygio sistemos vaizdą, todėl lengviau suprasti sistemos elgseną ir nustatyti galimas problemas.

2. **Klaidų aptikimas:** Analizuojant modelius galima nustatyti ir ištaisyti sistemos projekto ar elgsenos klaidas prieš rašant kodą.

3. **Dizaino tobulinimas:** Modeliu pagrįsta analizė taip pat gali padėti nustatyti galimus sistemos dizaino patobulinimus, todėl programinė įranga tampa veiksmingesnė ir efektyvesnė.

4. **Susikalbėjimas:** Modeliai gali būti įvairių suinteresuotųjų šalių (pavyzdžiui, kūrėjų, testuotojų ir verslo analitikų) bendravimo priemonė, padedanti užtikrinti bendrą sistemos supratimą.

5. **Dokumentavimas:** Modeliais grindžiamos analizės metu naudojami modeliai taip pat gali tarnauti kaip dokumentacija, vizualiai atvaizduojant sistemos elgseną.

**Example:**

- **UML Class Diagram**

  ![alt text](image.png)
