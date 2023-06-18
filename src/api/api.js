const products = [
  {
    name: "Trandafiri rosii",
    category: "Trandafir",
    image:
      "https://www.livrarefloribucuresti.ro/images/shop/buchet-din-75-trandafiri-rosii-vknl3l3quq.jpg",
    price: "500.00",
    type: "Buchet",
    description:
      "Un buchet cu trandafiri absolut suberb prin care poti trimite sentimente si gânduri frumoase. Buchetul contine trandafiri roz ?i trandafiri ro?ii, fiind decorat cu frunze parfumate de eucalipt. Comanda acest buchet romantic ?i daruie?te-l cuiva drag. Buchetul va fi livrat la domiciliu oriunde în România, în 2-4 ore!",
    color: "Rosu",
    stock: "20",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Buchet 101 trandafiri",
    accesorii: "panglica rosie",
    id: "38",
  },
  {
    name: "Trandafiri roz",
    category: "Trandafir",
    image:
      "https://www.baiatulcuflori.ro/pub/media/catalog/product/cache/470e10ecd250c2e831166398d8a4326f/8/1/817c7363.jpg",
    price: "100.00",
    type: "Buchet",
    description:
      "Un buchet cu trandafiri absolut suberb prin care poti trimite sentimente si gânduri frumoase. Buchetul contine trandafiri roz ?i trandafiri ro?ii, fiind decorat cu frunze parfumate de eucalipt. Comanda acest buchet romantic ?i daruie?te-l cuiva drag. Buchetul va fi livrat la domiciliu oriunde în România, în 2-4 ore!",
    color: "Roz",
    stock: "20",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Buchet 9 trandafiri",
    accesorii: "plasa",
    id: "39",
  },
  {
    name: "Trandafiri galbeni",
    category: "Trandafir",
    image:
      "https://www.baiatulcuflori.ro/pub/media/catalog/product/cache/470e10ecd250c2e831166398d8a4326f/8/1/817c7356.jpg",
    price: "300.00",
    type: "Buchet",
    description:
      "Un buchet cu trandafiri absolut suberb prin care poti trimite sentimente si gânduri frumoase. Buchetul contine trandafiri roz ?i trandafiri ro?ii, fiind decorat cu frunze parfumate de eucalipt. Comanda acest buchet romantic ?i daruie?te-l cuiva drag. Buchetul va fi livrat la domiciliu oriunde în România, în 2-4 ore!",
    color: "Galben",
    stock: "10",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Buchet 51 trandafiri",
    accesorii: "plasa",
    id: "40",
  },
  {
    name: "Trandafiri albi",
    category: "Trandafir",
    image:
      "https://www.floriinmures.ro/wp-content/uploads/2021/05/Buchet-de-flori-101-Trandafiri-Albi.jpg",
    price: "600.00",
    type: "Buchet",
    description:
      "Un buchet cu trandafiri absolut suberb prin care poti trimite sentimente si gânduri frumoase. Buchetul contine trandafiri roz ?i trandafiri ro?ii, fiind decorat cu frunze parfumate de eucalipt. Comanda acest buchet romantic ?i daruie?te-l cuiva drag. Buchetul va fi livrat la domiciliu oriunde în România, în 2-4 ore!",
    color: "Alb",
    stock: "1100",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Buchet 101 trandafiri",
    accesorii: "panglica alba",
    id: "41",
  },
  {
    name: "Lalele albe",
    category: "Lalea",
    image:
      "https://s13emagst.akamaized.net/products/46231/46230684/images/res_290345c873e4971150db83214336a98f.png?width=450&height=450&hash=3148307694B761F4040952EC0827D25F",
    price: "100.00",
    type: "Buchet",
    description:
      "Un buchet cu lalele absolut suberb prin care poti trimite sentimente si gânduri frumoase. Buchetul contine lalele roz si trandafiri ro?ii, fiind decorat cu frunze parfumate de eucalipt. Comanda acest buchet romantic si daruieste-l cuiva drag. Buchetul va fi livrat la domiciliu oriunde în România, în 2-4 ore!",
    color: "Alb",
    stock: "100",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Buchet 21 lalele",
    accesorii: "panglica portocalie",
    id: "42",
  },
  {
    name: "Lalele portocalii",
    category: "Lalea",
    image:
      "https://s13emagst.akamaized.net/products/46231/46230705/images/res_2f80f4ff0e199fadd2ac6f7dac880072.png?width=450&height=450&hash=6B8ABADE7F84B546AFEB2DB41703F880",
    price: "100.00",
    type: "Buchet",
    description:
      "Un buchet cu lalele absolut suberb prin care poti trimite sentimente si gânduri frumoase. Buchetul contine lalele portocalii, fiind decorat cu frunze parfumate de eucalipt. Comanda acest buchet romantic si daruieste-l cuiva drag. Buchetul va fi livrat la domiciliu oriunde în România, în 2-4 ore!",
    color: "Portocaliu",
    stock: "100",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Buchet 27 lalele",
    accesorii: "panglica portocalie",
    id: "43",
  },
  {
    name: "Lalele rosii",
    category: "Lalea",
    image:
      "https://s13emagst.akamaized.net/products/46231/46230694/images/res_2a7372400e2840cd9cd0970991005346.png?width=450&height=450&hash=5CB591D16C23B4B5B24386AB43B59EC0",
    price: "100.00",
    type: "Buchet",
    description:
      "Un buchet cu lalele absolut suberb prin care poti trimite sentimente si gânduri frumoase. Buchetul contine lalele portocalii, fiind decorat cu frunze parfumate de eucalipt. Comanda acest buchet romantic si daruieste-l cuiva drag. Buchetul va fi livrat la domiciliu oriunde în România, în 2-4 ore!",
    color: "Rosu",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Buchet 27 lalele",
    accesorii: "panglica portocalie",
    id: "44",
  },
  {
    name: "Narcise albe",
    category: "Narcisa",
    image:
      "https://s13emagst.akamaized.net/products/52831/52830122/images/res_e5c93deb076ebe9c47e8582de3251773.jpg",
    price: "30.00",
    type: "Buchet",
    description:
      "Narcisa este un gen originar din nordul Africii, regiuni mediteraneene ?i Europa Centrala, circa 32 specii erbacee, bulboase. Termenul de narcisa vine de la mitul frumosului tânar Narcis din mitologia greaca, care s-ar fi îndragostit de chipul sau. ",
    color: "Alb",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Buchet 6 narcise",
    accesorii: "panglica portocalie",
    id: "45",
  },
  {
    name: "Crini albi",
    category: "Crin",
    image:
      "https://www.floridelux.ro/images/products//c/r/crini_albi_in_buchet._.jpg",
    price: "100.00",
    type: "Buchet",
    description:
      "Crinul este numele popular al genului Lilium, un gen de plante cu flori erbacee ce cresc din bulbi. Cele mai multe specii sunt native emisferei nordice temperate. Ele cuprind un gen de circa 110 specii din familia crinului. Au o importanta culturala si literara în mare parte a lumii.",
    color: "Alb",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Buchet 9 crini",
    accesorii: "panglica portocalie",
    id: "46",
  },
  {
    name: "Crini roz",
    category: "Crin",
    image:
      "https://www.missely.ro/wp-content/uploads/2019/11/buchet-de-crini-roz.jpg",
    price: "200.00",
    type: "Buchet",
    description:
      "Crinul este numele popular al genului Lilium, un gen de plante cu flori erbacee ce cresc din bulbi. Cele mai multe specii sunt native emisferei nordice temperate. Ele cuprind un gen de circa 110 specii din familia crinului. Au o importanta culturala si literara în mare parte a lumii.",
    color: "Roz",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Buchet 5 crini imperiali",
    accesorii: "panglica portocalie",
    id: "47",
  },
  {
    name: "Crini rosii",
    category: "Crin",
    image:
      "https://www.floraria-amazon.ro/pub/media/amasty/webp/catalog/product/cache/0dcde9b4e48e0e277539e8a55aa239dd/b/u/buchet-de-crini-amarilis-rosii-florarie-craiova-cu-livrare.webp",
    price: "250.00",
    type: "Buchet",
    description:
      "Crinul este numele popular al genului Lilium, un gen de plante cu flori erbacee ce cresc din bulbi. Cele mai multe specii sunt native emisferei nordice temperate. Ele cuprind un gen de circa 110 specii din familia crinului. Au o importanta culturala si literara în mare parte a lumii.",
    color: "Rosu",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Buchet 15 crini",
    accesorii: "panglica portocalie",
    id: "48",
  },
  {
    name: "Crini galbeni",
    category: "Crin",
    image:
      "https://emotii.md/storage//resize/media/475x475-PzzzRhCK4PNcjzLUNzH4t9SvHuh21UTpJ9Rasi2q.png",
    price: "100.00",
    type: "Buchet",
    description:
      "Crinul este numele popular al genului Lilium, un gen de plante cu flori erbacee ce cresc din bulbi. Cele mai multe specii sunt native emisferei nordice temperate. Ele cuprind un gen de circa 110 specii din familia crinului. Au o importanta culturala si literara în mare parte a lumii.",
    color: "Galben",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Buchet 5 crini",
    accesorii: "panglica portocalie",
    id: "49",
  },
  {
    name: "Bujori roz",
    category: "Bujor",
    image: "https://www.magnolia.ro/images/products/16219483554987.jpg",
    price: "300.00",
    type: "Buchet",
    description:
      "Bujorul este, prin excelenta, o planta rustica, rezistenta, cu viata lunga, foarte decorativ si cu un parfum puternic si extrem de placut. Perioada de inflorire este primavara, aprilie - mai in unele zone mergand spre inceput de iunie.",
    color: "Roz",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Buchet 19 bujori",
    accesorii: "panglica portocalie",
    id: "50",
  },
  {
    name: "Orhidee albastra",
    category: "Orhidee",
    image:
      "https://florariatrias.b-cdn.net/wp-content/uploads/2019/12/20200731_093449.jpg",
    price: "85.00",
    type: "Ghiveci",
    description:
      "Phalaenopsis Soft Cloud este o orhidee multiflora spectaculoasa, ce impresioneaza prin numarul mare de flori de pe fiecare tija. Un adevarat copacel cu flori, in miniatura!",
    color: "Albastru",
    stock: "1000",
    ingrijire:
      "In functie de specie, exigentele termice se incadreaza in intervalul 16–30°C ziua si 12–24°C noaptea pentru sezonul cald, respectiv 13–26°C ziua si 10–20°C noaptea pentru sezonul rece. Fiind plante tropicale, orhideele iubesc umiditatea atmosferica. Substratul de cultura trebuie sa fe cat mai poros, afanat, sa asigure un bun drenaj al apei. Vasul orhideelor epifite este de preferat sa fie transparent, deoarece radacinile acesteia au nevoie de lumina pentru efectuarea fotosintezei. Pentru o buna ventilare a radacinilor, este necesar ca vasul sa aiba suficiente orificii in partea de jos, astfel incat sa nu existe riscul ca apa sa stagneze.",
    continut: "Orhidee colorata la ghiveci",
    accesorii: "ghiveci transparent",
    id: "51",
  },
  {
    name: "Orhidee alba",
    category: "Orhidee",
    image:
      "https://decortrendy.ro/image/cache/catalog/import/206686-104-800x800.jpg",
    price: "185.00",
    type: "Ghiveci",
    description:
      "Phalaenopsis Soft Cloud este o orhidee multiflora spectaculoasa, ce impresioneaza prin numarul mare de flori de pe fiecare tija. Un adevarat copacel cu flori, in miniatura!",
    color: "Alb",
    stock: "1000",
    ingrijire:
      "In functie de specie, exigentele termice se incadreaza in intervalul 16–30°C ziua si 12–24°C noaptea pentru sezonul cald, respectiv 13–26°C ziua si 10–20°C noaptea pentru sezonul rece. Fiind plante tropicale, orhideele iubesc umiditatea atmosferica. Substratul de cultura trebuie sa fe cat mai poros, afanat, sa asigure un bun drenaj al apei. Vasul orhideelor epifite este de preferat sa fie transparent, deoarece radacinile acesteia au nevoie de lumina pentru efectuarea fotosintezei. Pentru o buna ventilare a radacinilor, este necesar ca vasul sa aiba suficiente orificii in partea de jos, astfel incat sa nu existe riscul ca apa sa stagneze.",
    continut: "Orhidee colorata la ghiveci",
    accesorii: "ghiveci transparent",
    id: "52",
  },
  {
    name: "Orhidee roz",
    category: "Orhidee",
    image:
      "https://gomagcdn.ro/domains2/buchet-express.ro/files/product/original/orhidee-patata-687-598181.png",
    price: "100.00",
    type: "Ghiveci",
    description:
      "Phalaenopsis Soft Cloud este o orhidee multiflora spectaculoasa, ce impresioneaza prin numarul mare de flori de pe fiecare tija. Un adevarat copacel cu flori, in miniatura!",
    color: "Roz",
    stock: "1000",
    ingrijire:
      "In functie de specie, exigentele termice se incadreaza in intervalul 16–30°C ziua si 12–24°C noaptea pentru sezonul cald, respectiv 13–26°C ziua si 10–20°C noaptea pentru sezonul rece. Fiind plante tropicale, orhideele iubesc umiditatea atmosferica. Substratul de cultura trebuie sa fe cat mai poros, afanat, sa asigure un bun drenaj al apei. Vasul orhideelor epifite este de preferat sa fie transparent, deoarece radacinile acesteia au nevoie de lumina pentru efectuarea fotosintezei. Pentru o buna ventilare a radacinilor, este necesar ca vasul sa aiba suficiente orificii in partea de jos, astfel incat sa nu existe riscul ca apa sa stagneze.",
    continut: "Orhidee colorata la ghiveci",
    accesorii: "ghiveci transparent",
    id: "53",
  },
  {
    name: "Orhidee galbena",
    category: "Orhidee",
    image: "https://www.magnolia.ro/images/products/16363776434057_2.jpg",
    price: "150.00",
    type: "Ghiveci",
    description:
      "Phalaenopsis Soft Cloud este o orhidee multiflora spectaculoasa, ce impresioneaza prin numarul mare de flori de pe fiecare tija. Un adevarat copacel cu flori, in miniatura!",
    color: "Galben",
    stock: "1000",
    ingrijire:
      "In functie de specie, exigentele termice se incadreaza in intervalul 16–30°C ziua si 12–24°C noaptea pentru sezonul cald, respectiv 13–26°C ziua si 10–20°C noaptea pentru sezonul rece. Fiind plante tropicale, orhideele iubesc umiditatea atmosferica. Substratul de cultura trebuie sa fe cat mai poros, afanat, sa asigure un bun drenaj al apei. Vasul orhideelor epifite este de preferat sa fie transparent, deoarece radacinile acesteia au nevoie de lumina pentru efectuarea fotosintezei. Pentru o buna ventilare a radacinilor, este necesar ca vasul sa aiba suficiente orificii in partea de jos, astfel incat sa nu existe riscul ca apa sa stagneze.",
    continut: "Orhidee colorata la ghiveci",
    accesorii: "ghiveci transparent",
    id: "54",
  },
  {
    name: "Orhidee roz",
    category: "Orhidee",
    image:
      "https://pami.ro/73412-large_default/orhidee-artificiala-in-ghiveci-pami-f1021-101-12x12x50cm.jpg",
    price: "100.00",
    type: "Ghiveci",
    description:
      "Phalaenopsis Soft Cloud este o orhidee multiflora spectaculoasa, ce impresioneaza prin numarul mare de flori de pe fiecare tija. Un adevarat copacel cu flori, in miniatura!",
    color: "Roz",
    stock: "1000",
    ingrijire:
      "In functie de specie, exigentele termice se incadreaza in intervalul 16–30°C ziua si 12–24°C noaptea pentru sezonul cald, respectiv 13–26°C ziua si 10–20°C noaptea pentru sezonul rece. Fiind plante tropicale, orhideele iubesc umiditatea atmosferica. Substratul de cultura trebuie sa fe cat mai poros, afanat, sa asigure un bun drenaj al apei. Vasul orhideelor epifite este de preferat sa fie transparent, deoarece radacinile acesteia au nevoie de lumina pentru efectuarea fotosintezei. Pentru o buna ventilare a radacinilor, este necesar ca vasul sa aiba suficiente orificii in partea de jos, astfel incat sa nu existe riscul ca apa sa stagneze.",
    continut: "Orhidee colorata la ghiveci",
    accesorii: "ghiveci transparent",
    id: "55",
  },
  {
    name: "Orhidee roz",
    category: "Orhidee",
    image:
      "https://s13emagst.akamaized.net/products/49767/49766546/images/res_93ceb3ad02bec932f1f30d8848814fff.jpg",
    price: "120.00",
    type: "Ghiveci",
    description:
      "Phalaenopsis Soft Cloud este o orhidee multiflora spectaculoasa, ce impresioneaza prin numarul mare de flori de pe fiecare tija. Un adevarat copacel cu flori, in miniatura!",
    color: "Roz",
    stock: "1000",
    ingrijire:
      "In functie de specie, exigentele termice se incadreaza in intervalul 16–30°C ziua si 12–24°C noaptea pentru sezonul cald, respectiv 13–26°C ziua si 10–20°C noaptea pentru sezonul rece. Fiind plante tropicale, orhideele iubesc umiditatea atmosferica. Substratul de cultura trebuie sa fe cat mai poros, afanat, sa asigure un bun drenaj al apei. Vasul orhideelor epifite este de preferat sa fie transparent, deoarece radacinile acesteia au nevoie de lumina pentru efectuarea fotosintezei. Pentru o buna ventilare a radacinilor, este necesar ca vasul sa aiba suficiente orificii in partea de jos, astfel incat sa nu existe riscul ca apa sa stagneze.",
    continut: "Orhidee colorata la ghiveci",
    accesorii: "ghiveci transparent",
    id: "56",
  },
  {
    name: "Orhidee alba",
    category: "Orhidee",
    image:
      "https://bloomeria.ro/pub/media/catalog/product/cache/144068e954ae91d1e428f8fd22b26682/a/r/aranjamet-plante-phalaenopsis.jpg",
    price: "150.00",
    type: "Ghiveci",
    description:
      "Phalaenopsis Soft Cloud este o orhidee multiflora spectaculoasa, ce impresioneaza prin numarul mare de flori de pe fiecare tija. Un adevarat copacel cu flori, in miniatura!",
    color: "Alb",
    stock: "1000",
    ingrijire:
      "In functie de specie, exigentele termice se incadreaza in intervalul 16–30°C ziua si 12–24°C noaptea pentru sezonul cald, respectiv 13–26°C ziua si 10–20°C noaptea pentru sezonul rece. Fiind plante tropicale, orhideele iubesc umiditatea atmosferica. Substratul de cultura trebuie sa fe cat mai poros, afanat, sa asigure un bun drenaj al apei. Vasul orhideelor epifite este de preferat sa fie transparent, deoarece radacinile acesteia au nevoie de lumina pentru efectuarea fotosintezei. Pentru o buna ventilare a radacinilor, este necesar ca vasul sa aiba suficiente orificii in partea de jos, astfel incat sa nu existe riscul ca apa sa stagneze.",
    continut: "Orhidee colorata la ghiveci",
    accesorii: "ghiveci transparent",
    id: "57",
  },
  {
    name: "Orhidee rosie",
    category: "Orhidee",
    image:
      "https://images.kkeu.de/is/image/BEG/Dot%C4%83ri_de_birou_articole_de_birou/Plante_artificiale/Phalaenopsis_%C3%AEn_ghiveci_ceramic_pdplarge-mrd--570324_AFS_00_00_00_7920825.jpg?wid=1340&hei=1340",
    price: "350.00",
    type: "Ghiveci",
    description:
      "Aceasta magnifica orhidee este eleganta ?i decorativa. Replica de Phalaenopsis impresioneaza, în special, prin aspectul sau plin de flori ?i fin lucrat – cu finisajul în detaliu ?i inspirat din iubirea fa?a de natura, aceasta nu poate fi distinsa de original decât la o a doua privire atenta. Atemporala, într-un ghiveci elegant din ceramica, aceasta Phalaenopsis u?or de între?inut devine un adevarat punct de atrac?ie ?i o declara?ie de bun gust în ambientul dumneavoastra. Fie pe birou sau în zona de recep?ie – aceste flori de vis creeaza o atmosfera eleganta în spa?iile dumneavoastra.",
    color: "Rosu",
    stock: "1000",
    ingrijire:
      "In functie de specie, exigentele termice se incadreaza in intervalul 16–30°C ziua si 12–24°C noaptea pentru sezonul cald, respectiv 13–26°C ziua si 10–20°C noaptea pentru sezonul rece. Fiind plante tropicale, orhideele iubesc umiditatea atmosferica. Substratul de cultura trebuie sa fe cat mai poros, afanat, sa asigure un bun drenaj al apei. Vasul orhideelor epifite este de preferat sa fie transparent, deoarece radacinile acesteia au nevoie de lumina pentru efectuarea fotosintezei. Pentru o buna ventilare a radacinilor, este necesar ca vasul sa aiba suficiente orificii in partea de jos, astfel incat sa nu existe riscul ca apa sa stagneze.",
    continut: "Orhidee colorata la ghiveci",
    accesorii: "ghiveci transparent",
    id: "58",
  },
  {
    name: "Orhidee roz",
    category: "Orhidee",
    image:
      "https://s13emagst.akamaized.net/products/35239/35238764/images/res_c8b995b6296a4eff6e0b4f8e510ad7e9.jpg",
    price: "100.00",
    type: "Ghiveci",
    description:
      "Phalaenopsis Soft Cloud este o orhidee multiflora spectaculoasa, ce impresioneaza prin numarul mare de flori de pe fiecare tija. Un adevarat copacel cu flori, in miniatura!",
    color: "Roz",
    stock: "1000",
    ingrijire:
      "In functie de specie, exigentele termice se incadreaza in intervalul 16–30°C ziua si 12–24°C noaptea pentru sezonul cald, respectiv 13–26°C ziua si 10–20°C noaptea pentru sezonul rece. Fiind plante tropicale, orhideele iubesc umiditatea atmosferica. Substratul de cultura trebuie sa fe cat mai poros, afanat, sa asigure un bun drenaj al apei. Vasul orhideelor epifite este de preferat sa fie transparent, deoarece radacinile acesteia au nevoie de lumina pentru efectuarea fotosintezei. Pentru o buna ventilare a radacinilor, este necesar ca vasul sa aiba suficiente orificii in partea de jos, astfel incat sa nu existe riscul ca apa sa stagneze.",
    continut: "Orhidee colorata la ghiveci",
    accesorii: "ghiveci transparent",
    id: "59",
  },
  {
    name: "Orhidee roz",
    category: "Orhidee",
    image:
      "https://s13emagst.akamaized.net/products/49566/49565857/images/res_c55fa6b15357be0005d0558128509e58.jpg",
    price: "100.00",
    type: "Ghiveci",
    description:
      "Phalaenopsis Soft Cloud este o orhidee multiflora spectaculoasa, ce impresioneaza prin numarul mare de flori de pe fiecare tija. Un adevarat copacel cu flori, in miniatura!",
    color: "Roz",
    stock: "1000",
    ingrijire:
      "In functie de specie, exigentele termice se incadreaza in intervalul 16–30°C ziua si 12–24°C noaptea pentru sezonul cald, respectiv 13–26°C ziua si 10–20°C noaptea pentru sezonul rece. Fiind plante tropicale, orhideele iubesc umiditatea atmosferica. Substratul de cultura trebuie sa fe cat mai poros, afanat, sa asigure un bun drenaj al apei. Vasul orhideelor epifite este de preferat sa fie transparent, deoarece radacinile acesteia au nevoie de lumina pentru efectuarea fotosintezei. Pentru o buna ventilare a radacinilor, este necesar ca vasul sa aiba suficiente orificii in partea de jos, astfel incat sa nu existe riscul ca apa sa stagneze.",
    continut: "Orhidee colorata la ghiveci",
    accesorii: "ghiveci transparent",
    id: "60",
  },
  {
    name: "Orhidee roz",
    category: "Orhidee",
    image:
      "https://d1jtwkmfe1h6h4.cloudfront.net/media/catalog/product/a/r/aranjament_in_ghiveci_ceramic_orhidee_phalenopsis_fucsia_h54_cm_1.jpg",
    price: "100.00",
    type: "Ghiveci",
    description:
      "Phalaenopsis Soft Cloud este o orhidee multiflora spectaculoasa, ce impresioneaza prin numarul mare de flori de pe fiecare tija. Un adevarat copacel cu flori, in miniatura!",
    color: "Roz",
    stock: "1000",
    ingrijire:
      "In functie de specie, exigentele termice se incadreaza in intervalul 16–30°C ziua si 12–24°C noaptea pentru sezonul cald, respectiv 13–26°C ziua si 10–20°C noaptea pentru sezonul rece. Fiind plante tropicale, orhideele iubesc umiditatea atmosferica. Substratul de cultura trebuie sa fe cat mai poros, afanat, sa asigure un bun drenaj al apei. Vasul orhideelor epifite este de preferat sa fie transparent, deoarece radacinile acesteia au nevoie de lumina pentru efectuarea fotosintezei. Pentru o buna ventilare a radacinilor, este necesar ca vasul sa aiba suficiente orificii in partea de jos, astfel incat sa nu existe riscul ca apa sa stagneze.",
    continut: "Orhidee colorata la ghiveci",
    accesorii: "ghiveci transparent",
    id: "61",
  },
  {
    name: "Orhidee roz",
    category: "Orhidee",
    image:
      "https://www.maisondor.ro/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/r/aranjament-cu-orhidee-phalaenopsis-bicolor.jpg",
    price: "100.00",
    type: "Ghiveci",
    description:
      "Phalaenopsis Soft Cloud este o orhidee multiflora spectaculoasa, ce impresioneaza prin numarul mare de flori de pe fiecare tija. Un adevarat copacel cu flori, in miniatura!",
    color: "Roz",
    stock: "1000",
    ingrijire:
      "In functie de specie, exigentele termice se incadreaza in intervalul 16–30°C ziua si 12–24°C noaptea pentru sezonul cald, respectiv 13–26°C ziua si 10–20°C noaptea pentru sezonul rece. Fiind plante tropicale, orhideele iubesc umiditatea atmosferica. Substratul de cultura trebuie sa fe cat mai poros, afanat, sa asigure un bun drenaj al apei. Vasul orhideelor epifite este de preferat sa fie transparent, deoarece radacinile acesteia au nevoie de lumina pentru efectuarea fotosintezei. Pentru o buna ventilare a radacinilor, este necesar ca vasul sa aiba suficiente orificii in partea de jos, astfel incat sa nu existe riscul ca apa sa stagneze.",
    continut: "Orhidee colorata la ghiveci",
    accesorii: "ghiveci transparent",
    id: "62",
  },
  {
    name: "Orhidee roz",
    category: "Orhidee",
    image:
      "https://www.floraria-amazon.ro/pub/media/amasty/webp/catalog/product/cache/0dcde9b4e48e0e277539e8a55aa239dd/a/m/amz-buchet-orhidee-roz.webp",
    price: "300.00",
    type: "Buchet",
    description:
      "Phalaenopsis Soft Cloud este o orhidee multiflora spectaculoasa, ce impresioneaza prin numarul mare de flori de pe fiecare tija. Un adevarat copacel cu flori, in miniatura!",
    color: "Roz",
    stock: "1000",
    ingrijire:
      "In functie de specie, exigentele termice se incadreaza in intervalul 16–30°C ziua si 12–24°C noaptea pentru sezonul cald, respectiv 13–26°C ziua si 10–20°C noaptea pentru sezonul rece. Fiind plante tropicale, orhideele iubesc umiditatea atmosferica. Substratul de cultura trebuie sa fe cat mai poros, afanat, sa asigure un bun drenaj al apei. Vasul orhideelor epifite este de preferat sa fie transparent, deoarece radacinile acesteia au nevoie de lumina pentru efectuarea fotosintezei. Pentru o buna ventilare a radacinilor, este necesar ca vasul sa aiba suficiente orificii in partea de jos, astfel incat sa nu existe riscul ca apa sa stagneze.",
    continut: "Orhidee colorata la ghiveci",
    accesorii: "ghiveci transparent",
    id: "63",
  },
  {
    name: "Iris mov",
    category: "Iris",
    image:
      "https://www.floraria-amazon.ro/pub/media/catalog/product/cache/144068e954ae91d1e428f8fd22b26682/a/m/amz-buchet-flori-mov-vanda.jpg",
    price: "300.00",
    type: "Buchet",
    description: "Buchet flori mov irisi lisianthus clemathis orhidee",
    color: "Mov",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Iris mov la fir",
    accesorii: "-",
    id: "64",
  },
  {
    name: "Trandafiri rosii",
    category: "Trandafir",
    image:
      "https://florariatrias.b-cdn.net/wp-content/uploads/2019/12/rosa-mini.jpg",
    price: "60.00",
    type: "Ghiveci",
    description: "Trandafiri - rosa mini-mini trandafirul tau de gradina",
    color: "Rosu",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Iris mov la fir",
    accesorii: "-",
    id: "65",
  },
  {
    name: "Trandafiri roz",
    category: "Trandafir",
    image:
      "https://florariacupovesti.ro/3781-medium_default/buchet-11-trandafiri-roz.jpg",
    price: "260.00",
    type: "Buchet",
    description: "Buchet cu 11 trandafiri roz",
    color: "Roz",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Iris mov la fir",
    accesorii: "-",
    id: "66",
  },
  {
    name: "Trandafiri albi",
    category: "Trandafir",
    image: "https://www.magnolia.ro/images/products/1624455831img_9293.jpg",
    price: "290.00",
    type: "Buchet",
    description:
      "Trandafirii albi sunt simbolul aprecierii sincere, asa ca poti oferi cu încredere un buchet cu trandafiri albi pentru o persoana careia vrei sa îi arati recunostinta ta. Comanda un buchet cu trandafiri online si te asiguram ca destinatarul va avea o surpriza nemaipomenita. Livram flori prin curier direct la tine acasa sau direct persoanei careia vrei sa îi faci o bucurie. E mai simplu decât ai crede!",
    color: "Alb",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Iris mov la fir",
    accesorii: "-",
    id: "67",
  },
  {
    name: "Orhidee albastra",
    category: "Orhidee",
    image:
      "https://c.cdnmp.net/612208531/p/l/0/orhidee-artificiala-vivilinen-albastru-alb-ceramica-matase-19-x-12-5-x~251770.jpg",
    price: "190.00",
    type: "Ghiveci",
    description:
      "Phalaenopsis Soft Cloud este o orhidee multiflora spectaculoasa, ce impresioneaza prin numarul mare de flori de pe fiecare tija. Un adevarat copacel cu flori, in miniatura!",
    color: "Albastru",
    stock: "1000",
    ingrijire:
      "In functie de specie, exigentele termice se incadreaza in intervalul 16–30°C ziua si 12–24°C noaptea pentru sezonul cald, respectiv 13–26°C ziua si 10–20°C noaptea pentru sezonul rece. Fiind plante tropicale, orhideele iubesc umiditatea atmosferica. Substratul de cultura trebuie sa fe cat mai poros, afanat, sa asigure un bun drenaj al apei. Vasul orhideelor epifite este de preferat sa fie transparent, deoarece radacinile acesteia au nevoie de lumina pentru efectuarea fotosintezei. Pentru o buna ventilare a radacinilor, este necesar ca vasul sa aiba suficiente orificii in partea de jos, astfel incat sa nu existe riscul ca apa sa stagneze.",
    continut: "Orhidee colorata la ghiveci",
    accesorii: "ghiveci transparent",
    id: "68",
  },
  {
    name: "Orhidee albastra",
    category: "Orhidee",
    image:
      "https://mercaton.ro/wp-content/uploads/2022/04/Orhidee-arificiala-cu-ghiveci-de-ceramica-albastru-70-cm-Springos.jpg",
    price: "170.00",
    type: "Ghiveci",
    description: "Orhidee albastra la ghiveci",
    color: "Albastru",
    stock: "1000",
    ingrijire:
      "In functie de specie, exigentele termice se incadreaza in intervalul 16–30°C ziua si 12–24°C noaptea pentru sezonul cald, respectiv 13–26°C ziua si 10–20°C noaptea pentru sezonul rece. Fiind plante tropicale, orhideele iubesc umiditatea atmosferica. Substratul de cultura trebuie sa fe cat mai poros, afanat, sa asigure un bun drenaj al apei. Vasul orhideelor epifite este de preferat sa fie transparent, deoarece radacinile acesteia au nevoie de lumina pentru efectuarea fotosintezei. Pentru o buna ventilare a radacinilor, este necesar ca vasul sa aiba suficiente orificii in partea de jos, astfel incat sa nu existe riscul ca apa sa stagneze.",
    continut: "Orhidee colorata la ghiveci",
    accesorii: "ghiveci transparent",
    id: "69",
  },
  {
    name: "Orhidee mov",
    category: "Orhidee",
    image:
      "https://images.kkeu.de/is/image/BEG/Dot%C4%83ri_de_birou_articole_de_birou/Plante_artificiale/Phalaenopsis_real_touch_pdplarge-mrd--570308_AFS_00_00_00_7920806.jpg?wid=1340&hei=1340",
    price: "150.00",
    type: "Ghiveci",
    description:
      "Phalaenopsis Soft Cloud este o orhidee multiflora spectaculoasa, ce impresioneaza prin numarul mare de flori de pe fiecare tija. Un adevarat copacel cu flori, in miniatura!",
    color: "Mov",
    stock: "1000",
    ingrijire:
      "In functie de specie, exigentele termice se incadreaza in intervalul 16–30°C ziua si 12–24°C noaptea pentru sezonul cald, respectiv 13–26°C ziua si 10–20°C noaptea pentru sezonul rece. Fiind plante tropicale, orhideele iubesc umiditatea atmosferica. Substratul de cultura trebuie sa fe cat mai poros, afanat, sa asigure un bun drenaj al apei. Vasul orhideelor epifite este de preferat sa fie transparent, deoarece radacinile acesteia au nevoie de lumina pentru efectuarea fotosintezei. Pentru o buna ventilare a radacinilor, este necesar ca vasul sa aiba suficiente orificii in partea de jos, astfel incat sa nu existe riscul ca apa sa stagneze.",
    continut: "Orhidee colorata la ghiveci",
    accesorii: "ghiveci transparent",
    id: "70",
  },
  {
    name: "Orhidee mov",
    category: "Orhidee",
    image:
      "https://images.kkeu.de/is/image/BEG/Dot%C4%83ri_de_birou_articole_de_birou/Plante_artificiale/Phalaenopsis_real_touch_pdplarge-mrd--570292_AFS_00_00_00_7920787.jpg?wid=1340&hei=1340",
    price: "250.00",
    type: "Ghiveci",
    description:
      "Phalaenopsis Soft Cloud este o orhidee multiflora spectaculoasa, ce impresioneaza prin numarul mare de flori de pe fiecare tija. Un adevarat copacel cu flori, in miniatura!",
    color: "Mov",
    stock: "1000",
    ingrijire:
      "In functie de specie, exigentele termice se incadreaza in intervalul 16–30°C ziua si 12–24°C noaptea pentru sezonul cald, respectiv 13–26°C ziua si 10–20°C noaptea pentru sezonul rece. Fiind plante tropicale, orhideele iubesc umiditatea atmosferica. Substratul de cultura trebuie sa fe cat mai poros, afanat, sa asigure un bun drenaj al apei. Vasul orhideelor epifite este de preferat sa fie transparent, deoarece radacinile acesteia au nevoie de lumina pentru efectuarea fotosintezei. Pentru o buna ventilare a radacinilor, este necesar ca vasul sa aiba suficiente orificii in partea de jos, astfel incat sa nu existe riscul ca apa sa stagneze.",
    continut: "Orhidee colorata la ghiveci",
    accesorii: "ghiveci transparent",
    id: "71",
  },
  {
    name: "Orhidee alba",
    category: "Orhidee",
    image:
      "https://images.kkeu.de/is/image/BEG/Dot%C4%83ri_de_birou_articole_de_birou/Plante_artificiale/Phalaenopsis_real_touch_pdplarge-mrd--570291_AFS_00_00_00_7920786.jpg?wid=1340&hei=1340",
    price: "200.00",
    type: "Ghiveci",
    description:
      "Phalaenopsis Soft Cloud este o orhidee multiflora spectaculoasa, ce impresioneaza prin numarul mare de flori de pe fiecare tija. Un adevarat copacel cu flori, in miniatura!",
    color: "Alb",
    stock: "1000",
    ingrijire:
      "In functie de specie, exigentele termice se incadreaza in intervalul 16–30°C ziua si 12–24°C noaptea pentru sezonul cald, respectiv 13–26°C ziua si 10–20°C noaptea pentru sezonul rece. Fiind plante tropicale, orhideele iubesc umiditatea atmosferica. Substratul de cultura trebuie sa fe cat mai poros, afanat, sa asigure un bun drenaj al apei. Vasul orhideelor epifite este de preferat sa fie transparent, deoarece radacinile acesteia au nevoie de lumina pentru efectuarea fotosintezei. Pentru o buna ventilare a radacinilor, este necesar ca vasul sa aiba suficiente orificii in partea de jos, astfel incat sa nu existe riscul ca apa sa stagneze.",
    continut: "Orhidee colorata la ghiveci",
    accesorii: "ghiveci transparent",
    id: "72",
  },
  {
    name: "Orhidee roz",
    category: "Orhidee",
    image:
      "https://cdn.leroymerlin.ro/image/2000/2000/502135/6414220fee7b2_20230317101719.jpg",
    price: "300.00",
    type: "Ghiveci",
    description:
      "Phalaenopsis Soft Cloud este o orhidee multiflora spectaculoasa, ce impresioneaza prin numarul mare de flori de pe fiecare tija. Un adevarat copacel cu flori, in miniatura!",
    color: "Roz",
    stock: "1000",
    ingrijire:
      "In functie de specie, exigentele termice se incadreaza in intervalul 16–30°C ziua si 12–24°C noaptea pentru sezonul cald, respectiv 13–26°C ziua si 10–20°C noaptea pentru sezonul rece. Fiind plante tropicale, orhideele iubesc umiditatea atmosferica. Substratul de cultura trebuie sa fe cat mai poros, afanat, sa asigure un bun drenaj al apei. Vasul orhideelor epifite este de preferat sa fie transparent, deoarece radacinile acesteia au nevoie de lumina pentru efectuarea fotosintezei. Pentru o buna ventilare a radacinilor, este necesar ca vasul sa aiba suficiente orificii in partea de jos, astfel incat sa nu existe riscul ca apa sa stagneze.",
    continut: "Orhidee colorata la ghiveci",
    accesorii: "ghiveci transparent",
    id: "73",
  },
  {
    name: "Trandafir rosu",
    category: "Trandafir",
    image:
      "https://crinulalb.ro/image/cache/catalog/01%20produse/trandafir-900x900.jpg",
    price: "15.00",
    type: "Fir",
    description:
      "Trandafirul este un gen de plante perene ornamentale din familia Rosaceae, originar din regiunile continentale ?i subtropicale ale emisferei nordice, cuprinzând peste 200 de specii de arbu?ti erec?i, deseori spino?i.",
    color: "Rosu",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Trandafir rosu la fir",
    accesorii: "-",
    id: "74",
  },
  {
    name: "Trandafir roz",
    category: "Trandafir",
    image:
      "https://media.istockphoto.com/id/175451180/photo/pink-rose.jpg?s=170667a&w=0&k=20&c=P58YercuHywGvvX-WMzKucvJzbZUh2DBqIsM2KXjxJA=",
    price: "15.00",
    type: "Fir",
    description:
      "Trandafirul este un gen de plante perene ornamentale din familia Rosaceae, originar din regiunile continentale ?i subtropicale ale emisferei nordice, cuprinzând peste 200 de specii de arbu?ti erec?i, deseori spino?i.",
    color: "Roz",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Trandafir roz la fir",
    accesorii: "-",
    id: "75",
  },
  {
    name: "Trandafir galben",
    category: "Trandafir",
    image:
      "https://oferte.renovat.ro/imagini/t/578/floare-artificiala-trandafir-galben-46-cm.jpg",
    price: "15.00",
    type: "Fir",
    description:
      "Trandafirul este un gen de plante perene ornamentale din familia Rosaceae, originar din regiunile continentale ?i subtropicale ale emisferei nordice, cuprinzând peste 200 de specii de arbu?ti erec?i, deseori spino?i.",
    color: "Galben",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Trandafir galben la fir",
    accesorii: "-",
    id: "93",
  },
  {
    name: "Trandafir alb",
    category: "Trandafir",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_QhVYcLDu3VoXu1Jl4kv2xETj8TaQuL9OGQ&usqp=CAU",
    price: "15.00",
    type: "Fir",
    description:
      "Trandafirul este un gen de plante perene ornamentale din familia Rosaceae, originar din regiunile continentale ?i subtropicale ale emisferei nordice, cuprinzând peste 200 de specii de arbu?ti erec?i, deseori spino?i.",
    color: "Alb",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Trandafir alb la fir",
    accesorii: "-",
    id: "76",
  },
  {
    name: "Trandafir albastru",
    category: "Trandafir",
    image:
      "https://s13emagst.akamaized.net/products/22857/22856938/images/res_594fdcb994b1053a72e71fb58039696e.jpg",
    price: "15.00",
    type: "Fir",
    description:
      "Trandafirul este un gen de plante perene ornamentale din familia Rosaceae, originar din regiunile continentale ?i subtropicale ale emisferei nordice, cuprinzând peste 200 de specii de arbu?ti erec?i, deseori spino?i.",
    color: "Albastru",
    id: "77",
  },
  {
    name: "Trandafir portocaliu",
    category: "Trandafir",
    image: "https://re-marcabil.ro/images/detailed/20/4896-2.jpg",
    price: "15.00",
    type: "Fir",
    description:
      "Trandafirul este un gen de plante perene ornamentale din familia Rosaceae, originar din regiunile continentale ?i subtropicale ale emisferei nordice, cuprinzând peste 200 de specii de arbu?ti erec?i, deseori spino?i.",
    color: "Portocaliu",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Trandafir rosu la fir",
    accesorii: "-",
    id: "78",
  },
  {
    name: "Trandafir mov",
    category: "Trandafir",
    image: "https://re-marcabil.ro/images/detailed/19/4606.jpg",
    price: "15.00",
    type: "Fir",
    description:
      "Trandafirul este un gen de plante perene ornamentale din familia Rosaceae, originar din regiunile continentale ?i subtropicale ale emisferei nordice, cuprinzând peste 200 de specii de arbu?ti erec?i, deseori spino?i.",
    color: "Mov",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Trandafir mov la fir",
    accesorii: "-",
    id: "79",
  },
  {
    name: "Crin alb",
    category: "Crin",
    image:
      "https://crinulalb.ro/image/cache/catalog/01%20produse/crin%20alb-768x768.jpg",
    price: "25.00",
    type: "Fir",
    description:
      "Crinul este numele popular al genului Lilium, un gen de plante cu flori erbacee ce cresc din bulbi. Cele mai multe specii sunt native emisferei nordice temperate. Ele cuprind un gen de circa 110 specii din familia crinului (Liliaceae). Au o importan?a culturala ?i literara în mare parte a lumii.",
    color: "Alb",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Crin alb la fir",
    accesorii: "-",
    id: "80",
  },
  {
    name: "Crin roz",
    category: "Crin",
    image:
      "https://www.floridesign.ro/images/stories/virtuemart/product/crin-imperial.png",
    price: "25.00",
    type: "Fir",
    description:
      "Crinul este numele popular al genului Lilium, un gen de plante cu flori erbacee ce cresc din bulbi. Cele mai multe specii sunt native emisferei nordice temperate. Ele cuprind un gen de circa 110 specii din familia crinului (Liliaceae). Au o importan?a culturala ?i literara în mare parte a lumii.",
    color: "Roz",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Crin roz la fir",
    accesorii: "-",
    id: "81",
  },
  {
    name: "Crin portocaliu",
    category: "Crin",
    image:
      "https://s13emagst.akamaized.net/products/43194/43193695/images/res_6c9714a938432e8d1d819ad162aeffb7.jpg?width=300&height=300&hash=B1D6EB19053DC8D2670A52E4D817AFAF",
    price: "25.00",
    type: "Fir",
    description:
      "Crinul este numele popular al genului Lilium, un gen de plante cu flori erbacee ce cresc din bulbi. Cele mai multe specii sunt native emisferei nordice temperate. Ele cuprind un gen de circa 110 specii din familia crinului (Liliaceae). Au o importan?a culturala ?i literara în mare parte a lumii.",
    color: "Portocaliu",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Crin portocaliu la fir",
    accesorii: "-",
    id: "82",
  },
  {
    name: "Crin rosu",
    category: "Crin",
    image:
      "https://decortrendy.ro/image/cache/catalog/Produse/25361-12-800x800.jpg",
    price: "25.00",
    type: "Fir",
    description:
      "Crinul este numele popular al genului Lilium, un gen de plante cu flori erbacee ce cresc din bulbi. Cele mai multe specii sunt native emisferei nordice temperate. Ele cuprind un gen de circa 110 specii din familia crinului (Liliaceae). Au o importan?a culturala ?i literara în mare parte a lumii.",
    color: "Rosu",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Crin rosu la fir",
    accesorii: "-",
    id: "83",
  },
  {
    name: "Crin galben",
    category: "Crin",
    image:
      "https://cdn.4home.cz/2dc4fdbc-d29c-450d-958f-e204bac0a722/395x395/Crin-artificial-galben-42-cm.jpg",
    price: "25.00",
    type: "Fir",
    description:
      "Crinul este numele popular al genului Lilium, un gen de plante cu flori erbacee ce cresc din bulbi. Cele mai multe specii sunt native emisferei nordice temperate. Ele cuprind un gen de circa 110 specii din familia crinului (Liliaceae). Au o importan?a culturala ?i literara în mare parte a lumii.",
    color: "Galben",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Crin galben la fir",
    accesorii: "-",
    id: "84",
  },
  {
    name: "Iris mov",
    category: "Iris",
    image:
      "https://crinulalb.ro/image/cache/catalog/01%20produse/iris-900x900.jpg",
    price: "10.00",
    type: "Fir",
    description:
      "Stânjenel (Iris) este denumirea comuna a unor plante monocotilidonate din familia Iridaceae. Plante ierbacee cu rizomi orizontali, adesea ramifica?i, mai rar cu bulboteri ?i cu frunze. Tulpina frunzoasa, cu inflorescen?a terminala pauciflora, monocaziala. Flori mari, viu colorate, cu hipsofile membranoase.",
    color: "Mov",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Iris mov la fir",
    accesorii: "-",
    id: "85",
  },
  {
    name: "Iris alb",
    category: "Iris",
    image:
      "https://www.robertorossi.ro/images/produse/_large/iris-71-cm-alb-90113-1.jpg",
    price: "10.00",
    type: "Fir",
    description:
      "Stânjenel (Iris) este denumirea comuna a unor plante monocotilidonate din familia Iridaceae. Plante ierbacee cu rizomi orizontali, adesea ramifica?i, mai rar cu bulboteri ?i cu frunze. Tulpina frunzoasa, cu inflorescen?a terminala pauciflora, monocaziala. Flori mari, viu colorate, cu hipsofile membranoase.",
    color: "Alb",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Iris alb la fir",
    accesorii: "-",
    id: "86",
  },
  {
    name: "Lalea rosie",
    category: "Lalea",
    image:
      "https://crinulalb.ro/image/cache/catalog/01%20produse/lalele-900x900.jpg",
    price: "10.00",
    type: "Fir",
    description:
      "Bulbul de lalele este un organ complex de reînnoire vegetativa ?i reproducere ?i un organ de stocare al unei plante, format dintr-un fund - o tulpina modificata, în forma de disc ?i de la una la ?ase solzi de depozitare - frunze specializate. Adâncimea bulbilor în natura ajunge la 50 cm.",
    color: "Rosu",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Lalea rosie la fir",
    accesorii: "-",
    id: "87",
  },
  {
    name: "Lalea galbena",
    category: "Lalea",
    image:
      "https://elefunstore.ro/20677-large_default/lalea-galbena-din-silicon-33-cm.jpg",
    price: "10.00",
    type: "Fir",
    description:
      "Bulbul de lalele este un organ complex de reînnoire vegetativa ?i reproducere ?i un organ de stocare al unei plante, format dintr-un fund - o tulpina modificata, în forma de disc ?i de la una la ?ase solzi de depozitare - frunze specializate. Adâncimea bulbilor în natura ajunge la 50 cm.",
    color: "Galben",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Lalea galben la fir",
    accesorii: "-",
    id: "88",
  },
  {
    name: "Lalea roz",
    category: "Lalea",
    image:
      "https://elefunstore.ro/20689-large_default/lalea-magenta-din-silicon-33-cm.jpg",
    price: "10.00",
    type: "Fir",
    description:
      "Bulbul de lalele este un organ complex de reînnoire vegetativa ?i reproducere ?i un organ de stocare al unei plante, format dintr-un fund - o tulpina modificata, în forma de disc ?i de la una la ?ase solzi de depozitare - frunze specializate. Adâncimea bulbilor în natura ajunge la 50 cm.",
    color: "Roz",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Lalea roz la fir",
    accesorii: "-",
    id: "17",
  },
  {
    name: "Lalea alba",
    category: "Lalea",
    image:
      "https://elefunstore.ro/20676-large_default/lalea-alba-din-silicon-33-cm.jpg",
    price: "10.00",
    type: "Fir",
    description:
      "Bulbul de lalele este un organ complex de reînnoire vegetativa ?i reproducere ?i un organ de stocare al unei plante, format dintr-un fund - o tulpina modificata, în forma de disc ?i de la una la ?ase solzi de depozitare - frunze specializate. Adâncimea bulbilor în natura ajunge la 50 cm.",
    color: "Alb",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Lalea alba la fir",
    accesorii: "-",
    id: "89",
  },
  {
    name: "Lalea mov",
    category: "Lalea",
    image:
      "https://elefunstore.ro/22951-large_default/lalea-mov-din-silicon-33-cm.jpg",
    price: "10.00",
    type: "Fir",
    description:
      "Bulbul de lalele este un organ complex de reînnoire vegetativa ?i reproducere ?i un organ de stocare al unei plante, format dintr-un fund - o tulpina modificata, în forma de disc ?i de la una la ?ase solzi de depozitare - frunze specializate. Adâncimea bulbilor în natura ajunge la 50 cm.",
    color: "Mov",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Lalea mov la fir",
    accesorii: "-",
    id: "90",
  },
  {
    name: "Lalea portocalie",
    category: "Lalea",
    image:
      "https://media.istockphoto.com/id/155157202/photo/red-tulip.jpg?s=612x612&w=0&k=20&c=6fGeXCQSj8gBi2rDd-woDufIrnyJbiPWbq0481Z1pjE=",
    price: "10.00",
    type: "Fir",
    description:
      "Bulbul de lalele este un organ complex de reînnoire vegetativa ?i reproducere ?i un organ de stocare al unei plante, format dintr-un fund - o tulpina modificata, în forma de disc ?i de la una la ?ase solzi de depozitare - frunze specializate. Adâncimea bulbilor în natura ajunge la 50 cm.",
    color: "Portocaliu",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Lalea portocalie la fir",
    accesorii: "-",
    id: "91",
  },
  {
    name: "Lalea albastra",
    category: "Lalea",
    image:
      "https://t4.ftcdn.net/jpg/00/74/37/35/360_F_74373536_RCnbZuMOzjNEZEdgt8TFb0FQGxYfQ7Yh.jpg",
    price: "10.00",
    type: "Fir",
    description:
      "Bulbul de lalele este un organ complex de reînnoire vegetativa ?i reproducere ?i un organ de stocare al unei plante, format dintr-un fund - o tulpina modificata, în forma de disc ?i de la una la ?ase solzi de depozitare - frunze specializate. Adâncimea bulbilor în natura ajunge la 50 cm.",
    color: "Albastru",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Lalea albastra la fir",
    accesorii: "-",
    id: "92",
  },
  {
    name: "Crizantema roz",
    category: "Crizantema",
    image:
      "https://chicville.ro/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/l/floare-decorativa-crizantema-roz-76-cm_1.jpg",
    price: "8.00",
    type: "Fir",
    description:
      "Crizantemele, numite ?i tufanele, dumitri?e, margarete de toamna, sunt un gen de flori (Chrysanthemum), format din aproximativ 30 de specii de plante perene, apar?inând familiei Asteraceae, native Asiei ?i Europei de nord-est.",
    color: "Roz",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Crizantema roz la fir",
    accesorii: "-",
    id: "94",
  },
  {
    name: "Crizantema alba",
    category: "Crizantema",
    image:
      "https://s13emagst.akamaized.net/products/13338/13337640/images/res_bb5128220987c7f3553b82c453b5f827.jpg",
    price: "8.00",
    type: "Fir",
    description:
      "Crizantemele, numite ?i tufanele, dumitri?e, margarete de toamna, sunt un gen de flori (Chrysanthemum), format din aproximativ 30 de specii de plante perene, apar?inând familiei Asteraceae, native Asiei ?i Europei de nord-est.",
    color: "Alb",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Crizantema alba la fir",
    accesorii: "-",
    id: "95",
  },
  {
    name: "Crizantema rosie",
    category: "Crizantema",
    image:
      "https://d1jtwkmfe1h6h4.cloudfront.net/media/catalog/product/cache/1/image/x520/17f82f742ffe127f42dca9de82fb58b1/f/i/fir_floare_artificiala_chrysanthemums_rosu_inchis_verde_h75_cm_2_.jpg",
    price: "8.00",
    type: "Fir",
    description:
      "Crizantemele, numite ?i tufanele, dumitri?e, margarete de toamna, sunt un gen de flori (Chrysanthemum), format din aproximativ 30 de specii de plante perene, apar?inând familiei Asteraceae, native Asiei ?i Europei de nord-est.",
    color: "Rosu",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Crizantema rosie la fir",
    accesorii: "-",
    id: "96",
  },
  {
    name: "Crizantema galbena",
    category: "Crizantema",
    image:
      "https://re-marcabil.ro/images/detailed/4/Fir-crizantema-galben-65cm-verde-2.jpg",
    price: "8.00",
    type: "Fir",
    description:
      "Crizantemele, numite ?i tufanele, dumitri?e, margarete de toamna, sunt un gen de flori (Chrysanthemum), format din aproximativ 30 de specii de plante perene, apar?inând familiei Asteraceae, native Asiei ?i Europei de nord-est.",
    color: "Galben",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Crizantema galbena la fir",
    accesorii: "-",
    id: "97",
  },
  {
    name: "Crizantema portocalie",
    category: "Crizantema",
    image: "https://re-marcabil.ro/images/detailed/20/4998.jpg",
    price: "8.00",
    type: "Fir",
    description:
      "Crizantemele, numite ?i tufanele, dumitri?e, margarete de toamna, sunt un gen de flori (Chrysanthemum), format din aproximativ 30 de specii de plante perene, apar?inând familiei Asteraceae, native Asiei ?i Europei de nord-est.",
    color: "Portocaliu",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Crizantema portocalie la fir",
    accesorii: "-",
    id: "98",
  },
  {
    name: "Magnolie alba",
    category: "Magnolie",
    image:
      "https://a.allegroimg.com/s400/1105db/477a0179430e9a8f1b0a08533665/Magnolia-galazka-kremowobiala-do-bukietow-wiazanek",
    price: "8.00",
    type: "Fir",
    description:
      "Frunzele sunt simple cu marginea întreaga sau rar-lobata, acute, scurt-pe?iolate, alterne, caduce sau persistente ?i ovale. Radacina este ramuroasa. Tulpina este aeriana, ramificata.",
    color: "Alb",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Magnolie alba la fir",
    accesorii: "-",
    id: "99",
  },
  {
    name: "Liliac alb",
    category: "Liliac",
    image:
      "https://gomagcdn.ro/domains/lotusland.ro/files/product/large/crenguta-liliac-lilac-fibre-artificiale-roz-verde-82-cm-11340-5581.jpg",
    price: "18.00",
    type: "Fir",
    description:
      "Florile sunt simple sau duble, placut mirositoare, grupate în penicule de pâna la 20 cm lungime, multiflorale, în culori diferite, de la liliachiu la alb. Floarea are caliciul mic, campanulat, cu patru din?i, corola cu tub de un centimetru lungime, cu patru lobi paten?i ?i doua stamine.",
    color: "Alb",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Liliac alb la fir",
    accesorii: "-",
    id: "100",
  },
  {
    name: "Narcisa galbena",
    category: "Narcisa",
    image:
      "https://www.robertorossi.ro/images/produse/_large/narcisa-cu-bulb-40-cm-galben-29786-1.jpg",
    price: "6.00",
    type: "Fir",
    description:
      "Narcisa (genul Narcissus) este un gen originar din nordul Africii, regiuni mediteraneene ?i Europa Centrala, circa 32 specii erbacee, bulboase. Termenul de narcisa vine de la mitul frumosului tânar Narcis din mitologia greaca, care s-ar fi îndragostit de chipul sau.",
    color: "Galben",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Narcisa galbena la fir",
    accesorii: "-",
    id: "101",
  },
  {
    name: "Narcisa alba",
    category: "Narcisa",
    image:
      "https://media.gettyimages.com/id/694130111/photo/white-daffodils-with-yellow-trumpets-on-white.jpg?s=170667a&w=gi&k=20&c=BT7ajvUCa0R--GgfsfeHKxEOzew1FVk7cRFjT82FDCo=",
    price: "6.00",
    type: "Fir",
    description:
      "Narcisa (genul Narcissus) este un gen originar din nordul Africii, regiuni mediteraneene ?i Europa Centrala, circa 32 specii erbacee, bulboase. Termenul de narcisa vine de la mitul frumosului tânar Narcis din mitologia greaca, care s-ar fi îndragostit de chipul sau.",
    color: "Alb",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Narcisa alba la fir",
    accesorii: "-",
    id: "102",
  },
  {
    name: "Ranunculus alb",
    category: "Ranunculus",
    image:
      "https://gomagcdn.ro/domains/avantflor.ro/files/product/original/fir-floare-artificiala-premium-55-cm-8646-3914.jpg",
    price: "6.00",
    type: "Fir",
    description:
      "Piciorul coco?ului (Ranunculus repens L.) este o specie erbacee, anuala sau bienala, foarte comuna în zonele umede din paji?tile montane, în locurile mla?tinoase ?i pe malurile apelor. Planta are o tulpina erecta de 20 – 25 cm. Tulpina are la baza stoloni culca?i.",
    color: "Alb",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Ranunculus alb la fir",
    accesorii: "-",
    id: "103",
  },
  {
    name: "Bumbac roz",
    category: "Bumbac",
    image:
      "https://elefunstore.ro/16185-large_default/set-10-flori-de-bumbac-roz-32cm.jpg",
    price: "50.00",
    type: "Fir",
    description:
      "Bumbacul (Gossypium) este un gen de plante tehnice, din familia Malvaceae, nativ din regiunile tropicala ?i subtropicala din Americi ?i Europa. Genul Gossypium cuprinde în jur de 50 de specii, fiind cel mai numeros taxon din tribul Gossypioieae.",
    color: "Roz",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Bumbac roz la fir",
    accesorii: "-",
    id: "32",
  },
  {
    name: "Bumbac alb",
    category: "Bumbac",
    image:
      "https://media.istockphoto.com/id/1370456174/photo/cotton-flowers-on-white-background.jpg?s=612x612&w=0&k=20&c=yNKGv6A8irRfylT0K1gfAnVAgGZvZrbASyHO6JxUCM4=",
    price: "50.00",
    type: "Fir",
    description:
      "Bumbacul (Gossypium) este un gen de plante tehnice, din familia Malvaceae, nativ din regiunile tropicala ?i subtropicala din Americi ?i Europa. Genul Gossypium cuprinde în jur de 50 de specii, fiind cel mai numeros taxon din tribul Gossypioieae.",
    color: "Alb",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Bumbac alb la fir",
    accesorii: "-",
    id: "33",
  },
  {
    name: "Bujor alb",
    category: "Bujor",
    image:
      "https://www.ambalajedeflori.ro/14551-thickbox_default/fir-de-bujor.jpg",
    price: "10.00",
    type: "Fir",
    description:
      "Aceasta este o planta perena care cre?te pâna la o înal?ime de aproximativ 80-90 de cm ?i are frunze mari, lobate, de culoare verde închis. Perioada de înflorire a bujorului rosu este în sezonul de vara, în general în luna iunie. Nu are un parfum foarte pronun?at, dar este o floare frumoasa ?i decorativa.",
    color: "Alb",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Bujor alb la fir",
    accesorii: "-",
    id: "104",
  },
  {
    name: "Bujor roz",
    category: "Bujor",
    image:
      "https://www.ikea.com/nl/en/images/products/smycka-artificial-flower-peony-pink__0611398_pe685428_s5.jpg",
    price: "10.00",
    type: "Fir",
    description:
      "Aceasta este o planta perena care cre?te pâna la o înal?ime de aproximativ 80-90 de cm ?i are frunze mari, lobate, de culoare verde închis. Perioada de înflorire a bujorului rosu este în sezonul de vara, în general în luna iunie. Nu are un parfum foarte pronun?at, dar este o floare frumoasa ?i decorativa.",
    color: "Roz",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Bujor roz la fir",
    accesorii: "-",
    id: "105",
  },
  {
    name: "Bujor rosu",
    category: "Bujor",
    image:
      "https://s13emagst.akamaized.net/products/22857/22856953/images/res_74599f57e1a7042a4a5da2fe854b8eb8.jpg",
    price: "10.00",
    type: "Fir",
    description:
      "Aceasta este o planta perena care cre?te pâna la o înal?ime de aproximativ 80-90 de cm ?i are frunze mari, lobate, de culoare verde închis. Perioada de înflorire a bujorului rosu este în sezonul de vara, în general în luna iunie. Nu are un parfum foarte pronun?at, dar este o floare frumoasa ?i decorativa.",
    color: "Rosu",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Bujor rosu la fir",
    accesorii: "-",
    id: "106",
  },
  {
    name: "Bujor galben",
    category: "Bujor",
    image:
      "https://cdn.shopify.com/s/files/1/0516/8968/5154/products/garden-treasure-yellow-peonies-online-for-weddings_11_6438_l.jpg?v=1683165702&width=800",
    price: "10.00",
    type: "Fir",
    description:
      "Aceasta este o planta perena care cre?te pâna la o înal?ime de aproximativ 80-90 de cm ?i are frunze mari, lobate, de culoare verde închis. Perioada de înflorire a bujorului rosu este în sezonul de vara, în general în luna iunie. Nu are un parfum foarte pronun?at, dar este o floare frumoasa ?i decorativa.",
    color: "Galben",
    stock: "1000",
    ingrijire:
      "Cu cat tija unei flori este mai scurta si are mai putine frunze, cu atât floarea rezista mai mult. Asezati florile departe de surse de caldura sau de lumina. Taiati periodic cozile cu un cutit (nu cu foarfeca) intr-un unghi de 45 grade la cca. 2-3 cm de baza.",
    continut: "Bujor galben la fir",
    accesorii: "-",
    id: "107",
  },
  {
    name: "Fantastic Rubber Cheese",
    category: "Keyboard",
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1046.jpg",
    price: "633.00",
    type: "Metal",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    color: "azure",
    id: "109",
  },
  {
    name: "Test",
    category: "Orhidee",
    image:
      "https://decortrendy.ro/image/cache/catalog/import/206686-104-800x800.jpg",
    price: "185.00",
    type: "Ghiveci",
    description:
      "Phalaenopsis Soft Cloud este o orhidee multiflora spectaculoasa, ce impresioneaza prin numarul mare de flori de pe fiecare tija. Un adevarat copacel cu flori, in miniatura!",
    color: "Alb",
    id: "110",
    stock: "1000",
    ingrijire:
      "In functie de specie, exigentele termice se incadreaza in intervalul 16–30°C ziua si 12–24°C noaptea pentru sezonul cald, respectiv 13–26°C ziua si 10–20°C noaptea pentru sezonul rece. Fiind plante tropicale, orhideele iubesc umiditatea atmosferica. Substratul de cultura trebuie sa fe cat mai poros, afanat, sa asigure un bun drenaj al apei. Vasul orhideelor epifite este de preferat sa fie transparent, deoarece radacinile acesteia au nevoie de lumina pentru efectuarea fotosintezei. Pentru o buna ventilare a radacinilor, este necesar ca vasul sa aiba suficiente orificii in partea de jos, astfel incat sa nu existe riscul ca apa sa stagneze.",
    continut: "Orhidee colorata la ghiveci",
    accesorii: "ghiveci transparent",
  },
];
