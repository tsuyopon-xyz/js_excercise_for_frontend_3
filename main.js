/**
 * 課題1: id属性値が `main` のdiv要素ににul要素を追加する
 */
const idMainElement = document.getElementById('main');
const createUlElement = document.createElement('ul');
idMainElement.appendChild(createUlElement);

/**
 * 課題2: 課題1で作成したul要素に5つのli要素(DOM)を追加する
 *   - forループを使って5つのli要素(DOM)を追加すること
 *   - li要素(DOM)には先頭から次のテキストをセットする(textContentを使うこと)
 *     1. アイテム1
 *     2. アイテム2
 *     3. アイテム3
 *     4. アイテム4
 *     5. アイテム5
 */
(() => {
    const ulElement = document.querySelector('#main ul');
    const number = 5;
    for (let i = 0; i < number; i++) {
        const createLiElement = document.createElement('li');
        createLiElement.textContent = `${i + 1}番目のリストです`;
        ulElement.appendChild(createLiElement);
    }
})();


/**
 * 課題3: 課題2で作成した5つのli要素の内、先頭から4番目(アイテム4)の要素を削除する
 *   - ヒント: DOMのchildrenプロパティが使える
 *     - https://developer.mozilla.org/ja/docs/Web/API/ParentNode/children
 */
(() => {
    const ulElement = document.querySelector('#main ul');
    ulElement.removeChild(ulElement.children[4]);
})();

/**
 * 課題4: id属性値が `remove-all-items` のul要素内の全てのli要素を削除する
 *   - ul要素は削除しないこと
 */

const removeId = document.getElementById('remove-all-items');
while (removeId.firstChild) {
    removeId.removeChild(removeId.firstChild);
}