const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
  const name = document.getElementById('nameInput').value;
  if (name.trim() === "") {
    alert("名前を入力してください！");
    return;
  }
  
  // 次のカウントダウン画面に進む（仮）
  alert(`スタートします！こんにちは、${name}さん`);
  // ※ここはあとでカウントダウン画面に遷移するように書き換える！
});
