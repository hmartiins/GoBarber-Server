import { container } from 'tsyringe';

import IStorageProvider from './StorageProviders/models/IStorageProvider';
import DiskStorageProvider from './StorageProviders/implementantios/DiskStorageProvider';

import IMailProvider from './MailProvider/models/IMailProvider';
import EtherealMailProvider from './MailProvider/implementation/EtherialMailProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

container.registerInstance<IMailProvider>(
  'MailProvider',
  new EtherealMailProvider(),
);
