var board = '',
	columns = 9,
	fill,
	hint,
	makeBoard,
	newGame,
	rows = 9,
	solution,
	verify;

// Add event listeners
document.getElementById('newGame').addEventListener('click', function() {
	newGame();
	fill(hint);
});

document.getElementById('verify').addEventListener('click', function() {
	verify(solution);
})

// Functions
fill = function(hint) {
	for (key in hint) {
		$(key).val(hint[key]);
	}
}

verify = function(solution) {
	for (key in solution) {
		if ($(key).val() !== '') {
			if ($(key).val() !== solution[key]) {
				$(key).addClass('error');
			}
		}
	}
}

makeBoard = function() {
	$('#board').html('');
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
}

newGame = function() {
	$('td input').val('').removeClass('error');
}

// Objects
hint = {
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
	'#43': '8',
	'#45': '3',
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

solution = {
	'#00': '5',
	'#01': '3',
	'#02': '4',
	'#03': '6',
	'#04': '7',
	'#05': '8',
	'#06': '9',
	'#07': '1',
	'#08': '2',
	'#10': '6',
	'#11': '7',
	'#12': '2',
	'#13': '1',
	'#14': '9',
	'#15': '5',
	'#16': '3',
	'#17': '4',
	'#18': '8',
	'#20': '1',
	'#21': '9',
	'#22': '8',
	'#23': '3',
	'#24': '4',
	'#25': '2',
	'#26': '5',
	'#27': '6',
	'#28': '7',
	'#30': '8',
	'#31': '5',
	'#32': '9',
	'#33': '7',
	'#34': '6',
	'#35': '1',
	'#36': '4',
	'#37': '2',
	'#38': '3',
	'#40': '4',
	'#41': '2',
	'#42': '6',
	'#43': '8',
	'#44': '5',
	'#45': '3',
	'#46': '7',
	'#47': '9',
	'#48': '1',
	'#50': '7',
	'#51': '1',
	'#52': '3',
	'#53': '9',
	'#54': '2',
	'#55': '4',
	'#56': '8',
	'#57': '5',
	'#58': '6',
	'#60': '9',
	'#61': '6',
	'#62': '1',
	'#63': '5',
	'#64': '3',
	'#65': '7',
	'#66': '2',
	'#67': '8',
	'#68': '4',
	'#70': '2',
	'#71': '8',
	'#72': '7',
	'#73': '4',
	'#74': '1',
	'#75': '9',
	'#76': '6',
	'#77': '3',
	'#78': '5',
	'#80': '3',
	'#81': '4',
	'#82': '5',
	'#83': '2',
	'#84': '8',
	'#85': '6',
	'#86': '1',
	'#87': '7',
	'#88': '9'
}

// Generate the board
makeBoard();

// Pre fill the board with hints
fill(hint);
