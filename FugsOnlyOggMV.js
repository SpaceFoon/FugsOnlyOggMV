/*:
 * @target MV 1.63
 * @plugindesc v 1.0
 * Simple plugin that replaces m4a with ogg in all
 * deployments. M4a is dead!0
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
