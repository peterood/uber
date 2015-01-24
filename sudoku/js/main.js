// Generate the board
$('#board').html('');
var board = '',
	columns = 9,
	rows = 9;

board += '<table>';

for (var i = 0; i < rows; i++) {
	board += '<tr>';
	for (var j = 0; j < columns; j++) {
		board += '<td>' + '<input type="tel" id="' + i + j + '"></input>' + '</td>';
	}
	board += '</tr>';
}

board += '</table>';

$('#board').append(board);

var hint = {
	'#00': '5',
	'#01': '3',
	'#04': '7',
	'#10': '6',
	'#13': '1',
	'#14': '9',
	'#15': '5',
	'#21': '9',
	'#22': '8',
	'#27': '6',
	'#30': '8',
	'#34': '6',
	'#38': '3',
	'#40': '4',
	'#44': '8',
	'#46': '3',
	'#48': '1',
	'#50': '7',
	'#54': '2',
	'#58': '6',
	'#61': '6',
	'#66': '2',
	'#67': '8',
	'#73': '4',
	'#74': '1',
	'#75': '9',
	'#78': '5',
	'#84': '8',
	'#87': '7',
	'#88': '9'
}

var fill = function(hint) {
	for (key in hint) {
		$(key).val(hint[key]);
	}
};

fill(hint);