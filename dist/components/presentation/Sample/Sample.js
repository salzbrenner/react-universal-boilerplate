"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sample = function (_Component) {
  _inherits(Sample, _Component);

  function Sample() {
    _classCallCheck(this, Sample);

    var _this = _possibleConstructorReturn(this, (Sample.__proto__ || Object.getPrototypeOf(Sample)).call(this));

    _this.state = {
      counter: 0
    };
    _this.increment = _this.increment.bind(_this);
    _this.decrement = _this.decrement.bind(_this);
    return _this;
  }

  _createClass(Sample, [{
    key: "increment",
    value: function increment() {
      this.setState({ counter: this.state.counter + 1 });
    }
  }, {
    key: "decrement",
    value: function decrement() {
      this.setState({ counter: this.state.counter - 1 });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "sample" },
        _react2.default.createElement(
          "p",
          null,
          "Greetings, I am a ",
          _react2.default.createElement(
            "code",
            null,
            "Sample"
          ),
          " counter component."
        ),
        _react2.default.createElement(
          "h2",
          null,
          this.state.counter
        ),
        _react2.default.createElement(
          "button",
          { className: "button", onClick: this.increment },
          "Increment"
        ),
        _react2.default.createElement(
          "button",
          { className: "button", onClick: this.decrement },
          "Decrement"
        )
      );
    }
  }]);

  return Sample;
}(_react.Component);

exports.default = Sample;