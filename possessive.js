"use strict";
angular.module('filter.possessive', [])
    .filter('possessive', function () {
        return function (properNoun) {
            if (properNoun == null) {
                return properNoun;
            }
            if (properNoun.charAt(properNoun.length-1) == "s" || properNoun.charAt(properNoun.length-1) == "S") {
                return properNoun + "'";
            }
            else return properNoun + "'s";
        }
    });
