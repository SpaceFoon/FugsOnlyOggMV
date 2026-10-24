/*:
 * @target MV 1.63
 * @plugindesc v1.0.0 - Use OGG audio in all RPG Maker MV deployments.
 * @author Fugahagen
 * =======================================================
 * Credits
 * =======================================================
 * ATT_Turan gave me the idea but I did all the hard work!
 * =======================================================
 * License: The MIT License
 * =======================================================
 * Copyright 2024 Fugahagen
 * This plugin is released under MIT license.
 * http://opensource.org/licenses/mit-license.php
 * If you violate the license agreement your mother will
 * die in her sleep tonight! All protections nulled!
 */

// Overwrite function from rpg_managers.js line 1568
(function () {
  AudioManager.audioFileExt = function () {
    return ".ogg";
  };
})();
