# PYRO_Afterimages.js
Allows battlers in OMORI (and possibly other RPG MAKER MV games) to have afterimages.

## Installation
Install by downloading this plugin. Move the plugin to your projects js/plugin folder. Open the Plugin Manager in RPG MAKER MV by pressing the puzzle pieces in the top bar and scroll down to the bottom of the plugin list.  
From there, click on an empty spot and double click it. Click the Name dropdown bar and find "PYRO_Afterimages".  
Make sure the status is ON and click OK on both menus.

## Usage
This plugins does not really do anything on its own. You will either have to add a companion plugin like Cooldry's Enemy Float or write your own behaviour.  
This plugin adds extra copies of the enemy image to the Sprite_Set, you can access these with ``BattleManager._spriteset._afterimages``. Since this is an array, this is best done with a for loop.

An example:
```
let amount = BattleManager._spriteset._afterimages.length;
for (var i = 0; i < amount; i++)
    {
      BattleManager._spriteset._afterimages[i]._offsetY = ((amount + 1)- i);
    }
```