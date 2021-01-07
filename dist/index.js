function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var styles = {"test":"_styles-module__test__3ybTi"};

var HorizontalScroll = function HorizontalScroll(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component 2: ", text);
};

HorizontalScroll.defaultProps = {
  items: [],
  showArrowsIfEnd: false
};

module.exports = HorizontalScroll;
//# sourceMappingURL=index.js.map
