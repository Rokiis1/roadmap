# Content of Table

- [Test Management](#test-management)
  - [Test Planning](#test-planning)
    - [Test Pyramid](#test-pyramid)
    - [Risk Management in Testing](#risk-management-in-testing)
    - [Risk Response Strategies](#risk-response-strategies)
    - [Risk Management Tools and Techniques](#risk-management-tools-and-techniques)
    - [Entry Criteria and Exit Criteria](#entry-criteria-and-exit-criteria)
    - [Test Estimation](#test-estimation)
    - [Test Case Prioritization](#test-case-prioritization)
  - [Test Monitoring and Control](#test-monitoring-and-control)

## Test Management

Testų valdymas - tai programinės įrangos kūrimo praktika, apimanti programinės įrangos testų planavimą, kūrimą, vykdymą ir analizę. Jis apima testų vykdymo būsenos stebėjimą ir ataskaitų teikimą, testų duomenų tvarkymą, testavimo atvejų dokumentacijos tvarkymą ir programinės įrangos produktų kokybės užtikrinimą.

- Testavimo atvejų kūrimas ir valdymas
- Testų vykdymas ir stebėjimas
- Integravimas su klaidų sekimo priemonėmis
- Ataskaitų rengimas ir rodikliai
- Komandos narių bendradarbiavimas

Translated with DeepL.com (free version)

### Test Planning

**Paaiškinimas:**

Programinės įrangos testavimo gyvavimo ciklo etapas, apimantis programinės įrangos produktui testuoti reikalingo metodo dokumentavimą.

**Pagrindinės sąvokos:**

1. **Testavimo tikslai:** Tai yra testavimo proceso tikslai ir uždaviniai. Jie turėtų būti išmatuojami ir pasiekiami bei atitikti programinės įrangos kūrimo proceso tikslus.

2. **Testavimo metodai:** Tai programinės įrangos testavimo tipai, pavyzdžiui, vienetų testavimas, integracinis testavimas, sistemos testavimas ir priėmimo testavimas.

3. **Išteklių planavimas:** Tai apima testavimo procesui reikalingų išteklių, įskaitant testavimo komandą, priemones ir testavimo aplinką, nustatymą ir įsigijimą.

4. **Testavimo proceso tvarkaraščio sudarymas ir įvertinimas:** Tai apima laiko, kurio prireiks kiekvienai testavimo proceso užduočiai atlikti, įvertinimą ir užduočių tvarkaraščio sudarymą.

5. **Testavimo rezultatai:** Tai testavimo proceso rezultatai, pavyzdžiui, testavimo planas, testavimo atvejai, testavimo scenarijai ir testavimo ataskaitos.

6. **Rizikos analizė:** Tai apima galimų testavimo proceso rizikų nustatymą ir šių rizikų mažinimo plano sukūrimą.

7. **Testų aprėptis:** Tai testų rinkinio atliktų testų kiekio matas. Jis apima informaciją apie tai, kurios programos dalys iš tikrųjų įvykdytos paleidžiant testų rinkinį, kad būtų galima nustatyti, kurios sąlyginių teiginių šakos buvo atliktos.

8. **Sekamumo matrica:** Tai dokumentas, kuriame bendrai susiejami bet kokie du baziniai dokumentai, kuriems reikalingas daugelio su daugeliu ryšys, siekiant patikrinti ryšio išsamumą. Jis naudojamas reikalavimams sekti ir dabartiniams projekto reikalavimams patikrinti.

9. **Testavimo aplinka:** Ji apima aparatinę ir programinę aplinką, kurioje bus atliekami bandymai, ir bet kokią kitą programinę įrangą ar priemones, kurios bus naudojamos testavimo tikslais.

### Test Pyramid

**Paaiškinimas:**

Testavimo visuose programinės įrangos kūrimo lygmenyse idėja, kurią iš esmės ir propaguoja Testų piramidė. Testų piramidėje pabrėžiama, kad reikia daug žemo lygio vienetų testų, mažiau integracinių testų ir dar mažiau galutinių testų.

**Pagrindinės sąvokos:**

1. **Vienetų testavimas:** Piramidės pagrindą sudaro testai, skirti atskiriems programinės įrangos sistemos komponentams arba vienetams.

2. **Integracijos testavimas:** Piramidės viduryje šie testai skirti skirtingų programinės įrangos sistemos komponentų sąveikai.

3. **Sistemos testavimas:** beveik piramidės viršūnėje šie testai skirti visai sistemai.

4. **Priėmimo testavimas:** piramidės viršuje šie testai yra orientuoti į sistemos tinkamumą naudoti versle.

### Risk Management in Testing

**Paaiškinimas:**

Rizikos valdymas testavime - tai aktyvus požiūris į rizikos, galinčios neigiamai paveikti programinės įrangos testavimo procesą ir galutinio produkto kokybę, nustatymą, vertinimą ir mažinimą. Jis apima supratimą, kas yra rizika, galimų rizikų nustatymą ir jų įvertinimą pagal pasireiškimo tikimybę ir galimą poveikį.

**Pagrindinės sąvokos:**

1. **Rizikos supratimas testavime:** Rizika testavime reiškia galimybę, kad programinės įrangos produktas gali neatitikti jam keliamų reikalavimų arba sukelti netikėtus ar nepageidaujamus rezultatus.Svarbu suprasti, kad rizika būdinga bet kuriam programinės įrangos projektui ir kad rizikos valdymo tikslas yra ne pašalinti riziką, o ją veiksmingai valdyti.

2. **Rizikos nustatymas:** Tai pirmasis rizikos valdymo proceso etapas. Jis apima potencialios rizikos, galinčios turėti įtakos programinės įrangos testavimo procesui, nustatymą. Tai gali būti techninė rizika (pavyzdžiui, programinės įrangos klaidos ar sistemos gedimai), proceso rizika (pavyzdžiui, vėlavimai ar išteklių trūkumas) ir išorinė rizika (pavyzdžiui, rinkos sąlygų ar reguliavimo reikalavimų pokyčiai).

3. **Rizikos įvertinimas:** Nustačius riziką, reikia įvertinti jos pasireiškimo tikimybę ir galimą poveikį. Tai padeda nustatyti rizikos prioritetus ir parengti tinkamas rizikos mažinimo strategijas.

    - **Rizikos tikimybė:** Tai reiškia tikimybę, kad tam tikra rizika įvyks. Ji gali būti vertinama remiantis ankstesne patirtimi, statistine analize arba ekspertų vertinimu.

    - **Rizikos poveikis:** Tai reiškia galimas pasekmes, jei rizika įvyktų. Ji gali būti vertinama pagal galimą žalą projekto tikslams, pavyzdžiui, išlaidų viršijimą, vėlavimą ar kokybės pablogėjimą.

### Risk Response Strategies

**Paaiškinimas:**

Reagavimo į riziką strategijos - tai veiksmai, kurių imamasi rizikos vertinimo proceso metu nustatytai rizikai šalinti. Šiomis strategijomis siekiama sumažinti rizikos pasireiškimo tikimybę, sumažinti rizikos poveikį arba pripažinti riziką ir parengti nenumatytų atvejų planą.

**Pagrindinės sąvokos:**

1. **Rizikos priėmimas:** Tai yra atsako į riziką strategija, kai rizika priimama, nesiimant jokių papildomų veiksmų jos poveikiui ar tikimybei sumažinti. Ši strategija dažnai taikoma mažo prioriteto rizikai, kai rizikos mažinimo išlaidos viršytų galimą rizikos poveikį.

2. **Rizikos mažinimas:** Tai reagavimo į riziką strategija, kai imamasi veiksmų, siekiant sumažinti rizikos atsiradimo tikimybę arba sumažinti jos poveikį, jei ji vis dėlto atsirastų. Programinės įrangos testavimo kontekste tai gali būti papildomų testų rašymas, papildomų saugumo priemonių diegimas arba funkcijos pertvarkymas, kad ji būtų mažiau linkusi į klaidas.

3. **Rizikos perkėlimas:** Tai atsako į riziką strategija, kai rizikos poveikis perkeliamas trečiajai šaliai. Tai gali būti draudimo įsigijimas, rizikingos projekto dalies perdavimas kitai šaliai arba sutartinių susitarimų naudojimas, kad rizika būtų perkelta kitai šaliai.

4. **Nepaprastosios padėties planas:** Tai planas, kuriame nurodomi veiksmai, kurių reikia imtis, jei rizika materializuojasi. Jis padeda sumažinti rizikos poveikį projektui ir užtikrina, kad būtų parengtas aiškus veiksmų planas.

### Risk Management Tools and Techniques

**Paaiškinimas:**

Rizikos valdymo priemonės ir metodai - tai metodikos, naudojamos programinės įrangos testavimo rizikai nustatyti, įvertinti ir sumažinti. Jos padeda nustatyti testavimo pastangų prioritetus, užtikrinti, kad būtų kruopščiai išbandytos svarbiausios ir rizikingiausios sistemos sritys, ir veiksmingai valdyti riziką viso testavimo proceso metu.

**Pagrindinės sąvokos:**

1. **Rizika pagrįstas testavimas:** Tai toks testavimo metodas, kai testuotinos funkcijos ir ypatybės išdėstomos pagal svarbą atsižvelgiant į riziką. Rizika gali būti susijusi su funkciniais, nefunkciniais ar net struktūriniais programinės įrangos aspektais. Rizika pagrįstas testavimas padeda sutelkti testavimo pastangas į tas sistemos sritis, kuriose labiausiai tikėtina, kad gali kilti problemų, o jei kiltų, jos turėtų didžiausią poveikį.

2. **Produkto rizikos valdymas:** Tai apima rizikos, susijusios su pačiu programinės įrangos produktu, nustatymą, vertinimą ir valdymą. Tai gali būti funkciniai defektai, našumo problemos arba saugumo spragos. Produkto rizikos valdymui naudojami metodai gali apimti rizika pagrįstą testavimą, kodo peržiūras ir automatinio testavimo priemones.

3. **Projekto rizikos valdymas:** Tai apima rizikos, susijusios su programinės įrangos kūrimo ir testavimo procesu, nustatymą, vertinimą ir valdymą. Tai gali būti tokia rizika kaip vėlavimas, išlaidų viršijimas ar išteklių trūkumas. Projekto rizikos valdymo metodai gali apimti projekto valdymo priemones, išteklių paskirstymo strategijas ir nenumatytų atvejų planavimą.

### Entry Criteria and Exit Criteria

**Paaiškinimas:**

Įėjimo kriterijai ir išėjimo kriterijai - tai pagrindinės programinės įrangos testavimo sąvokos, apibrėžiančios, kada testavimas turėtų būti pradėtas (įėjimo kriterijai) ir kada baigtas (išėjimo kriterijai). 

**Pagrindinės sąvokos:**

1. **Įėjimo kriterijai:** Tai sąlygos, kurios turi būti įvykdytos prieš pradedant testavimą. Tai gali būti tokie reikalavimai kaip tam tikros kūrimo veiklos užbaigimas, galimybė naudotis testavimo aplinka ir testavimo duomenimis arba tam tikrų dokumentų parengimas. Įėjimo kriterijai padeda užtikrinti, kad testavimas būtų pradėtas tinkamu laiku ir kad būtų sudarytos visos būtinos išankstinės testavimo sąlygos.

2. **Išėjimo kriterijai:** Tai sąlygos, kurios turi būti įvykdytos, kad testavimą būtų galima laikyti baigtu. Jie gali apimti tokius reikalavimus, kaip tam tikro testavimo aprėpties lygio pasiekimas, visų didelio prioriteto defektų pašalinimas arba visų suplanuotų testavimo atvejų užbaigimas. Pabaigos kriterijai padeda užtikrinti, kad testavimas nebūtų nutrauktas per anksti ir kad programinė įranga būtų nuodugniai išbandyta prieš ją išleidžiant.

### Test Estimation

**Paaiškinimas:**

Testų įvertinimas - tai procesas, kurio metu numatomas realiausias pastangų kiekis, reikalingas testavimo procesui užbaigti. Tai apima laiką, išteklius ir išlaidas, susijusias su testavimo veikla. Testavimo pastangoms įvertinti gali būti naudojami įvairūs metodai.

**Pagrindinės sąvokos:**

1. **Darbo suskirstymo struktūra (WBS):** Tai hierarchinė visos darbų apimties, kurią turi atlikti projekto komanda, kad pasiektų projekto tikslus ir sukurtų reikiamus rezultatus, dekompozicija. Ji padeda įvertinti testavimo pastangas suskaidant projektą į mažesnes, lengvai valdomas dalis.

2. **Trijų taškų įvertinimas:** Šis metodas naudoja tris įverčius, kad nustatytų apytikslį veiklos sąnaudų intervalą: Tikėtina (M), optimistinė (O) ir pesimistinė (P). Tikėtinos išlaidos E apskaičiuojamos taip: `E = (O + 4M + P) / 6`.

3. **Naudojimo atvejų taškų metodas:** Šis metodas grindžiamas sistemos naudojimo atvejais. Suskaičiuojamas naudojimo atvejų skaičius, o po to koreguojamas atsižvelgiant į sistemos sudėtingumą. Šio metodo formulė yra `UCP = UUCW * TCF * ECF`, kur UUCW - nekoreguotas naudojimo atvejų svoris, TCF - techninis sudėtingumo koeficientas, o ECF - aplinkos sudėtingumo koeficientas.

4. Funkcinių taškų analizė (FPA): Šis metodas grindžiamas sistemos teikiamomis funkcijomis. Jame atsižvelgiama į įėjimų, išėjimų, užklausų, sąsajų ir duomenų failų skaičių ir sudėtingumą. Šio metodo formulė yra `FP = ∑(sudėtingumo svoris * elementų skaičius)`.

5. **Testavimo taškų analizė (TPA):** Šis metodas yra panašus į FPA, tačiau specialiai sukurtas testavimo pastangoms įvertinti. Jame atsižvelgiama į sistemos dydį, sistemos kokybę ir testavimo grupės produktyvumą. Šio metodo formulė yra tokia: `TP = ∑(sudėtingumo svoris * elementų skaičius) * kokybės koeficientas * produktyvumo koeficientas`.

### Test Case Prioritization

**Paaiškinimas:**

Testavimo atvejų prioritetų nustatymas - tai procesas, kurio metu testavimo atvejai išdėstomi pagal jų svarbą arba skubumą. Tikslas - kuo anksčiau aptikti defektus testavimo proceso metu. Prioritetų nustatymas gali būti grindžiamas įvairiais veiksniais, pavyzdžiui, funkcionalumo kritiškumu, nesėkmės tikimybe, nesėkmės poveikiu ir testavimo išlaidomis.

**Pagrindinės sąvokos:**

1. **Testavimo atvejų prioritetų nustatymo svarba:** Prioritetų nustatymas padeda užtikrinti, kad pirmiausia būtų atliekami svarbiausi testai. Tai gali padėti anksti aptikti rimtus defektus, efektyviau panaudoti testavimo išteklius ir pagerinti programinės įrangos kokybę.

2. **Testavimo atvejų prioritetų nustatymo kriterijai:** Testavimo atvejus galima nustatyti pagal įvairius veiksnius.

    - **Poveikis verslui:** Testavimo atvejams, apimantiems didelį poveikį verslui turinčias funkcijas, turėtų būti teikiamas didesnis prioritetas.

    - **Rizikos lygis:** Testavimo atvejams, apimantiems didelės rizikos taikomosios programos sritis, turėtų būti teikiamas didesnis prioritetas.

    - **Panaudojimo dažnumas:** Testavimo atvejams, kurie apima dažnai naudojamas funkcijas, turėtų būti teikiamas didesnis prioritetas.

    - **Sudėtingumas:** Testavimo atvejams, apimantiems sudėtingas funkcijas, turėtų būti teikiamas didesnis prioritetas, nes šiose srityse dažniau pasitaiko defektų.

    - **Priklausomybė:** Testavimo atvejams, apimantiems daug priklausomybių turinčias funkcijas, turėtų būti teikiamas didesnis prioritetas.

## Test Monitoring and Control

**Paaiškinimas:**

Testavimo stebėjimas ir kontrolė - tai testavimo veiklos pažangos ir kokybės stebėjimas, būtinų testavimo proceso korekcijų atlikimas ir informavimas suinteresuotųjų šalių apie testavimo būklę.

**Pagrindinės sąvokos:**

1. **Konfigūracijos valdymas:** Tai testuojamos programinės įrangos versijų, testavimo aplinkos ir testavimo įrangos (testavimo atvejų, testavimo scenarijų, testavimo duomenų) valdymo ir kontrolės procesas. Jis užtikrina, kad atliekant bandymus būtų naudojamos tinkamos visų šių elementų versijos ir kad visi pakeitimai būtų tinkamai stebimi ir valdomi.

2. **Incidentų valdymas:** Tai testavimo metu nustatytų defektų valdymo procesas. Jis apima defektų registravimą, jų priskyrimą sprendimui, jų būklės stebėjimą ir pakartotinį testavimą, kai jie ištaisomi. Incidentų valdymas yra labai svarbus siekiant užtikrinti, kad defektai būtų tinkamai tvarkomi ir kad jų poveikis programinei įrangai būtų kuo mažesnis.

3. **Testavimo ataskaitų rengimas:** Tai apima informavimą suinteresuotosioms šalims apie testavimo būklę. Testavimo ataskaitose paprastai pateikiama informacija apie testavimo eigą, testuojamos sistemos kokybę ir visus nustatytus pavojus ar problemas. Testavimo ataskaitos yra pagrindinė testavimo stebėsenos ir kontrolės priemonė, nes padeda informuoti suinteresuotąsias šalis ir padeda priimti sprendimus.