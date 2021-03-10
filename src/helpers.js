const generateStyles = (styles) => Object.entries(styles)
			.reduce((a, [property, value]) => [...a, `${property}: ${value};`], [])
			.join(' ')

export {
	generateStyles
}
