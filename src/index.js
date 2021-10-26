const onClickAdd = () => {
  //テキストボックスの中身を取得し、追加完了で初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //liの生成
  const li = document.createElement("li");

  //divの生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pの生成
  const p = document.createElement("p");
  p.innerText = inputText;

  //button（完了）の生成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    //押された完了ボタンの親要素（div）を未完了リストから削除し完了リストへ追加する。
    //追加
    //button（戻る）の生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {});
    div.appendChild(p);
    div.appendChild(backButton);
    li.appendChild(div);
    document.getElementById("complate-ul").appendChild(li);
    //削除
    const complateTarget = complateButton.parentNode;
    const complateTargetMore = complateTarget.parentNode;
    document.getElementById("complate-ul").removeChild(complateTargetMore);
  });

  //button（削除）の生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親要素（div）を未完了リストから削除する。
    const deleteTarget = deleteButton.parentNode;
    const deleteTargetMore = deleteTarget.parentNode;
    document.getElementById("incomplate-ul").removeChild(deleteTargetMore);
  });

  //divの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);

  //liの子要素に各要素を設定
  li.appendChild(div);

  //未完了リストに追加
  document.getElementById("incomplate-ul").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
