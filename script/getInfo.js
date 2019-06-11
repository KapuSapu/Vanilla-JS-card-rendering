var filteredData=[];
var data = JSON.stringify({
  "filterParameters": {
    "id": 18855843,
    "isInStockOnly": false,
    "newsOnly": false,
    "wearType": 0,
    "orderBy": 0,
    "page": 1,
    "params": {
      "tId": 0,
      "v": []
    },
    "producers": [],
    "sendPrices": true,
    "type": "action",
    "typeId": "",
    "branchId": ""
  }
});

document.addEventListener('DOMContentLoaded', () => getData());
const getData = () => {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.open("POST", "https://www.alza.cz/Services/RestService.svc/v2/products");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      sorterInfo(JSON.parse(xhr.responseText));
    }
  });
  xhr.send(data);
}

sorterInfo = store => {
  const {
    data
  } = store;
 filteredData = data.map(i => {
    const {
      id,img,name,price
    } = i;
    return {
      id,img,name,price
    };
  });
renderCards(filteredData, 12);
};