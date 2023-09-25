import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'v-message',
  webDir: 'dist/v-message',
  server: {
    androidScheme: 'https'
  }
};

export default config;
