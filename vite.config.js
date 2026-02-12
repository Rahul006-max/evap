import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        modules: resolve(__dirname, 'modules.html'),
        energyStorage: resolve(__dirname, 'energy-storage.html'),
        chargingStations: resolve(__dirname, 'charging-stations.html'),
        utility: resolve(__dirname, 'utility.html'),
        industrial: resolve(__dirname, 'industrial.html'),
        residential: resolve(__dirname, 'residential.html'),
        businessModel: resolve(__dirname, 'business-model.html'),
        solarCells: resolve(__dirname, 'solar-cells.html'),
        companyInfo: resolve(__dirname, 'company-info.html'),
        team: resolve(__dirname, 'team.html'),
        contact: resolve(__dirname, 'contact.html'),
        hosted: resolve(__dirname, 'hosted.html'),
      },
    },
  },
});
