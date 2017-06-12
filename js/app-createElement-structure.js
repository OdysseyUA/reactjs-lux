let app = React.createElement('div', {},
    React.createElement('h1', {}, "I'm page header"),
        React.createElement('div', {},
            React.createElement('p', {}, "I'm staying at the begining of the page content"),
            React.createElement('div', {},
                React.createElement('span', {}, "I'm user logo container"),
                React.createElement('span', {}, "I'm user name container")

            ),
            React.createElement('h2', {}, "I'm next section header"),
            React.createElement('section', {},
                React.createElement('article', {}, "I'm awesome article"),
                React.createElement('ul', {},
                    React.createElement('li', {}, "I'm article item"),
                    React.createElement('li', {}, "I'm article item with ",
                        React.createElement('b', {}, "bold element")),
                )

            ),

        )
);


ReactDOM.render(app,
    document.getElementById('app')
);