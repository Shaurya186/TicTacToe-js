let board;
function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
    };
    init();
    
    const squares = Array.from(document.querySelectorAll('#board div'));
    function render() {
        board.forEach(function(mark, index) {
        squares[index].textContent = mark;
        });
        };
        let board;
        let turn = 'X';
        document.getElementById('board').addEventListener('click', handleTurn);
        function handleTurn(event) {
            let idx = squares.findIndex(function(square) {
            return square === event.target;
            });
            board[idx] = turn;
// check your console logs to make sure it's working!
            };
            <condition> ? <if condition is true, this> : <else if condition is false, this></condition>