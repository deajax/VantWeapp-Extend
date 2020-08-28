Component({
	options: {
		addGlobalClass: true,
		multipleSlots: true
	},
	properties: {
		name: String,
		size: String,
		classPrefix: {
			type: String,
			value: 'remix',
		},
		color:  {
			type: String,
			value: 'inherit',
		}
	}
})
