
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
  size: number;
  positionX: number;
  positionY: number;
}

export interface EnemyModel {
  positionX: number;
  positionY: number;
  size: number;
  moveOffset: number;
}

export function   movePlayer(player: PlayerModel, moveOffset: number, moveDirection: string): PlayerModel {
  if (moveDirection === '-') {
    moveOffset = moveOffset * (-1);
  }
  player.positionX = player.positionX + moveOffset;
  return player;
}

export function  shoot(player: PlayerModel): ProjectileModel {
 return {model: 'projectileModel', 'speed': 10, 'size': 20, positionX: player.positionX, positionY: 605};
}


