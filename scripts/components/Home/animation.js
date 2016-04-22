import f1 from 'f1';
var find = require('dom-select');
var f1Dom = require('f1-dom');

var ui = f1();
var container = find('#target');

ui.states({
	out: {
		container: {
			alpha: 0
		}
	},
	idle: {
		container: {
			alpha: 1
		}
	}
})
.transitions([
	{ from: 'out', to: 'idle' },
	{ from: 'idle', to: 'out' }
])
.targets({
	container: container
})
.parsers(f1Dom)
.init( 'out' )

export default ui
