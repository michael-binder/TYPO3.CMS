/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
define(["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class i{static getUrl(){return new URL(window.location.href).origin}static verifyOrigin(e){return i.getUrl()===e}static send(e,t=window){t.postMessage(e,i.getUrl())}}t.MessageUtility=i});