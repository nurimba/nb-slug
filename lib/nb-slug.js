'use strict';

var diacritics = require('./diacritics');

function nbSlug(name) {
  var diacriticsMap = {};

  for (var i = 0; i < diacritics.length; i++) {
    var letters = diacritics[i].letters;

    for (var j = 0; j < letters.length ; j++) {
      diacriticsMap[letters[j]] = diacritics[i].base;
    }
  }

  function removeDiacritics (str) {
    return str.replace(/[^\u0000-\u007E]/g, function(a){
      return diacriticsMap[a] || a;
    });
  }

  var slug = removeDiacritics(String(name || '').trim())
    .replace(/^\s\s*/, '') // Trim start
    .replace(/\s\s*$/, '') // Trim end
    .toLowerCase() // Camel case is bad
    .replace(/[^a-z0-9_\-\s]+/g, '') // Exchange invalid chars
    .replace(/_/g, '-')     // Swap underscore with hyphen
    .replace(/[\s]+/g, '-') // Swap whitespace for single hyphen
    .replace(/-{2,}/g, '-') // Replace consecutive hyphens
    .trim()
    .replace(/^-|-$/, '');  // Get rid of the first/last hyphen(s)

  return slug;
}

module.exports = nbSlug;
