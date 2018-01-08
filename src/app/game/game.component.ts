import { Component, OnInit } from '@angular/core';
import { PlayerModel, EnemyModel, ProjectileModel, LevelModel, movePlayer, moveEnemy, shoot } from './controls';
import { colisionCheck } from './colidor';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss', './game-objects.scss']
})

export class GameComponent implements OnInit {
  player: PlayerModel = {
    score: 0,
    hp: 10,
    positionX: 440,
    positionY: 605,
    size: 20,
    moveOffset: 44,
  };
  enemy: EnemyModel = {
    positionX: 440,
    positionY: 0,
    size: 80,
    moveOffset: 22,
};

  level: LevelModel = {
    width: 700,
    height: 855,
  };
  slowDown = false;
  activeProjectiles: ProjectileModel[] = [];

  constructor() {
    setInterval(
      () => {
        if (this.activeProjectiles.length > 0) {
          this.activeProjectiles[0].positionY -= 30;
          colisionCheck(this.activeProjectiles[0], this.enemy);
        }
        if (!this.slowDown) {
          moveEnemy(this.enemy);
          this.slowDown = !this.slowDown;
        } else {
          this.slowDown = !this.slowDown;
        }
      },
      50
    );
  }

  ngOnInit() {
  }

  onKeydown(event: KeyboardEvent): void {
    switch (event.keyCode) {
      case 39: {
        if (this.player.positionX < 880) {
          movePlayer(this.player, this.player.moveOffset, '+');
        }
        break;
      }
      case 37: {
        if (this.player.positionX > 0) {
          movePlayer(this.player, this.player.moveOffset, '-');
        }
        break;
      }
      case 32: {
        if (this.activeProjectiles.length < 1) {
          this.activeProjectiles.push(shoot(this.player));
          const projectileLifetime = setInterval(
            () => {
              if (this.activeProjectiles.length > 0) {
                this.activeProjectiles.shift();
                clearInterval(projectileLifetime);
              }
            },
            1100
          );
        }
      }
    }
  }
}

