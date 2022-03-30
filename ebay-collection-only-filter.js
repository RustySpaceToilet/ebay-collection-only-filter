// ==UserScript==
// @name       Ebay Collection only filter v2
// @namespace  CollectionOnlyFilter
// @version    0.6
// @description  Hides all collection only listings. tested on Firefox 58 & Chrome 63
// @include      https://www.ebay.co.uk/*
// ==/UserScript==

//span.s-item__localDelivery



var search_items = ["span.ship" , "span.s-item__localDelivery" , "span.s-item__deliveryOptions" , "span.s-item__localDelivery" ];

for (z = 0; z < search_items.length; z++) 
{ 
  //alert("valid "+z + "  " +search_items[z]);
  var elements = document.body.querySelectorAll(search_items[z]); 

  for (var i = 0; i < elements.length; i++) 
  {
    if(elements[i].innerHTML.search(/Collection only: Free|Free collection in person|Collection in person/) != -1)
    {
      //elements[i].parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none";
      elements[i].parentElement.parentElement.parentElement.style.display = "none";
      elements[i].parentElement.parentElement.parentElement.parentElement.parentElement.remove ();
    }
  }
}

