import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.15.2:0',
  releaseNotes: {
    en_US:
      'Updated Snowflake to 2.15.2: the proxy now also applies its outbound address filter to the public addresses it learns from STUN, so filtered-out addresses are no longer offered to clients, and it is built with Go 1.26.10.',
    es_ES:
      'Snowflake actualizado a 2.15.2: el proxy aplica ahora su filtro de direcciones salientes también a las direcciones públicas que obtiene mediante STUN, de modo que ya no ofrece a los clientes direcciones excluidas, y se compila con Go 1.26.10.',
    de_DE:
      'Snowflake auf 2.15.2 aktualisiert: Der Proxy wendet seinen Filter für ausgehende Adressen jetzt auch auf die öffentlichen Adressen an, die er über STUN ermittelt, sodass ausgefilterte Adressen Clients nicht mehr angeboten werden, und wird mit Go 1.26.10 gebaut.',
    pl_PL:
      'Zaktualizowano Snowflake do 2.15.2: proxy stosuje teraz swój filtr adresów wychodzących także do adresów publicznych uzyskanych przez STUN, więc odfiltrowane adresy nie są już oferowane klientom, i jest budowane z Go 1.26.10.',
    fr_FR:
      "Snowflake mis à jour vers 2.15.2 : le proxy applique désormais son filtre d'adresses sortantes aussi aux adresses publiques qu'il obtient via STUN, de sorte que les adresses exclues ne sont plus proposées aux clients, et il est compilé avec Go 1.26.10.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
