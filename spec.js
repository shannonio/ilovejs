/* Test Dependencies */
var assert = require('assert');
var expect = require('chai').expect;
var _ = require('underscore');
var rosie = require('rosie');
var callApplyBind = require('./call-apply-bind.js');



describe('Call vs Apply vs Bind', function() {
  expect(callApplyBind.tryCall()).to.be.an('object');
});

