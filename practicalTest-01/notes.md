// Não sabia dessa
const [select, options] = transportSelect.options[transportSelect.selectedIndex].value === "airplane" ?
[transportSelect, airplaneOptions] : [typeSelect, busOptions];
