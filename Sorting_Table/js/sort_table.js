"use strict";

$(document).ready(function () {
  $("#dateCol").click(function () {
    sortTable();
    document.getElementById("numberCol").textContent = "Number";
    document.getElementById("stringCol").textContent = "String";
  });

  let dateAsc = true;
  function sortTable() {
    let tbl = document.getElementById("table_data").tBodies[0];
    let store = [];
    for (let i = 0, len = tbl.rows.length; i < len; i++) {
      let row = tbl.rows[i];
      let rowDateData = row.cells[0].textContent;
      let rowSplit = rowDateData.split(",");
      let rowDateSplit = `${rowSplit[0]
        .split(".")
        .reverse()},${rowSplit[1].split(":")}`
        .split(" ")
        .join("");
      let sumRowSplit = rowDateSplit.split(",");
      let rowDateTimeStamp =
        new Date(
          parseInt(sumRowSplit[0], 10),
          parseInt(sumRowSplit[1], 10),
          parseInt(sumRowSplit[2], 10),
          parseInt(sumRowSplit[3], 10),
          parseInt(sumRowSplit[4], 10),
          parseInt(sumRowSplit[5], 10)
        ).getTime() / 1000;
      if (!isNaN(rowDateTimeStamp)) store.push([rowDateTimeStamp, row]);
    }
    if (dateAsc) {
      store.sort(function (x, y) {
        return x[0] - y[0];
      });
      document.getElementById("dateCol").textContent = "Date ↑";
      dateAsc = false;
    } else {
      store.sort(function (x, y) {
        return y[0] - x[0];
      });
      document.getElementById("dateCol").textContent = "Date ↓";
      dateAsc = true;
    }

    for (let i = 0, len = store.length; i < len; i++) {
      tbl.appendChild(store[i][1]);
    }
    store = null;
  }
});

$(document).ready(function () {
  $("#numberCol").click(function () {
    sortTable();
    document.getElementById("dateCol").textContent = "Date";
    document.getElementById("stringCol").textContent = "String";
  });

  let dateAsc = true;

  function sortTable() {
    let tbl = document.getElementById("table_data").tBodies[0];
    let store = [];
    for (let i = 0, len = tbl.rows.length; i < len; i++) {
      let row = tbl.rows[i];
      let rowNumberData = [];
      rowNumberData.push(row.cells[1].textContent);
      let rowNumberTimeStamp = new Date(
        parseInt(rowNumberData[0], 10)
      ).getTime();
      if (!isNaN(rowNumberTimeStamp)) store.push([rowNumberTimeStamp, row]);
    }

    if (dateAsc) {
      store.sort(function (x, y) {
        return x[0] - y[0];
      });
      document.getElementById("numberCol").textContent = "Number ↑";
      dateAsc = false;
    } else {
      store.sort(function (x, y) {
        return y[0] - x[0];
      });
      document.getElementById("numberCol").textContent = "Number ↓";
      dateAsc = true;
    }

    for (let i = 0, len = store.length; i < len; i++) {
      tbl.appendChild(store[i][1]);
    }
    store = null;
  }
});

$(document).ready(function () {
  $("#stringCol").click(function () {
    sortTable();
    document.getElementById("dateCol").textContent = "Date";
    document.getElementById("numberCol").textContent = "Number";
  });

  let dateAsc = true;

  function sortTable() {
    let tbl = document.getElementById("table_data").tBodies[0];
    let store = [];
    for (let i = 0, len = tbl.rows.length; i < len; i++) {
      let row = tbl.rows[i];
      let rowStringData = [];
      rowStringData.push(...[row.cells[2].textContent]);
      store.push([rowStringData, row]);
    }

    if (dateAsc) {
      store.sort();
      document.getElementById("stringCol").textContent = "String ↑";
      dateAsc = false;
    } else {
      store.sort().reverse();
      document.getElementById("stringCol").textContent = "String ↓";
      dateAsc = true;
    }

    for (let i = 0, len = store.length; i < len; i++) {
      tbl.appendChild(store[i][1]);
    }
    store = null;
  }
});
