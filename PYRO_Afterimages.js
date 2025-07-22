//=============================================================================
// PYRO_Afterimages.js
//=============================================================================
/*:
 * @plugindesc Allows enemies to have images. Best paired with Cooldry's Enemy Float Plugin.
 *
 * @author Pyro
 *
 * @help
 * TERMS OF USE
 * Copyright (c) 2025 Pyro
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
 * associated documentation files (the “Software”), to deal in the Software without restriction, including 
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
 * LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
 *
 */

//=============================================================================
// * 
//=============================================================================
// 

(function() {
  const _Scene_Battle_prototype_create = Scene_Battle.prototype.create;
  Scene_Battle.prototype.create = function() {
    _Scene_Battle_prototype_create.call(this);

    // Get Scene
    const scene = SceneManager._scene;
    const spriteset = scene._spriteset;
    // Set Container
    let container = spriteset._pictureContainer;
    console.log(container);
  }

  const Spriteset_Battle_prototype_createEnemies = Spriteset_Battle.prototype.createEnemies;
  Spriteset_Battle.prototype.createEnemies = function() {
    Spriteset_Battle_prototype_createEnemies.call(this);
    console.log(this._enemySprites);
  }

  const Spriteset_Battle_prototype_createLowerLayer = Spriteset_Battle.prototype.createLowerLayer
  Spriteset_Battle.prototype.createLowerLayer = function() {
    Spriteset_Base.prototype.createLowerLayer.call(this);
    console.log(this);
    this.createBackground();
    this.createBattleField();
    this.createBattleback();
    this.createEnemyAfterimages();
    this.createEnemies();
    this.createActors();
  };

  Spriteset_Battle.prototype.createEnemyAfterimages = function() {

    console.log(this);

    var enemies = $gameTroop.members();
    var sprites = [];
    for (var k = 0; k < 5; k++) {1
      for (var i = 0; i < enemies.length; i++) {
          //sprites[i] = new Sprite_Enemy(enemies[i]);
          let spr = new Sprite_Enemy(enemies[i])
          spr.alpha = 1 / (k + 1)
          spr.z = -1;
          sprites.push(spr);
      }
    }
    sprites.sort(this.compareEnemySprite.bind(this));
    for (var j = 0; j < sprites.length; j++) {
        this._battleField.addChild(sprites[j]);
    }
    this._afterimages = sprites;
    this._enemySprites = sprites;

    console.log(this);
  };
}
)();