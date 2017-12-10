import * as moment from 'moment';

export interface PlayerModel {
  score: number;
  hp: number;
  positionX: number;
  positionY: number;
  size: number;
  moveOffset: number;
}

export interface ProjectileModel {
  model: string;
  speed: number;
  damage: number;
  positionX: number;
  positionY: number;
}

export function   movePlayer(player: PlayerModel, moveOffset: number, moveDirection: string): PlayerModel {
  if (moveDirection === '-') {
    moveOffset = moveOffset * (-1);
  }
  player.positionX = player.positionX + moveOffset;
  return player;
}

export function  shoot(player: PlayerModel): ProjectileModel {
 return {model: 'asdasda', 'speed': 10, 'damage': 10, positionX: player.positionX, positionY: 20};
}


