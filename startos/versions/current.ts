import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.15.2:0',
  releaseNotes: {
    en_US:
      'Updated Snowflake to 2.15.2: when an outbound address is set, the proxy now also advertises it in place of the public address it learns via STUN, and it is built with Go 1.26.10. This package sets no outbound address, so the proxy behaves as before.',
    es_ES:
      'Snowflake actualizado a 2.15.2: cuando se configura una dirección de salida, el proxy la anuncia ahora también en lugar de la dirección pública que obtiene mediante STUN, y se compila con Go 1.26.10. Este paquete no configura ninguna dirección de salida, así que el proxy se comporta como antes.',
    de_DE:
      'Snowflake auf 2.15.2 aktualisiert: Ist eine ausgehende Adresse gesetzt, gibt der Proxy sie jetzt auch anstelle der öffentlichen Adresse an, die er über STUN ermittelt, und wird mit Go 1.26.10 gebaut. Dieses Paket setzt keine ausgehende Adresse, der Proxy verhält sich also wie bisher.',
    pl_PL:
      'Zaktualizowano Snowflake do 2.15.2: gdy ustawiony jest adres wychodzący, proxy ogłasza go teraz także zamiast adresu publicznego uzyskanego przez STUN, i jest budowane z Go 1.26.10. Ten pakiet nie ustawia adresu wychodzącego, więc proxy działa tak jak wcześniej.',
    fr_FR:
      "Snowflake mis à jour vers 2.15.2 : lorsqu'une adresse sortante est définie, le proxy l'annonce désormais aussi à la place de l'adresse publique qu'il obtient via STUN, et il est compilé avec Go 1.26.10. Ce paquet ne définit aucune adresse sortante, le proxy se comporte donc comme avant.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
