var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');


// Component properties could include:
// state
// lifecycle event
// UI

class App extends React.Component {
    render() {
        return (
            <div>
                Hello React Training!
            </div>
        )
    }
}

<App />

ReactDOM.render(
    <App />,
    document.getElementById('app')
)