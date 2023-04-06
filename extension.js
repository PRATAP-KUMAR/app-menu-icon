/* extension.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

/* exported init */

'use strict';

const {Clutter} = imports.gi;

const Main = imports.ui.main;
const AppMenu = Main.panel.statusArea.appMenu;

const ORIGINAL_STYLE = AppMenu._iconBox.get_style();

class Extension {
    enable() {
        AppMenu._iconBox.clear_effects();
        AppMenu._iconBox.set_style('-st-icon-style: regular');
        AppMenu._onIconThemeChanged();
    }

    disable() {
        AppMenu._iconBox.set_style(ORIGINAL_STYLE);
        AppMenu._iconBox.add_effect(new Clutter.DesaturateEffect());
        AppMenu._onIconThemeChanged();
    }
}

/**
 *
 */
function init() {
    return new Extension();
}
