import { homedir } from 'os';
import { join } from 'path';

export default {
  links: {
    GH_DISCUSSIONS: 'https://github.com/orgs/Solar-Tweaks/discussions',
    GITHUB: 'https://github.com/Ember-Client/',
    GITBOOK: 'https://docs.solartweaks.com',
    YOUTUBE: 'https://www.youtube.com/channel/UCXRhlF3x02Sc8hgWnCMXnTQ',
    LUNARCLIENT: 'https://lunarclient.com/',
    SERVER_STATUS_ENDPOINT: 'https://mcapi.us/server/status',
    LC_METADATA_ENDPOINT: 'https://api.lunarclientprod.com/launcher/launch',
    LC_LAUNCHER_METADATA_ENDPOINT:
      'https://api.lunarclientprod.com/launcher/metadata',
    WEBSITE: 'https://solartweaks.com',
  },
  API_URL: 'https://server.solartweaks.com/api',
  LAUNCHER_URL: 'https://updater-f102ihz0h-ember-client.vercel.app/',
  ENGINE: {
    ENGINE: 'ember-engine.jar',
    CONFIG: 'config.json',
    CONFIG_EXAMPLE: 'config.example.json',
    METADATA: 'metadata.json',
  },
  UPDATERS: {
    INDEX: '/',
    LAUNCHER: '/update/{platform}/{app.getVersion()}',
    ENGINE: '/updater/?item=engine&version={version}',
    METADATA: '/updater/?item=metadata&version={version}',
    CONFIG_EXAMPLE: '/updater/?item=config&version={version}',
  },
  ENDPOINTS: {
    LAUNCH: '/launch',
  },
  DOTLUNARCLIENT: join(homedir(), '.lunarclient'),
  EMBERCLIENT_DIR: join(homedir(), '.lunarclient', 'emberclient'),
  SENTRY:
    'https://bd3de1d6c87c403f8f23da0a91a82b1b@o4504573741039616.ingest.sentry.io/4504573745758208',

  // Dynamic Constants
  LC_LAUNCHER_VERSION: '2.15.1',
};
