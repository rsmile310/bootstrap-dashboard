$(document).ready(function () {
  $.getJSON("assets/json/dashLeftTblData.json", function (data) {
    $("#dashLeftTbl").DataTable({
      data: data,
      columns: [
        { data: "radio" },
        { data: "ip" },
        { data: "type" },
        { data: "days" },
        { data: "location" },
        { data: "releasedBy" },
        { data: "blockedHistory" },
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

  $.getJSON("assets/json/dashRightTblData.json", function (data) {
    $("#dashRightTbl").DataTable({
      data: data,
      columns: [
        { data: "radio" },
        { data: "domain" },
        { data: "selectIsp" },
        { data: "node" },
        { data: "type" },
        { data: "trafficBy" },
        { data: "action" },
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
