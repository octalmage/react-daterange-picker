"use strict";
var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var React = _interopRequire(require("react/addons"));

var PureRenderMixin = React.addons.PureRenderMixin;
var cx = React.addons.classSet;


var SelectionStart = React.createClass({
  displayName: "SelectionStart",
  mixins: [PureRenderMixin],

  render: function render() {
    var classes = {
      reactDaterangePicker__selection: true,
      "reactDaterangePicker__selection--start": true,
      "reactDaterangePicker__selection--is-inOtherMonth": this.props.isInOtherMonth
    };

    return React.createElement("div", { className: cx(classes) });
  }
});

module.exports = SelectionStart;