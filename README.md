# spanish quotes | frases en español

NPM package to get spanish quotes.

Paquete NPM para obtener frases en español.

<p align="center">
  <a href="https://www.npmjs.com/package/spanish-quotes">
    <img src="https://img.shields.io/npm/v/spanish-quotes.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen" alt="spanish-quotes on npm" />
    <img src="https://github.com/davr59/spanish-quotes/actions/workflows/main.yml/badge.svg" alt="publish workflow spanish-quotes on npm" />
    <img src="https://img.shields.io/nycrc/davr59/spanish-quotes" alt="nycrc config min coverage" />
  </a>
</p>

## Quickstart | Inicio rápido

### Globally | Globalmente

#### Install | Instalar

```bash
npm i -g spanish-quotes --save
```

#### Usage | Uso

Run with installation:

Ejecutar con instalación:

```bash
spanish-quotes
```

Run without installation:

Ejecutar sin instalación:

```bash
npx spanish-quotes
```

Result:

Resultado:

```text
La historia decía que era prisionera, pero eso no era cierto, porque ella tenía esperanza y cuando hay esperanza no eres prisionero de nadie.
 -- Despereaux: un pequeño gran héroe
```

### Locally | Localmente

#### Import | Importar

```javascript
import { getDailyQuote, getRandomQuote, getAllQuotes } from 'spanish-quotes';
```

#### Usage | Uso

- getDailyQuote(year?: number, month?: number, date?: number)

Function that returns the daily quote. If year, month or date are undefined, then uses today as the consult date. Month starts in 0:

Función que retorna la frase del día. Si year, month o date son undefined, entonces se usa hoy como la fecha de consulta. Month comienza en 0:

```javascript
getDailyQuote();

getDailyQuote(2021, 0, 1);
```

Result:

Resultado:

```json
{
  "quote": "La historia decía que era prisionera, pero eso no era cierto, porque ella tenía esperanza y cuando hay esperanza no eres prisionero de nadie.",
  "from": "Despereaux: un pequeño gran héroe"
}
```

- getRandomQuote()

Function that returns a random quote:

Función que retorna una frase aleatoria:

```javascript
getRandomQuote();
```

Result:

Resultado:

```json
{
  "quote": "La historia decía que era prisionera, pero eso no era cierto, porque ella tenía esperanza y cuando hay esperanza no eres prisionero de nadie.",
  "from": "Despereaux: un pequeño gran héroe"
}
```

- getAllQuotes()

Function that returns all the quotes:

Función que retorna todas las frases:

```javascript
getAllQuotes();
```

Result:

Resultado:

```json
[
  {
    "quote": "La historia decía que era prisionera, pero eso no era cierto, porque ella tenía esperanza y cuando hay esperanza no eres prisionero de nadie.",
    "from": "Despereaux: un pequeño gran héroe"
  }
]
```

## Want to help? | ¿Quiere ayudar?

Want to file a bug, contribute some code, or improve documentation? Thanks! Feel free to contact me at [@davidvives](https://twitter.com/davidvives) or at davr59@outlook.com.

¿Quiere reportar un error o una pulga, contribuir con código o mejorar la documentación? ¡Muchas gracias! Puede contactarme a [@davidvives](https://twitter.com/davidvives) o a davr59@outlook.com.
