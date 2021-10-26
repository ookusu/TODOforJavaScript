const onClickAdd = () => {
  //テキストボックスの中身を取得し、追加完了で初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncomplateList(inputText);
};

//未完了リストに追加する関数
const createIncomplateList = (text) => {
  //liの生成
  const li = document.createElement("li");

  //divの生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pの生成
  const p = document.createElement("p");
  p.innerText = text;

  //button（完了）の生成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    //押された完了ボタンの親要素（div）を未完了リストから削除し完了リストへ追加する。
    //削除
    const deleteTarget = complateButton.parentNode;
    deleteFromIncomplateList(deleteTarget.parentNode);
    //追加
    const addTarget = complateButton.parentNode;
    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //liの生成
    const li = document.createElement("li");
    //div以下を初期化
    addTarget.textContent = null;
    console.log(addTarget);
    //pの生成
    const p = document.createElement("p");
    p.innerText = text;

    //button（戻る）の生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親要素を完了リストから削除する。
      const deleteTarget = backButton.parentNode;
      deleteFromComplateList(deleteTarget.parentNode);
      //テキスト取得
      const text = deleteTarget.firstElementChild.innerText;
      createIncomplateList(text);
    });
    //子要素を各要素に追加
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    li.appendChild(addTarget);
    document.getElementById("complate-ul").appendChild(li);
  });

  //button（削除）の生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親要素（div）を未完了リストから削除する。
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncomplateList(deleteTarget.parentNode);
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

//未完了リストから指定の要素を削除
const deleteFromIncomplateList = (target) => {
  document.getElementById("incomplate-ul").removeChild(target);
};
//完了リストから指定の要素を削除
const deleteFromComplateList = (target) => {
  document.getElementById("complate-ul").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
