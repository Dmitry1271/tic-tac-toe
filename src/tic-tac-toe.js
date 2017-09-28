class TicTacToe {
    constructor() {
        this.matrix = [[],[],[]];
        this.step = 0;
        this.symbol;
        this.winFlag = false;
    }

    getCurrentPlayerSymbol() {
        if(this.step % 2 == 0) return 'x';
        else return 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if(!this.matrix[rowIndex][columnIndex]){
            if(this.step++ % 2 == 0){
                this.symbol = 'x';
                this.matrix[rowIndex][columnIndex] = 'x';
                console.log(this.step + " " + this.symbol);
                return true;
             }
            else{
                this.symbol = 'o';
                this.matrix[rowIndex][columnIndex] = 'o';
                console.log(this.step + " " + this.symbol);
                return true;
            }
        }else return false;
    }

    isFinished() {
        let isEqual = function(a, b, c){ return a == b && b == c && c == a && a != undefined && b != undefined && c != undefined; };
        for(let i = 0; i < 3; ++i){
            if(isEqual(this.matrix[i][0], this.matrix[i][1], this.matrix[i][2]) || isEqual(this.matrix[0][i], this.matrix[1][i], this.matrix[2][i])){
                this.winFlag = true;
                return true;
            }
        }
        if(isEqual(this.matrix[0][0], this.matrix[1][1], this.matrix[2][2]) || isEqual(this.matrix[0][2], this.matrix[1][1], this.matrix[2][0])){
            this.winFlag = true;
            return true;
        }
        if(this.step == 9) return true;
        return false;
    }

    getWinner() {
        if(this.isFinished() && this.winFlag){
            return this.symbol;
        }else return null;
    }

    noMoreTurns() {
        if(this.step == 9) return true;
        else return false;
    }

    isDraw() {
        if(this.step == 9 && this.getWinner() == null){
            return true;
        }else return false;
    }

    getFieldValue(rowIndex, colIndex) {
        if(this.matrix[rowIndex][colIndex]) return this.matrix[rowIndex][colIndex];
        else return null;
    }
}

module.exports = TicTacToe;
