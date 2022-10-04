import { SetupServer } from './server';

const setupServer = new SetupServer();
setupServer.init();
setupServer.getApp().listen();
