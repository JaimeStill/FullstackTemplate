import { CoreService } from './core.service';
import { ObjectMapService } from './object-map.service';
import { SidepanelService } from './sidepanel.service';
import { SnackerService } from './snacker.service';
import { SocketService } from './socket.service';
import { ThemeService } from './theme.service';

export const Services = [
  CoreService,
  ObjectMapService,
  SidepanelService,
  SnackerService,
  SocketService,
  ThemeService
];

export * from './core.service';
export * from './object-map.service';
export * from './sidepanel.service';
export * from './snacker.service';
export * from './socket.service';
export * from './theme.service';
