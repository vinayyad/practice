const columnDefs = [
    { headerName:"s.no",field: "sno",sortable:true,cellRenderer:params=>{return(params.data.sno+".")} },
    { headerName:"Name",field: "name",cellRenderer:params=>{return(params.data.name+"@")}},
    { headerName:"contect",field: "cont" },
    { headerName:"fees",field: "fee" , sortable: true,filter:true,valueGetter:params=>{return(params.data.fee+"$")}}
  ];
  const rowData = [
    { sno: "1",name: "modi", cont:"8839139875 ",fee:"2000"},
    { sno: "2", name: "chotu",cont:"9144752206" ,fee:"3000"},
    { sno: "3", name: "matuk", cont:"846584365985" ,fee:"1000"},
    { sno: "8", name: "matuk", cont:"846584365985" ,fee:"1000"},
    { sno: "7", name: "matuk", cont:"846584365985" ,fee:"1000"},
    { sno: "6", name: "matuk", cont:"846584365985" ,fee:"1000"},
    { sno: "5", name: "matuk", cont:"846584365985" ,fee:"1000"},
    { sno: "4", name: "matuk", cont:"846584365985" ,fee:"1000"}
  ];
  const gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData
  };
      const gridDiv = document.querySelector('#myGrid');
      new agGrid.Grid(gridDiv, gridOptions);
  