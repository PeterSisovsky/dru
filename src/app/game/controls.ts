
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

export interface LevelModel {
  width: number;
  height: number;
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

let moveDirection = '+';

export function moveEnemy(enemy: EnemyModel): EnemyModel {
  if (moveDirection !== '-') {
    if (enemy.positionX + enemy.size + enemy.moveOffset <= 855) {
      if (enemy.positionX + enemy.size + (enemy.moveOffset * 2) <= 855) {
        enemy.positionX = enemy.positionX + enemy.moveOffset;
      } else {
        enemy.positionY = enemy.positionY + 10;
        moveDirection = '-';
      }
    }
  } else {
    if (enemy.positionX - enemy.moveOffset >= 0) {
      if (enemy.positionX - (enemy.moveOffset * 2) >= 0) {
        enemy.positionX = enemy.positionX - enemy.moveOffset;
      } else {
        enemy.positionY = enemy.positionY + 10;
        moveDirection = '+';
      }
    }
  }
  return enemy;
}




