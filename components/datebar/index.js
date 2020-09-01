Component({
	options: {
		addGlobalClass: true,
	},
	properties: {
		data: String
	},
	data: {

	},
	methods: {
		dateClick() {
			this.triggerEvent('dateClick', 'dateClick')
		},
		leftClick() {
			this.triggerEvent('leftClick', 'leftClick')
		},
		rightClick() {
			this.triggerEvent('rightClick', 'rightClick')
		}
	}
})