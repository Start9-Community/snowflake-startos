import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.14.1:6',
  releaseNotes: {
    en_US: `Built on StartOS SDK 3.0.6, which fixes a restart during startup leaving the previous run's proxy running alongside the new one.`,
    es_ES: `Compilado con el SDK 3.0.6 de StartOS, que corrige que un reinicio durante el arranque dejara el proxy de la ejecución anterior funcionando junto al nuevo.`,
    de_DE: `Mit dem StartOS-SDK 3.0.6 gebaut, das behebt, dass ein Neustart während des Hochfahrens den Proxy des vorherigen Laufs neben dem neuen weiterlaufen ließ.`,
    pl_PL: `Zbudowano na StartOS SDK 3.0.6, które naprawia błąd, przez który restart podczas uruchamiania pozostawiał proxy z poprzedniego uruchomienia działające obok nowego.`,
    fr_FR: `Construit avec le SDK StartOS 3.0.6, qui corrige un redémarrage pendant le démarrage laissant le proxy de l'exécution précédente tourner à côté du nouveau.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
