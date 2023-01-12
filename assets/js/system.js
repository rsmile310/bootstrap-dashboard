$(document).ready(function () {
  $.getJSON("assets/json/ipsTblData.json", function (data) {
    $("#ipsTbl").DataTable({
      data: data,
      columns: [
        { data: "cdnNodes" },
        { data: "bandwidth" },
        { data: "ip" },
        { data: "rotate" },
        { data: "ptMeo" },
        { data: "ptNos" },
        { data: "ukSky" },
        { data: "mtGo1" },
        { data: "mtGo2" },
        { data: "mtGo3" },
      ],
      aaSorting: [],
      responsive: true,
      order: true,
      order: [[0, "asc"]],
      info: false,
      lengthChange: false,
      searching: false,
      destroy: true,
      language: {
        paginate: {
          next: '<span class="iconify" data-icon="bi:chevron-right"></span>',
          previous: '<span class="iconify" data-icon="bi:chevron-left"></span>',
        },
      },
      columnDefs: [
        {
          responsivePriority: 1,
          targets: 0,
        },
        {
          responsivePriority: 2,
          targets: -1,
        },
      ],
    });
  });
  $.getJSON("assets/json/serverTblData.json", function (data) {
    $("#serverTbl").DataTable({
      data: data,
      columns: [
        { data: "num" },
        { data: "ip" },
        { data: "ptMeo" },
        { data: "ptNos" },
        { data: "ukSky" },
        { data: "mtGo1" },
        { data: "mtGo2" },
        { data: "mtGo3" },
      ],
      aaSorting: [],
      responsive: true,
      order: true,
      order: [[0, "asc"]],
      info: false,
      lengthChange: false,
      searching: false,
      destroy: true,
      language: {
        paginate: {
          next: '<span class="iconify" data-icon="bi:chevron-right"></span>',
          previous: '<span class="iconify" data-icon="bi:chevron-left"></span>',
        },
      },
      columnDefs: [
        {
          responsivePriority: 1,
          targets: 0,
        },
        {
          responsivePriority: 2,
          targets: -1,
        },
      ],
    });
  });
});
