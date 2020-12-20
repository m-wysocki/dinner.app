# d!nner.

### Aplikacja generująca listę zakupów na podstawie wybranych przepisów kulinarnych

**Najważniejsze cechy aplikacji:**
- generowanie listy zakupów na podstawie wybranych przepisów
- wygenerowana lista zawiera listę zsumowanych składników z zaznaczonych przepisów z podziałem na kategorie sklepowe
- możliwość dodawania własnych przepisów
- w trakcie dodawania przepisu możliwość definiowania kategorii, składników, książek kucharskich itp.

Jest to wersja podstawowa aplikacji, ciąglę nad nią pracuję. Lista błędów stopniowo się kurczy.
Niektóre z komponentów wymagają refactoringu - szczególnie InputLiveSearch i ShoppingListView. 

**Technologie użyte w aplikacji:**
- react
- redux
- firestore
- formik + yup
- storybook
- eslint, prettier

**W przyszłości zamierzam dodać do aplikacji:**
- wersję mobilną aplikacji
- edycja przepisów
- logowanie użytkowników z wydzieleniem własnych przepisów
- zapamiętywanie listy zakupów (aktualnie jest przechowywana w context)
- możliwość skreślania produktów z listy zakupów
- możliwość dodawania do listy zakupów produktów dodatkowych - niezwiązanych z przepisami
