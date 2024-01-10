import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run rapp4:serve',
        production: 'nx run rapp4:preview',
      },
      ciWebServerCommand: 'nx run rapp4:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
