/**
 * Inietta un grafo schema.org. Un solo componente per non ripetere ovunque
 * il `dangerouslySetInnerHTML` (qui sicuro: l'input è sempre un oggetto
 * nostro passato da `JSON.stringify`, mai testo che arrivi dall'utente).
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
