import HelloWorld from './components/HelloWorld';

const React = require('react');

export default class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HelloWorld, null));
  }

}