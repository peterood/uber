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