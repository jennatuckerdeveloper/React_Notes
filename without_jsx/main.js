const root = ReactDOM.createRoot(document.getElementById('root'))

// React.createElement takes element string or Component, props, children.  

// JSX version:   

// class HelloJSX extends React.Component {
// 	render() {
// 		return <div>Hello {this.props.toWhat}</div>
// 	}
// }

// root.render(<HelloJSX toWhat='World!' />)  // => Won't run! 

// Without JSX version:

class Hello extends React.Component {
	render() {
		return React.createElement('div', null, `Hello ${this.props.toWhat}`)
	}
}

root.render(React.createElement(Hello, { toWhat: 'World!' }, null)) // Runs!

// Most basic version.  
// root.render(
// 	React.createElement(
//     'h2',
//     null,
//     'Greetings'
// 	)
// )

// Shows that render can return an array.  This will throw key prop error.  
class HelloArray extends React.Component {
	render() {
		return [
			React.createElement('div', null, `Hello ${this.props.toWhat}`),
			React.createElement('div', null, `Hello again ${this.props.toWhat}`)
		]
	}
}

// root.render(React.createElement(HelloArray, { toWhat: 'World!' }, null))
// Runs with key prop error.

const children = ['Hello World!', 'Hello again!']

// With class Component.  
class BasicClass extends React.Component {
	render() {
		return React.createElement(
			'div',
			null,
			this.props.children.map((text, i) =>
				React.createElement('p', { key: i }, text)
			)
		)
	}
}

// Runs
// const element = React.createElement(
// 	BasicClass,
// 	null,
// 	children
// )
// root.render(element)

const BasicFunc = ({ children }) => {
	return React.createElement(
			'div',
			null,
			children.map((text, i) =>
				React.createElement('p', { key: i }, text)
			)
		)
}

// const element = React.createElement(
// 	BasicFunc,
// 	null,
// 	children
// )

// root.render(element)
