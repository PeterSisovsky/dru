import { ProjectileModel } from './controls';

export function colisionCheck(object1: ProjectileModel, object2: any): void {
  if (object1.positionX === object2.positionX) {
    if (object1.positionY <= object2.positionY) {
      console.log('hit');
    }
  }
}
