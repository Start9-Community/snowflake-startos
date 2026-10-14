import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.15.1:0',
  releaseNotes: {
    en_US:
      'Updated Snowflake to 2.15.1: the proxy reports its NAT type as open, moderate or strict (replacing unrestricted and restricted), accepts only the first data channel a client opens, counts clients without a known address as unknown, and is built with Go 1.25 and updated dependencies. The dashboard now shows which countries its clients connect from, in place of the hour-by-hour chart of the last day, and fits narrow phone screens.',
    es_ES:
      'Snowflake actualizado a 2.15.1: el proxy informa su tipo de NAT como abierto, moderado o estricto (en lugar de sin restricciones y restringido), solo acepta el primer canal de datos que abre un cliente, cuenta como desconocidos a los clientes sin dirección conocida y se compila con Go 1.25 y dependencias actualizadas. El panel muestra ahora desde qué países se conectan sus clientes, en lugar del gráfico hora por hora del último día, y se adapta a pantallas de móvil estrechas.',
    de_DE:
      'Snowflake auf 2.15.1 aktualisiert: Der Proxy meldet seinen NAT-Typ als offen, moderat oder strikt (statt uneingeschränkt und eingeschränkt), akzeptiert nur den ersten Datenkanal, den ein Client öffnet, zählt Clients ohne bekannte Adresse als unbekannt und wird mit Go 1.25 und aktualisierten Abhängigkeiten gebaut. Das Dashboard zeigt jetzt, aus welchen Ländern sich die Clients verbinden – anstelle des Stundendiagramms des letzten Tages – und passt auf schmale Handy-Bildschirme.',
    pl_PL:
      'Zaktualizowano Snowflake do 2.15.1: proxy zgłasza typ NAT jako otwarty, umiarkowany lub ścisły (zamiast nieograniczony i ograniczony), akceptuje tylko pierwszy kanał danych otwarty przez klienta, liczy klientów bez znanego adresu jako nieznanych i jest budowane z Go 1.25 oraz zaktualizowanymi zależnościami. Panel pokazuje teraz, z jakich krajów łączą się klienci, zamiast godzinowego wykresu ostatniej doby, i mieści się na wąskich ekranach telefonów.',
    fr_FR:
      "Snowflake mis à jour vers 2.15.1 : le proxy indique son type de NAT comme ouvert, modéré ou strict (au lieu de sans restriction et restreint), n'accepte que le premier canal de données ouvert par un client, compte comme inconnus les clients sans adresse connue, et est compilé avec Go 1.25 et des dépendances à jour. Le tableau de bord affiche désormais les pays d'où se connectent ses clients, à la place du graphique heure par heure du dernier jour, et s'adapte aux écrans étroits des téléphones.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
