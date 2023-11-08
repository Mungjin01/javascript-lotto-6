import purchaseAmount from "./App.js";

function outputPurchaseAmount(purchaseAmount) {
    const purchaseCount = Math.floor(purchaseAmount / 1000);
    console.log(`${purchaseCount}개를 구매했습니다.`);
  }
  
  export default outputPurchaseAmount;
  