define(function (require, exports, module) {/**
 * Unidecode takes UTF-8 data and tries to represent it in US-ASCII characters (i.e., the universally displayable characters between 0x00 and 0x7F).
 * The representation is almost always an attempt at transliteration -- i.e., conveying, in Roman letters, the pronunciation expressed by the text in
 * some other writing system.
 *
 * The tables used (in data) are converted from the tables provided in the perl library Text::Unidecode (http://search.cpan.org/dist/Text-Unidecode/lib/Text/Unidecode.pm)
 * and are distributed under the perl license
 *
 * @author Francois-Guillaume Ribreau
 *
 * Based on the port of unidecode for php
 */

'use strict';

var tr = {};
var utf8_rx = /(?![\x00-\x7F]|[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3})./g;

module.exports = function (str) {
  return str.replace(utf8_rx, unidecode_internal_replace);
};

function unidecode_internal_replace(match) {
  var utf16 = utf8_to_utf16(match);

  if (utf16 > 0xFFFF) {
    return '_';
  } else {

    var h = utf16 >> 8;
    var l = utf16 & 0xFF;

    // (18) 18 > h < 1e (30)
    if (h > 24 && h < 30) return '';

    //(d7) 215 > h < 249 (f9) no supported
    if (h > 215 && h < 249) return '';

    if (!tr[h]) {
      switch (dec2hex(h)) {
      case '00':
        tr[h] = require('./data.requirejs/x00');
        break;
      case '01':
        tr[h] = require('./data.requirejs/x01');
        break;
      case '02':
        tr[h] = require('./data.requirejs/x02');
        break;
      case '03':
        tr[h] = require('./data.requirejs/x03');
        break;
      case '04':
        tr[h] = require('./data.requirejs/x04');
        break;
      case '05':
        tr[h] = require('./data.requirejs/x05');
        break;
      case '06':
        tr[h] = require('./data.requirejs/x06');
        break;
      case '07':
        tr[h] = require('./data.requirejs/x07');
        break;
      case '09':
        tr[h] = require('./data.requirejs/x09');
        break;
      case '0a':
        tr[h] = require('./data.requirejs/x0a');
        break;
      case '0b':
        tr[h] = require('./data.requirejs/x0b');
        break;
      case '0c':
        tr[h] = require('./data.requirejs/x0c');
        break;
      case '0d':
        tr[h] = require('./data.requirejs/x0d');
        break;
      case '0e':
        tr[h] = require('./data.requirejs/x0e');
        break;
      case '0f':
        tr[h] = require('./data.requirejs/x0f');
        break;
      case '10':
        tr[h] = require('./data.requirejs/x10');
        break;
      case '11':
        tr[h] = require('./data.requirejs/x11');
        break;
      case '12':
        tr[h] = require('./data.requirejs/x12');
        break;
      case '13':
        tr[h] = require('./data.requirejs/x13');
        break;
      case '14':
        tr[h] = require('./data.requirejs/x14');
        break;
      case '15':
        tr[h] = require('./data.requirejs/x15');
        break;
      case '16':
        tr[h] = require('./data.requirejs/x16');
        break;
      case '17':
        tr[h] = require('./data.requirejs/x17');
        break;
      case '18':
        tr[h] = require('./data.requirejs/x18');
        break;
      case '1e':
        tr[h] = require('./data.requirejs/x1e');
        break;
      case '1f':
        tr[h] = require('./data.requirejs/x1f');
        break;
      case '20':
        tr[h] = require('./data.requirejs/x20');
        break;
      case '21':
        tr[h] = require('./data.requirejs/x21');
        break;
      case '22':
        tr[h] = require('./data.requirejs/x22');
        break;
      case '23':
        tr[h] = require('./data.requirejs/x23');
        break;
      case '24':
        tr[h] = require('./data.requirejs/x24');
        break;
      case '25':
        tr[h] = require('./data.requirejs/x25');
        break;
      case '26':
        tr[h] = require('./data.requirejs/x26');
        break;
      case '27':
        tr[h] = require('./data.requirejs/x27');
        break;
      case '28':
        tr[h] = require('./data.requirejs/x28');
        break;
      case '2e':
        tr[h] = require('./data.requirejs/x2e');
        break;
      case '2f':
        tr[h] = require('./data.requirejs/x2f');
        break;
      case '30':
        tr[h] = require('./data.requirejs/x30');
        break;
      case '31':
        tr[h] = require('./data.requirejs/x31');
        break;
      case '32':
        tr[h] = require('./data.requirejs/x32');
        break;
      case '33':
        tr[h] = require('./data.requirejs/x33');
        break;
      case '4d':
        tr[h] = require('./data.requirejs/x4d');
        break;
      case '4e':
        tr[h] = require('./data.requirejs/x4e');
        break;
      case '4f':
        tr[h] = require('./data.requirejs/x4f');
        break;
      case '50':
        tr[h] = require('./data.requirejs/x50');
        break;
      case '51':
        tr[h] = require('./data.requirejs/x51');
        break;
      case '52':
        tr[h] = require('./data.requirejs/x52');
        break;
      case '53':
        tr[h] = require('./data.requirejs/x53');
        break;
      case '54':
        tr[h] = require('./data.requirejs/x54');
        break;
      case '55':
        tr[h] = require('./data.requirejs/x55');
        break;
      case '56':
        tr[h] = require('./data.requirejs/x56');
        break;
      case '57':
        tr[h] = require('./data.requirejs/x57');
        break;
      case '58':
        tr[h] = require('./data.requirejs/x58');
        break;
      case '59':
        tr[h] = require('./data.requirejs/x59');
        break;
      case '5a':
        tr[h] = require('./data.requirejs/x5a');
        break;
      case '5b':
        tr[h] = require('./data.requirejs/x5b');
        break;
      case '5c':
        tr[h] = require('./data.requirejs/x5c');
        break;
      case '5d':
        tr[h] = require('./data.requirejs/x5d');
        break;
      case '5e':
        tr[h] = require('./data.requirejs/x5e');
        break;
      case '5f':
        tr[h] = require('./data.requirejs/x5f');
        break;
      case '60':
        tr[h] = require('./data.requirejs/x60');
        break;
      case '61':
        tr[h] = require('./data.requirejs/x61');
        break;
      case '62':
        tr[h] = require('./data.requirejs/x62');
        break;
      case '63':
        tr[h] = require('./data.requirejs/x63');
        break;
      case '64':
        tr[h] = require('./data.requirejs/x64');
        break;
      case '65':
        tr[h] = require('./data.requirejs/x65');
        break;
      case '66':
        tr[h] = require('./data.requirejs/x66');
        break;
      case '67':
        tr[h] = require('./data.requirejs/x67');
        break;
      case '68':
        tr[h] = require('./data.requirejs/x68');
        break;
      case '69':
        tr[h] = require('./data.requirejs/x69');
        break;
      case '6a':
        tr[h] = require('./data.requirejs/x6a');
        break;
      case '6b':
        tr[h] = require('./data.requirejs/x6b');
        break;
      case '6c':
        tr[h] = require('./data.requirejs/x6c');
        break;
      case '6d':
        tr[h] = require('./data.requirejs/x6d');
        break;
      case '6e':
        tr[h] = require('./data.requirejs/x6e');
        break;
      case '6f':
        tr[h] = require('./data.requirejs/x6f');
        break;
      case '70':
        tr[h] = require('./data.requirejs/x70');
        break;
      case '71':
        tr[h] = require('./data.requirejs/x71');
        break;
      case '72':
        tr[h] = require('./data.requirejs/x72');
        break;
      case '73':
        tr[h] = require('./data.requirejs/x73');
        break;
      case '74':
        tr[h] = require('./data.requirejs/x74');
        break;
      case '75':
        tr[h] = require('./data.requirejs/x75');
        break;
      case '76':
        tr[h] = require('./data.requirejs/x76');
        break;
      case '77':
        tr[h] = require('./data.requirejs/x77');
        break;
      case '78':
        tr[h] = require('./data.requirejs/x78');
        break;
      case '79':
        tr[h] = require('./data.requirejs/x79');
        break;
      case '7a':
        tr[h] = require('./data.requirejs/x7a');
        break;
      case '7b':
        tr[h] = require('./data.requirejs/x7b');
        break;
      case '7c':
        tr[h] = require('./data.requirejs/x7c');
        break;
      case '7d':
        tr[h] = require('./data.requirejs/x7d');
        break;
      case '7e':
        tr[h] = require('./data.requirejs/x7e');
        break;
      case '7f':
        tr[h] = require('./data.requirejs/x7f');
        break;
      case '80':
        tr[h] = require('./data.requirejs/x80');
        break;
      case '81':
        tr[h] = require('./data.requirejs/x81');
        break;
      case '82':
        tr[h] = require('./data.requirejs/x82');
        break;
      case '83':
        tr[h] = require('./data.requirejs/x83');
        break;
      case '84':
        tr[h] = require('./data.requirejs/x84');
        break;
      case '85':
        tr[h] = require('./data.requirejs/x85');
        break;
      case '86':
        tr[h] = require('./data.requirejs/x86');
        break;
      case '87':
        tr[h] = require('./data.requirejs/x87');
        break;
      case '88':
        tr[h] = require('./data.requirejs/x88');
        break;
      case '89':
        tr[h] = require('./data.requirejs/x89');
        break;
      case '8a':
        tr[h] = require('./data.requirejs/x8a');
        break;
      case '8b':
        tr[h] = require('./data.requirejs/x8b');
        break;
      case '8c':
        tr[h] = require('./data.requirejs/x8c');
        break;
      case '8d':
        tr[h] = require('./data.requirejs/x8d');
        break;
      case '8e':
        tr[h] = require('./data.requirejs/x8e');
        break;
      case '8f':
        tr[h] = require('./data.requirejs/x8f');
        break;
      case '90':
        tr[h] = require('./data.requirejs/x90');
        break;
      case '91':
        tr[h] = require('./data.requirejs/x91');
        break;
      case '92':
        tr[h] = require('./data.requirejs/x92');
        break;
      case '93':
        tr[h] = require('./data.requirejs/x93');
        break;
      case '94':
        tr[h] = require('./data.requirejs/x94');
        break;
      case '95':
        tr[h] = require('./data.requirejs/x95');
        break;
      case '96':
        tr[h] = require('./data.requirejs/x96');
        break;
      case '97':
        tr[h] = require('./data.requirejs/x97');
        break;
      case '98':
        tr[h] = require('./data.requirejs/x98');
        break;
      case '99':
        tr[h] = require('./data.requirejs/x99');
        break;
      case '9a':
        tr[h] = require('./data.requirejs/x9a');
        break;
      case '9b':
        tr[h] = require('./data.requirejs/x9b');
        break;
      case '9c':
        tr[h] = require('./data.requirejs/x9c');
        break;
      case '9d':
        tr[h] = require('./data.requirejs/x9d');
        break;
      case '9e':
        tr[h] = require('./data.requirejs/x9e');
        break;
      case '9f':
        tr[h] = require('./data.requirejs/x9f');
        break;
      case 'a0':
        tr[h] = require('./data.requirejs/xa0');
        break;
      case 'a1':
        tr[h] = require('./data.requirejs/xa1');
        break;
      case 'a2':
        tr[h] = require('./data.requirejs/xa2');
        break;
      case 'a3':
        tr[h] = require('./data.requirejs/xa3');
        break;
      case 'a4':
        tr[h] = require('./data.requirejs/xa4');
        break;
      case 'ac':
        tr[h] = require('./data.requirejs/xac');
        break;
      case 'ad':
        tr[h] = require('./data.requirejs/xad');
        break;
      case 'ae':
        tr[h] = require('./data.requirejs/xae');
        break;
      case 'af':
        tr[h] = require('./data.requirejs/xaf');
        break;
      case 'b0':
        tr[h] = require('./data.requirejs/xb0');
        break;
      case 'b1':
        tr[h] = require('./data.requirejs/xb1');
        break;
      case 'b2':
        tr[h] = require('./data.requirejs/xb2');
        break;
      case 'b3':
        tr[h] = require('./data.requirejs/xb3');
        break;
      case 'b4':
        tr[h] = require('./data.requirejs/xb4');
        break;
      case 'b5':
        tr[h] = require('./data.requirejs/xb5');
        break;
      case 'b6':
        tr[h] = require('./data.requirejs/xb6');
        break;
      case 'b7':
        tr[h] = require('./data.requirejs/xb7');
        break;
      case 'b8':
        tr[h] = require('./data.requirejs/xb8');
        break;
      case 'b9':
        tr[h] = require('./data.requirejs/xb9');
        break;
      case 'ba':
        tr[h] = require('./data.requirejs/xba');
        break;
      case 'bb':
        tr[h] = require('./data.requirejs/xbb');
        break;
      case 'bc':
        tr[h] = require('./data.requirejs/xbc');
        break;
      case 'bd':
        tr[h] = require('./data.requirejs/xbd');
        break;
      case 'be':
        tr[h] = require('./data.requirejs/xbe');
        break;
      case 'bf':
        tr[h] = require('./data.requirejs/xbf');
        break;
      case 'c0':
        tr[h] = require('./data.requirejs/xc0');
        break;
      case 'c1':
        tr[h] = require('./data.requirejs/xc1');
        break;
      case 'c2':
        tr[h] = require('./data.requirejs/xc2');
        break;
      case 'c3':
        tr[h] = require('./data.requirejs/xc3');
        break;
      case 'c4':
        tr[h] = require('./data.requirejs/xc4');
        break;
      case 'c5':
        tr[h] = require('./data.requirejs/xc5');
        break;
      case 'c6':
        tr[h] = require('./data.requirejs/xc6');
        break;
      case 'c7':
        tr[h] = require('./data.requirejs/xc7');
        break;
      case 'c8':
        tr[h] = require('./data.requirejs/xc8');
        break;
      case 'c9':
        tr[h] = require('./data.requirejs/xc9');
        break;
      case 'ca':
        tr[h] = require('./data.requirejs/xca');
        break;
      case 'cb':
        tr[h] = require('./data.requirejs/xcb');
        break;
      case 'cc':
        tr[h] = require('./data.requirejs/xcc');
        break;
      case 'cd':
        tr[h] = require('./data.requirejs/xcd');
        break;
      case 'ce':
        tr[h] = require('./data.requirejs/xce');
        break;
      case 'cf':
        tr[h] = require('./data.requirejs/xcf');
        break;
      case 'd0':
        tr[h] = require('./data.requirejs/xd0');
        break;
      case 'd1':
        tr[h] = require('./data.requirejs/xd1');
        break;
      case 'd2':
        tr[h] = require('./data.requirejs/xd2');
        break;
      case 'd3':
        tr[h] = require('./data.requirejs/xd3');
        break;
      case 'd4':
        tr[h] = require('./data.requirejs/xd4');
        break;
      case 'd5':
        tr[h] = require('./data.requirejs/xd5');
        break;
      case 'd6':
        tr[h] = require('./data.requirejs/xd6');
        break;
      case 'd7':
        tr[h] = require('./data.requirejs/xd7');
        break;
      case 'f9':
        tr[h] = require('./data.requirejs/xf9');
        break;
      case 'fa':
        tr[h] = require('./data.requirejs/xfa');
        break;
      case 'fb':
        tr[h] = require('./data.requirejs/xfb');
        break;
      case 'fc':
        tr[h] = require('./data.requirejs/xfc');
        break;
      case 'fd':
        tr[h] = require('./data.requirejs/xfd');
        break;
      case 'fe':
        tr[h] = require('./data.requirejs/xfe');
        break;
      case 'ff':
        tr[h] = require('./data.requirejs/xff');
        break;
      default:
        // console.error("Unidecode file not found for h=", h);
        return '';
      }
    }

    return tr[h][l];
  }
}

function dec2hex(i) {
  return (i + 0x100).toString(16).substr(-2);
}

function utf8_to_utf16(raw) {
  var b1, b2, b3, b4,
    x, y, z;

  while (Array.isArray(raw)) raw = raw[0];

  switch (raw.length) {
  case 1:
    return ord(raw);

    // http://en.wikipedia.org/wiki/UTF-8
  case 2:
    b1 = ord(raw.substr(0, 1));
    b2 = ord(raw.substr(1, 1));

    x = ((b1 & 0x03) << 6) | (b2 & 0x3F);
    y = (b1 & 0x1C) >> 2;

    return (y << 8) | x;

  case 3:
    b1 = ord(raw.substr(0, 1));
    b2 = ord(raw.substr(1, 1));
    b3 = ord(raw.substr(2, 1));

    x = ((b2 & 0x03) << 6) | (b3 & 0x3F);
    y = ((b1 & 0x0F) << 4) | ((b2 & 0x3C) >> 2);

    return (y << 8) | x;

  default:
    b1 = ord(raw.substr(0, 1));
    b2 = ord(raw.substr(1, 1));
    b3 = ord(raw.substr(2, 1));
    b4 = ord(raw.substr(3, 1));

    x = ((b3 & 0x03) << 6) | (b4 & 0x3F);
    y = ((b2 & 0x0F) << 4) | ((b3 & 0x3C) >> 2);
    z = ((b1 & 0x07) << 5) | ((b2 & 0x30) >> 4);

    return (z << 16) | (y << 8) | x;
  }
}

/* From php.js */

function ord(string) {
  // Returns the codepoint value of a character
  //
  // version: 1109.2015
  // discuss at: http://phpjs.org/functions/ord
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   bugfixed by: Onno Marsman
  // +   improved by: Brett Zamir (http://brett-zamir.me)
  // +   input by: incidence
  // *     example 1: ord('K');
  // *     returns 1: 75
  // *     example 2: ord('\uD800\uDC00'); // surrogate pair to create a single Unicode character
  // *     returns 2: 65536
  var str = string + '',
    code = str.charCodeAt(0);
  if (0xD800 <= code && code <= 0xDBFF) { // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
    var hi = code;
    if (str.length === 1) {
      return code; // This is just a high surrogate with no following low surrogate, so we return its value;
      // we could also throw an error as it is not a complete character, but someone may want to know
    }
    var low = str.charCodeAt(1);
    return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
  }
  if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
    return code; // This is just a low surrogate with no preceding high surrogate, so we return its value;
    // we could also throw an error as it is not a complete character, but someone may want to know
  }
  return code;
}

});
