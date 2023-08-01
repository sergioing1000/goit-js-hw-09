const listItems = document.querySelectorAll("ul li");


listItems.forEach((item, index) => {
  item.style.backgroundColor = `rgb(${index * 50}, ${index * 50}, ${index * 50})`;
  item.style.color = "white";
  item.style.padding = "10px";
  item.style.borderRadius = "5px";
  item.style.textDecoration = 'none';

  item.style.paddingLeft = '50px';
  item.style.paddingRight = '50px';
  item.style.width = '400px';
  item.style.margin = '0 auto';

});