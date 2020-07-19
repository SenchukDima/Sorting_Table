'use strict'

function fillTestData(){
    let keys = ['Date', 'Number', 'String'];
    let data = [];
    let getRand = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    let randDate = () => new Date(Math.floor(now + Math.random() * (end_date - now))).toLocaleString();
    let getRandString = function(){
        let ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = "";
        for( let j = 0; j < 10; j++ ){
            result += ch.charAt(Math.floor(Math.random() * ch.length));
        }
        return result;
    };
    let now = Date.now();
    let end_date = now + (86400000 * 365 * 2);
    for( let i=0; i < 10; i++ ){
        data.push(
            [
                randDate(),
                getRand(1111, 99999),
                getRandString()
            ]
        );
    }
    
    return {
        keys: keys,
        data: data
    }
}

const dataMass = fillTestData();
console.log(dataMass);


function addDataToBody(nodeList, mass) { 

    mass.data.forEach((data, i) => {
      let tr = nodeList.insertRow(i);
      Object.keys(data).forEach((k, j) => { 
        let cell = tr.insertCell(j);
        cell.innerHTML = data[k];   
      });
      nodeList.appendChild(tr);
    })
  }

 let insertBody = document.querySelector("#table_data tbody");

  addDataToBody(insertBody, dataMass);



