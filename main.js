let result = ""; //表示させるデータ

let is_calc = false; //＝で計算したどうかの判定

  result = document.getElementById('result'); //resultをhtmlから取得するs


//ACを押した場合の関数
function c_click() {
    result.value = "0"; //表示される値を初期値の０に戻す
    is_calc = false; //＝で計算したかどうかを代入してリセットする。=を押してない状態にする
}
//数字を押した場合の関数
function num_click(val) {
    if(is_calc) result.value = "0"; //もし＝が押されてる場合、表示を０にする
    is_calc = false; //＝の値を初期化する
    
    if (result.value == "0" && val == "0") { //もし表示が０で押されたボタンも０なら０を表示する
        result.value = "0";
        
    }else if(result.value == "0") { //それ以外でもし表示が０の時は押された数値を表示する
        result.value = val;
        
    }else {
        result.value += val; //それ以外の表示の時は表示に入力値を足していく
    }
}
//演算子を押した場合の関数
function ope_click(val) {
    if(is_calc) is_calc = false; //もし＝が押されている場合、＝を初期値に戻す
    
    if (is_ope_last()) {
        result.value = result.value.slice(0,-1) + val; //直前のボタンが演算子の場合ボタンを切り替える
            
    }else {
        result.value += val; //それ以外の時は計算式の値に演算子を加える
    }
}
//=を押したとき
function equal_click() {
    if(is_ope_last()) result.value = result.value.slice(0,-1); //もし表示の最後が演算子なら、演算子を消す
        let temp = new Function("return " + result.value.replaceAll("×", "*").replaceAll("÷", "/"))();

  if(temp == Infinity || Number.isNaN(temp)){
    result.value = "Error";
  }else{
    result.value = temp;
    is_calc = true;
  }
}

function is_ope_last() {
    return ["+","-","×","÷"].includes(result.value.toString().slice(-1)); //値が演算子かどうか
}