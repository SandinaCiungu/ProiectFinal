https://platforma.scoalainformala.ro/mod/page/view.php?id=103537

Proiect final - Magazin electronic

Creati 4 pagini html, in care sa includeti elemente de javascript si css (fisiere separate),
care sa implementeze functionalitatile necesare unei aplicatii de genul magazin electronic
(folositi tehnica AJAX si mapati raspunsul primit de la server pe clase javascript):

index.html - lista produse
pagina ce afiseaza lista de prodose pe care le primeste de la un server in format JSON
cererea catre server se face folosind tehnica AJAX
in gif-ul de mai jos, este un exemplu despre cum ar putea arata implementarea acestei pagini

details.html
acesata pagina primeste id-ul produsului ca si query parameter(ex: details.html?id=0, unde 0 este id-ul produsului)
in aceasta pagina vor fi afisate: imaginea produsului, nume, descrierea, pretul, numarul de produse din stoc
tot in pagina va fi afisat si un buton "adauga in cos": la apasarea acestui buton, in partea de sus a ecranului,
va aparea un mesaj ce va avertiza utilizatorul ca produsul din imagine a fost adaugat in cosul de cumparaturi
toate produsele adaugate in cos vor fi stocate in memoria browserului, folosind functionalitatea localstorage
in gif-ul de mai jos, este un exemplu despre cum ar putea arata implementarea acestei pagini

cart.html
aceasta pagina citeste toate elementele salvate in localstorage si le afiseaza sub forma unui tabel
pe fiecare linie din tabel, ce reprezinta produsele cumparate se pot face mai multe actiuni:
sa modificam cantitatea unui produs adaugat in cos (increase/decrease)
sa renuntam la un produs adaugat in cos, printr-o functie de "Remove"
numele fiecarui produs din lista, contine un link catre pagina de detalii a produsului adaugat in cos
de fiecare data cand continutul tabelului se modifica, totalul si subtotalurile vor fi calculate din nou
in gif-ul de mai jos, este un exemplu despre cum ar putea arata implementarea acestei pagini

admin.html
din pagina de admin, se pot gestiona produsele afisate in paginile index.html si details.html
aceasta pagina este doar o interfata grafica, ce comunica prin cereri AJAX cu un server,
folosind verbele GET, POST, PUT, DELETE pentru a adauga si a actualiza lista de produse disponibile
tabelul de produse, contine pe coloana de nume produs, un link care atunci cand va fi actionat de catre utilizator,
va afisa pe ecran un formular de adaugare/editare a produselor
fiecare produs va contine urmatorele informatii: imagine, nume, descriere, pret, cantitate stoc
elementele din lista pot fi sterse din lista de pe server, folosind un buton "Remove"
