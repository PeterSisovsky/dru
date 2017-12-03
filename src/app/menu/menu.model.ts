export interface MenuSectionModel {
  title: string;
  items: MainMenuItemModel[];
}

export interface MainMenuItemModel extends MenuItemModel {
  subItems?: MenuItemModel[];
  expanded?: boolean;
  animationStatus?: string;
}

interface BadgeModel {
  title: string;
  color: string;
  shape: 'elipsis' | 'box' | 'hearth';
}

interface MenuItemModel {
  title: string;
  icon: string;
  notificationCount?: number;
  badge?: BadgeModel;
}
