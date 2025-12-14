module.exports = function (self) {
	self.setActionDefinitions({
		play: {
			name: 'Play',
			options: [],
			callback: async () => {
				try {
					await self.sendCommand('/play')
				} catch (error) {
					self.log('error', `Play action failed: ${error.message}`)
				}
			},
		},
		pause: {
			name: 'Pause',
			options: [],
			callback: async () => {
				try {
					await self.sendCommand('/pause')
				} catch (error) {
					self.log('error', `Pause action failed: ${error.message}`)
				}
			},
		},
		toggle: {
			name: 'Toggle Play/Pause',
			options: [],
			callback: async () => {
				try {
					await self.sendCommand('/toggle')
				} catch (error) {
					self.log('error', `Toggle action failed: ${error.message}`)
				}
			},
		},
		next: {
			name: 'Next',
			options: [],
			callback: async () => {
				try {
					await self.sendCommand('/next')
				} catch (error) {
					self.log('error', `Next action failed: ${error.message}`)
				}
			},
		},
		previous: {
			name: 'Previous',
			options: [],
			callback: async () => {
				try {
					await self.sendCommand('/previous')
				} catch (error) {
					self.log('error', `Previous action failed: ${error.message}`)
				}
			},
		},
	})
}
