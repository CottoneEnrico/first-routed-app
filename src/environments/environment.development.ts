/* Passaggi:
1. https://developer.spotify.com/documentation/web-api/reference/search
2. CTRL+SHIFT+I / F 12, tab network sezione headers
3. cercare una canzone con categoria track nel sito web-api di spotify
4. avviare la ricerca per una canzone (Pulsante try it)
5. aprire l'evento nell'elenco headers che inizia con search?q=titolocanzone
6. Copiare l'authorization e inserirla nella variabile oauthToken
*/
export const environment = {
    production: false,
    oauthToken: "Bearer BQAP-EosJoDohNkLUk4yKaSKq81-SCIQh8OKjBUB4jXVtcPzpja2iypNT34ZLkdoqbYnh6-uyscimTA6BQe9D6c5yxbazSZaMzw0jgIgaWMvsyKAujno0kZshJzv5hSO-B0lSwK9ysbsRnZfmtD8gB1jedCjIWKJlHqH2B7S0GLPgMKxIhWHQ3oSFfUF3MT-3dQJX2CHO6FfcvIhYdK6Y8jXeYM7djsD-aC0rV7CwRjfKgGr3-uTBACa8GMPGDOAOSM-xYYcpCMli7mE28ZKyI4nc5DIDvqSM3jiQT8LPyHv39-irtwbI4EK_vqJ3onGxO6S8GtOiVIiN3agGdz2Qm6_jPYri_Y"
};
