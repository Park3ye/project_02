//jQuery start---
(function($) {

var baseUrl = './src/';


var myHtml = [
              {make:'headBox',    load:'all/headBox.html'},
              {make:'page_09_a_back',    load:'main/page_09_a_back.html'},
              {make:'page_09_b_back',    load:'main/page_09_b_back.html'},
              {make:'asideBox',  load:'all/asideBox.html'},
              {make:'footBox',    load:'all/footBox.html'}
              ]

for(var i = 0; i < myHtml.length; i++){
 // console.log(' ');
  ImportFile(myHtml[i].make, baseUrl + myHtml[i].load);
}

}) (this.jQuery);

//jQuery end---