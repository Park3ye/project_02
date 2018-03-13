//jQuery start---
(function($) {

var baseUrl = './src/';


var myHtml = [
              {make:'headBox',    load:'all/headBox.html'},
              {make:'page_06_a',  load:'main/page_06_a.html'},
              {make:'page_06_sns',load:'main/page_06_sns.html'},
              {make:'asideBox',   load:'all/asideBox.html'},
              {make:'footBox',    load:'all/footBox.html'}
              ]

for(var i = 0; i < myHtml.length; i++){
 // console.log(' ');
  ImportFile(myHtml[i].make, baseUrl + myHtml[i].load);
}

}) (this.jQuery);

//jQuery end---