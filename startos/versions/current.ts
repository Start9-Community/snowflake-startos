import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.14.1:7',
  releaseNotes: {
    en_US:
      'The dashboard shows which countries its clients connect from, in place of the hour-by-hour chart of the last day, and fits narrow phone screens.',
    es_ES:
      'El panel muestra desde qué países se conectan sus clientes, en lugar del gráfico hora por hora del último día, y se adapta a pantallas de móvil estrechas.',
    de_DE:
      'Das Dashboard zeigt, aus welchen Ländern sich die Clients verbinden – anstelle des Stundendiagramms des letzten Tages – und passt auf schmale Handy-Bildschirme.',
    pl_PL:
      'Panel pokazuje, z jakich krajów łączą się klienci, zamiast godzinowego wykresu ostatniej doby, i mieści się na wąskich ekranach telefonów.',
    fr_FR:
      "Le tableau de bord affiche les pays d'où se connectent ses clients, à la place du graphique heure par heure du dernier jour, et s'adapte aux écrans étroits des téléphones.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
