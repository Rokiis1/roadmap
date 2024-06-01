# Content of Table

- [Static Techniques](#static-techniques)
  - [Benefits of Early and Frequent Stakeholder Feedback](#benefits-of-early-and-frequent-stakeholder-feedback)
  - [Review Process Activities](#review-process-activities)
  - [Review Types](#review-types)
  - [Checklist-based reviewing](#checklist-based-reviewing)
  - [Scenario-based reviewing](#scenario-based-reviewing)
  - [Static Analysis](#static-analysis)
  - [Model-Based Analysis](#model-based-analysis)

# Static Techniques

**Paaiškinimas:**

Statiniai programinės įrangos testavimo metodai apima programinės įrangos kodo, reikalavimų ir projektavimo dokumentų tikrinimą, iš tikrųjų nevykdant programinės įrangos. Šiais metodais siekiama ankstyvuoju programinės įrangos kūrimo ciklo etapu nustatyti klaidas ir užkirsti joms kelią, taip pagerinant programinės įrangos kokybę ir sumažinant vėlesnio klaidų taisymo išlaidas.

**Pagrindinės sąvokos:**

1. **Ankstyvo ir dažno suinteresuotųjų šalių grįžtamojo ryšio nauda:** Ankstyvas ir dažnas suinteresuotųjų šalių grįžtamojo ryšio gavimas gali padėti išaiškinti nesusipratimus ar klaidas reikalavimuose ar projekte prieš pradedant kodavimą.

2. **Peržiūros proceso veikla:** Peržiūros procesas paprastai apima peržiūros planavimą, atlikimą, rezultatų pateikimą ir būtinų tolesnių veiksmų atlikimą.

3. **Peržiūrų tipai:** Yra keletas peržiūrų tipų, įskaitant neoficialias peržiūras, apžvalgas, technines peržiūras ir patikrinimus. Kiekviena peržiūros rūšis turi savo tikslą, formalumo lygį ir procesą.

4. **Peržiūra pagal kontrolinį sąrašą:** Tai metodas, kai peržiūrą atliekantys asmenys vadovaujasi dažniausiai pasitaikančių klaidų kontroliniu sąrašu.

5. **Scenarijais pagrįsta peržiūra:** Taikant šį metodą, peržiūrą atliekantys asmenys vadovaujasi iš anksto parengtų scenarijų rinkiniu.

6. **Statistinė analizė:** Tai metodas, kai naudojant įrankius analizuojamas kodas, ieškant galimų klaidų, kodo kvapų ir saugumo spragų.

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

3. **Individuali peržiūra:** Kiekvienas peržiūrą atliekantis asmuo savarankiškai išnagrinėja dokumentus, ieškodamas galimų problemų. Jie gali naudoti tokius metodus, kaip kontroliniais sąrašais pagrįsta peržiūra arba scenarijais pagrįsta peržiūra, kad vadovautųsi savo nagrinėjimu.

4. **Peržiūros posėdis:** Peržiūrėtojai susitinka aptarti savo išvadų. Visi nesutarimai ar nesusipratimai išsprendžiami ir grupė susitaria dėl klausimų, kuriuos reikia spręsti.

5. **Peržiūra:** Remiantis peržiūros susitikimo rezultatais, dokumentuose ar kode atliekami būtini pakeitimai.

6. **Patikrinimas:** Patikrinama, ar pakeitimai teisingai įgyvendinti ir ar jais išspręstos nustatytos problemos. Taip pat įvertinamas peržiūros procesas, siekiant nustatyti galimus patobulinimus, kuriuos būtų galima atlikti ateityje atliekant peržiūrą.

## Review Types

**Paaiškinimas:**

Peržiūros - tai statinio testavimo rūšis, kai programinės įrangos dokumentus (pvz., reikalavimus, projektavimo dokumentus ir kodą) tikrina asmuo arba grupė žmonių. Tikslas - rasti ir ištaisyti klaidas, pagerinti programinės įrangos kokybę ir užtikrinti, kad ji atitiktų reikalavimus.

**Pagrindinės sąvokos:**

1. **Neformali peržiūra:** Neformali peržiūra - tai lankstus procesas, kai dokumentai peržiūrimi be formalaus proceso ar defektų dokumentavimo. Ji dažnai naudojama norint greitai pastebėti akivaizdžias klaidas arba apžvelgti dokumento kokybę.

2. **Peržiūra:** Peržiūra - tai tokia peržiūros rūšis, kai dokumento autorius pristato dokumentą recenzentams ir juos vedžioja po dokumentą. Tikslas - surinkti atsiliepimus ir sužinoti apie galimas problemas.

3. **Techninė peržiūra:** Techninė peržiūra - tai labiau formalus procesas, kai kvalifikuotų darbuotojų grupė peržiūri techninį dokumento turinį. Tikslas - užtikrinti, kad dokumentas būtų techniškai tvarkingas ir atitiktų jam keliamus reikalavimus.

4. **Patikrinimas:** Patikrinimas - tai labai formalus peržiūros procesas, kai dokumentą išsamiai nagrinėja peržiūros grupė. Tikslas - surasti ir užfiksuoti trūkumus, kad vėliau juos būtų galima ištaisyti. Atliekant patikrinimus dažnai laikomasi apibrėžto proceso ir naudojami kontroliniai sąrašai, kuriais vadovaujamasi atliekant peržiūrą.

## Checklist-based reviewing

**Paaiškinimas:**

Kontroliniu sąrašu pagrįsta peržiūra - tai statinio testavimo metodas, kai peržiūrėtojai, peržiūrėdami programinės įrangos dokumentus, tokius kaip reikalavimai, projektavimo dokumentai ir kodas, vadovaujasi iš anksto sudarytu kontroliniu sąrašu. Į kontrolinį sąrašą paprastai įtraukiamos dažniausiai pasitaikančios klaidos ar problemos, į kurias reikia atkreipti dėmesį, taip užtikrinant sistemingą ir išsamią peržiūrą.

**Pagrindinės sąvokos:**

1. **Sisteminė peržiūra:** Naudojant kontrolinį sąrašą užtikrinama, kad peržiūra būtų sisteminga ir apimtų visus svarbius dokumento aspektus.

2. **Bendrosios klaidos:** Į kontrolinį sąrašą paprastai įtraukiamos bendrosios klaidos arba klausimai, į kuriuos reikia atkreipti dėmesį, remiantis ankstesne patirtimi arba pramonės standartais.

3. **Efektyvumas:** Naudojant kontrolinį sąrašą peržiūros procesas gali būti efektyvesnis, nes jame pateikiamos aiškios gairės, į ką atkreipti dėmesį.

4. **Nuoseklumas:** Kontroliniai sąrašai padeda užtikrinti peržiūros nuoseklumą, nes visi peržiūrą atliekantys asmenys vadovaujasi tuo pačiu tikrintinų elementų sąrašu.

## Scenario-based reviewing

**Paaiškinimas:**

Scenarijais paremta peržiūra - tai statinio testavimo metodas, kai peržiūrėtojai, peržiūrėdami programinės įrangos dokumentus, tokius kaip reikalavimai, projektavimo dokumentai ir kodas, vadovaujasi iš anksto nustatytais scenarijais. Šie scenarijai atspindi galimus naudojimo atvejus arba programinės įrangos naudojimo būdus, padedančius recenzentams suprasti, kaip turėtų veikti programinė įranga, ir nustatyti galimas problemas.

**Pagrindinės sąvokos:**

**Panaudojimo atvejai:** Scenarijuose dažnai pateikiami galimi programinės įrangos naudojimo atvejai, padedantys recenzentams suprasti, kokiame kontekste bus naudojama programinė įranga.

**Kelių analizė:** Scenarijuose taip pat gali būti vaizduojami galimi programinės įrangos naudojimo keliai, padedantys recenzentams nustatyti problemas, pavyzdžiui, nepasiekiamą kodą arba galimas kliūtis.

**Konteksto supratimas:** Peržiūrėdami programinę įrangą scenarijaus kontekste, recenzentai gali geriau suprasti, kaip programinė įranga turėtų veikti.

**Problemų nustatymas:** Scenarijumi pagrįsta peržiūra gali padėti nustatyti problemas, kurios gali būti nepastebėtos atliekant bendresnio pobūdžio peržiūrą, pavyzdžiui, tinkamumo naudoti problemas arba problemas, kurios atsiranda tik konkrečiuose scenarijuose.

**Vartotojo požiūris:** Scenarijais pagrįsta peržiūra padeda recenzentams atsižvelgti į vartotojo požiūrį, todėl pagerėja programinės įrangos tinkamumas naudoti ir patogumas naudotojui.

## Static Analysis

**Paaiškinimas:**

Tai klaidų šalinimo metodas, kai kodas tikrinamas nevykdant programos. Šis procesas leidžia suprasti kodo struktūrą ir gali padėti užtikrinti, kad kodas atitiktų pramonės standartus. Taip pat galima nustatyti galimus trūkumus (pavyzdžiui, sintaksės klaidas, tipų nesutapimus ar atminties nutekėjimą), dėl kurių gali atsirasti pažeidžiamumų.

**Pagrindinės sąvokos:**

1. **Kodo kokybės užtikrinimas:** Statinė analizė padeda palaikyti aukštą kodo kokybę, nes užtikrina kodavimo standartų laikymąsi ir ankstyvuoju kūrimo ciklo etapu aptinka anomalijas.

2. **Klaidų aptikimas:** Ji gali nustatyti potencialias klaidas, kurių gali nepavykti aptikti atliekant dinaminį testavimą.

3. **Saugumas:** Statinė analizė gali aptikti kodo spragas, kuriomis galima pasinaudoti, ir taip padėti pagerinti programinės įrangos saugumą.

4. **Tvarkymas:** Skatindama gerą kodavimo praktiką ir standartus, statinė analizė gali padaryti kodą suprantamesnį ir lengviau prižiūrimą.

5. **Efektyvumas:** Statinės analizės įrankiai gali greitai nuskaityti dideles kodų bazes, todėl jie yra efektyvus būdas nustatyti galimas problemas.

## Model-Based Analysis

**Paaiškinimas:**

Modeliu pagrįsta analizė yra statinio testavimo metodas, kai analizuojami programinės įrangos modeliai (pvz., duomenų srautų diagramos, esybių ir ryšių diagramos arba būsenų perėjimo diagramos), siekiant rasti klaidų ar galimų patobulinimų. Šis metodas leidžia suprasti aukšto lygio sistemos elgseną ir gali padėti nustatyti problemas, kurios gali būti neįžvelgiamos nagrinėjant vien tik kodą.

**Pagrindinės sąvokos:**

1. **Aukšto lygio supratimas:** Modeliai suteikia aukšto lygio sistemos vaizdą, todėl lengviau suprasti sistemos elgseną ir nustatyti galimas problemas.

2. **Klaidų aptikimas:** Analizuojant modelius galima nustatyti ir ištaisyti sistemos projekto ar elgsenos klaidas prieš rašant kodą.

3. **Dizaino tobulinimas:** Modeliu pagrįsta analizė taip pat gali padėti nustatyti galimus sistemos dizaino patobulinimus, todėl programinė įranga tampa veiksmingesnė ir efektyvesnė.

4. **Susikalbėjimas:** Modeliai gali būti įvairių suinteresuotųjų šalių (pavyzdžiui, kūrėjų, testuotojų ir verslo analitikų) bendravimo priemonė, padedanti užtikrinti bendrą sistemos supratimą.

5. **Dokumentavimas:** Modeliais grindžiamos analizės metu naudojami modeliai taip pat gali tarnauti kaip dokumentacija, vizualiai atvaizduojant sistemos elgseną.

