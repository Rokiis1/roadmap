# Kompiuterių tinklai - apibendrinimas

- [Kompiuterių tinklai 1 lygis - apibendrinimas](#kompiuterių-tinklai-1-lygis---apibendrinimas)
- [Kompiuterių tinklai 2 lygis - apibendrinimas](#kompiuterių-tinklai-2-lygis---apibendrinimas)
- [Kompiuterių tinklai 3 lygis - apibendrinimas](#kompiuterių-tinklai-3-lygis---apibendrinimas)
- [Kompiuterių tinklai 4 lygis - apibendrinimas](#kompiuterių-tinklai-4-lygis---apibendrinimas)

## Kompiuterių tinklai 1 lygis - apibendrinimas

1 lygis supažindina su **kompiuterių tinklų pagrindais**.

Šiame lygyje svarbiausia suprasti, kas yra tinklas, kam jis reikalingas ir kaip įrenginiai gali būti sujungiami tarpusavyje.

**Kompiuterių tinklas** (*computer network*) yra tarpusavyje sujungtų įrenginių sistema, leidžianti jiems keistis duomenimis ir dalintis ištekliais.

Tinkle gali būti

- kompiuteriai
- telefonai
- serveriai
- spausdintuvai
- televizoriai
- išmanieji įrenginiai

Tinklas leidžia įrenginiams veikti ne atskirai, o kaip vienai sistemai.

Pagrindinė tinklų nauda

- duomenų perdavimas
- bendrų išteklių naudojimas
- bendravimas
- prieiga prie interneto
- duomenų saugojimas ir valdymas

**Internetas** (*Internet*) yra didžiausias pasaulyje tinklas, jungiantis daugybę mažesnių tinklų.

Internetas veikia kaip **tinklų tinklas** (*network of networks*).

Kai vartotojas atidaro svetainę, jo įrenginys siunčia užklausą serveriui, o serveris grąžina atsakymą.

Tai vadinama **klientas–serveris** (*client-server*) modeliu.

Pagrindiniai tinklų tipai šiame lygyje

- **LAN** (*Local Area Network*) mažas vietinis tinklas
- **WAN** (*Wide Area Network*) didelis tinklas, jungiantis daug mažesnių tinklų

Įrenginiai gali būti jungiami dviem pagrindiniais būdais

- laidiniu ryšiu (*wired connection*)
- belaidžiu ryšiu (*wireless connection*)

Laidinis ryšys dažniausiai yra greitesnis ir stabilesnis.

Belaidis ryšys yra patogesnis ir lankstesnis.

Svarbiausia įsiminti iš 1 lygio

- tinklas leidžia įrenginiams bendrauti
- tinklai leidžia dalintis duomenimis ir ištekliais
- internetas yra pasaulinis tinklų tinklas
- LAN yra vietinis tinklas
- WAN yra didelis išorinis tinklas
- įrenginiai gali būti jungiami laidiniu arba belaidžiu ryšiu

## Kompiuterių tinklai 2 lygis - apibendrinimas

2 lygis nagrinėja, kaip tinklai veikia iš techninės pusės.

Šiame lygyje svarbu suprasti, kokia įranga naudojama tinkle, kaip įrenginiai sujungiami, kaip jie gauna IP adresus ir kaip atpažįstami tinkle.

Pagrindinė tinklo įranga

- **modemas**
- **hub**
- **switch**
- **router**

**Modemas** leidžia prisijungti prie interneto tiekėjo.

**Hub** perduoda duomenis visiems prijungtiems įrenginiams.

**Switch** perduoda duomenis tik tam įrenginiui, kuriam jie skirti.

**Router** sujungia skirtingus tinklus ir nukreipia duomenis tarp jų.

**Tinklo topologija** (*network topology*) apibrėžia, kaip įrenginiai yra sujungti tinkle.

Pagrindinės topologijos

- **Star**
- **Bus**
- **Ring**
- **Mesh**
- **Tree**
- **Hybrid**
- **Point-to-point**

Dažniausiai naudojama **star** topologija, nes ji yra patikima ir lengvai valdoma.

Interneto prieiga vyksta per interneto tiekėją (*ISP*).

Interneto prieigos būdai gali būti

- laidinis internetas
- belaidis internetas
- mobilusis internetas
- palydovinis internetas

Tinklo protokolai yra taisyklės, kurios nusako, kaip įrenginiai bendrauja tarpusavyje.

TCP/IP modelis skirstomas į sluoksnius

- **Application layer**
- **Transport layer**
- **Internet layer**
- **Network access layer**

Duomenys tinkle perduodami paketais (*packets*).

**IP adresas** (*IP address*) yra unikalus įrenginio adresas tinkle.

IPv4 adresas sudarytas iš 32 bitų ir 4 oktetų.

Pavyzdys

`192.168.1.1`

IPv4 adresas gali būti užrašomas ir dvejetaine forma.

Pavyzdys

`11000000.10101000.00000001.00000001`

IPv6 yra naujesnė IP adresų versija.

Pavyzdys

`2001:0db8:85a3:0000:0000:8a2e:0370:7334`

IP adresų tipai

- **private IP**
- **public IP**
- **static IP**
- **dynamic IP**

**Private IP** naudojamas vietiniame tinkle.

**Public IP** matomas internete.

**Static IP** nekinta.

**Dynamic IP** keičiasi ir dažniausiai priskiriamas automatiškai per DHCP.

**NAT** (*Network Address Translation*) leidžia daugeliui įrenginių naudoti vieną išorinį IP adresą.

**MAC adresas** yra fizinis tinklo įrenginio adresas.

IP adresas nurodo, kur siųsti duomenis tinkle.

MAC adresas nurodo konkretų įrenginį vietiniame tinkle.

Svarbiausia įsiminti iš 2 lygio

- tinklui veikti reikalinga speciali įranga
- router sujungia tinklus ir nukreipia duomenis
- switch perduoda duomenis konkrečiam įrenginiui
- topologija parodo tinklo struktūrą
- IP adresas identifikuoja įrenginį tinkle
- MAC adresas identifikuoja tinklo plokštę
- NAT leidžia naudoti vieną public IP daugeliui įrenginių
- DHCP automatiškai priskiria IP adresus

## Kompiuterių tinklai 3 lygis - apibendrinimas

3 lygis nagrinėja, kaip tinklai naudojami praktikoje.

Šiame lygyje svarbu suprasti tinklo paslaugas, protokolus, architektūras, domenus, URL ir diagnostikos komandas.

Tinklo paslaugos leidžia naudotis internetu praktiškai.

Pagrindinės paslaugos

- svetainių naršymas
- el. paštas
- failų siuntimas
- realaus laiko bendravimas
- automatinis IP adresų priskyrimas

Pagrindiniai protokolai

- **HTTP**
- **HTTPS**
- **FTP**
- **SMTP**
- **POP3**
- **IMAP**
- **DHCP**
- **DNS**

**HTTP** naudojamas svetainėms.

**HTTPS** naudojamas saugiam svetainių naršymui.

**FTP** naudojamas failų siuntimui ir atsisiuntimui.

**SMTP** naudojamas el. laiškų siuntimui.

**POP3** ir **IMAP** naudojami el. laiškų gavimui.

**DHCP** automatiškai priskiria IP adresus įrenginiams.

**DNS** paverčia domenų vardus į IP adresus.

Tinklo architektūra nusako, kaip organizuojamas įrenginių ir paslaugų bendravimas tinkle.

Pagrindinės architektūros

- **Client-Server**
- **Peer-to-Peer**
- **N-Tier**
- **SOA**
- **Hybrid**

**Client-Server** architektūroje klientai jungiasi prie centrinio serverio.

**Peer-to-Peer** architektūroje įrenginiai bendrauja tiesiogiai.

**N-Tier** architektūra padalina sistemą į kelis sluoksnius.

**SOA** sudaryta iš atskirų paslaugų.

**Hybrid** derina kelias architektūras.

**Domenas** yra žmogui suprantamas svetainės pavadinimas.

Pavyzdys

`google.com`

**URL** yra pilnas kelias iki konkretaus resurso internete.

Pavyzdys

`https://www.example.com/index.html`

DNS leidžia domeną paversti IP adresu.

Domenų lygiai

- aukščiausio lygio domenas
- antrojo lygio domenas
- trečiojo lygio domenas arba subdomenas

Įrenginiai gali būti sujungiami per

- Wi-Fi
- Bluetooth
- IoT sprendimus

Tinklo diagnostika padeda rasti tinklo problemas.

Pagrindinės komandos

- `ipconfig`
- `ipconfig /all`
- `getmac /v`
- `ping`
- `tracert`
- `arp -a`
- `netstat -an`
- `nslookup`

`ipconfig` rodo IP informaciją.

`ipconfig /all` rodo detalesnę tinklo informaciją.

`getmac /v` rodo MAC adresus.

`ping` tikrina ryšį.

`tracert` rodo kelią iki serverio.

`arp -a` rodo IP ir MAC adresų ryšius.

`netstat -an` rodo aktyvius ryšius ir portus.

`nslookup` tikrina DNS veikimą.

Svarbiausia įsiminti iš 3 lygio

- tinklo paslaugos veikia naudodamos protokolus
- HTTP ir HTTPS naudojami svetainėms
- DNS domenus paverčia į IP adresus
- DHCP automatiškai priskiria IP adresus
- Client-Server yra dažnas interneto paslaugų modelis
- URL nurodo konkretų resursą internete
- diagnostikos komandos padeda rasti tinklo problemas

## Kompiuterių tinklai 4 lygis - apibendrinimas

4 lygis gilina supratimą apie tinklų tipus ir TCP/IP sluoksnius.

Šiame lygyje daugiau dėmesio skiriama transporto ir interneto sluoksniams.

Papildomi tinklų tipai

- **PAN**
- **MAN**

**PAN** (*Personal Area Network*) yra labai mažas asmeninis tinklas.

PAN dažnai naudojamas su Bluetooth įrenginiais, pavyzdžiui ausinėmis ar išmaniu laikrodžiu.

**MAN** (*Metropolitan Area Network*) yra miesto tinklas.

MAN apima didesnę teritoriją nei LAN, bet mažesnę nei WAN.

Tinklų tipų mastas

- **PAN** labai mažas asmeninis tinklas
- **LAN** vietinis tinklas
- **MAN** miesto tinklas
- **WAN** globalus tinklas

**Transporto sluoksnis** (*Transport layer*) atsakingas už duomenų perdavimą tarp įrenginių.

Transporto sluoksnyje veikia

- **TCP**
- **UDP**

**TCP** (*Transmission Control Protocol*) yra patikimas protokolas.

TCP pirmiausia užmezga ryšį tarp kliento ir serverio.

Tai vadinama **TCP handshake**.

TCP handshake sudaro

- **SYN**
- **SYN-ACK**
- **ACK**

TCP užtikrina, kad duomenys pasiektų tikslą teisinga tvarka.

Jeigu paketas dingsta, TCP gali jį išsiųsti dar kartą.

TCP naudojamas

- HTTP/HTTPS
- SMTP
- FTP

**UDP** (*User Datagram Protocol*) yra greitesnis, bet mažiau patikimas protokolas.

UDP nenaudoja ryšio užmezgimo.

UDP nesiunčia patvirtinimų kaip TCP.

UDP naudojamas

- vaizdo transliacijose
- internetiniuose žaidimuose
- realaus laiko komunikacijoje

**Portas** (*port*) nurodo konkrečią programą ar paslaugą tame pačiame įrenginyje.

IP adresas nurodo įrenginį.

Portas nurodo programą tame įrenginyje.

Svarbūs portai

- `80` HTTP
- `443` HTTPS
- `53` DNS

**Interneto sluoksnis** (*Internet layer*) atsakingas už duomenų nukreipimą tinkle.

Interneto sluoksnyje veikia

- **IP**
- **ICMP**
- **ARP**

**IP** nustato, kur turi būti siunčiami paketai.

**ICMP** naudojamas diagnostikai ir klaidų pranešimams.

ICMP naudojamas komandoje `ping`.

**ARP** susieja IP adresą su MAC adresu.

ARP naudojamas vietiniame tinkle, kai reikia sužinoti, kuris MAC adresas atitinka tam tikrą IP adresą.

Svarbiausia įsiminti iš 4 lygio

- PAN yra asmeninis tinklas
- MAN yra miesto tinklas
- TCP yra patikimas, bet lėtesnis
- UDP yra greitesnis, bet mažiau patikimas
- portai nurodo konkrečias paslaugas ar programas
- IP nukreipia paketus
- ICMP tikrina ryšį
- ARP susieja IP adresus su MAC adresais
- `ping`, `tracert`, `arp -a` ir `netstat` padeda suprasti, kaip veikia tinklas
