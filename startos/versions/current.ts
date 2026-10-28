import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.15.3:0',
  releaseNotes: {
    en_US:
      'Updates Snowflake to 2.15.3, which fixes a deadlock in proxies with a fixed capacity.',
    es_ES:
      'Actualiza Snowflake a 2.15.3, que corrige un bloqueo en los proxies con capacidad fija.',
    de_DE:
      'Aktualisiert Snowflake auf 2.15.3, das einen Deadlock in Proxys mit fester Kapazität behebt.',
    pl_PL:
      'Aktualizuje Snowflake do wersji 2.15.3, która naprawia zakleszczenie w proxy o stałej przepustowości.',
    fr_FR:
      'Met à jour Snowflake vers 2.15.3, qui corrige un interblocage des proxys à capacité fixe.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
