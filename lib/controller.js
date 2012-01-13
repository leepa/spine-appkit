(function() {
  var Controller, Spine,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Spine = require('spine');

  Controller = (function(_super) {

    __extends(Controller, _super);

    function Controller() {
      this.render = __bind(this.render, this);
      Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.render = function() {
      return this.html(this.template(this));
    };

    return Controller;

  })(Spine.Controller);

  module.exports = Controller;

}).call(this);
