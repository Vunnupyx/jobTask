import {InjectionToken} from "@angular/core";

export enum NavigationPath {
  Home = '',
  List = 'navigator',
}

export interface NavigationLink {
  route: NavigationPath;
  label: string;
  params?: Record<string, any>;
}

export const PATHS = new InjectionToken<Record<string, any>>('NavigationPaths');
