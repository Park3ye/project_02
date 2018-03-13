//jQuery start---
(function($) {

var baseUrl = './src/';


var myHtml = [
              {make:'headBox',    load:'all/headBox.html'},
              {make:'bannerBox',  load:'main/bannerBox.html'},
              {make:'mainConTent_01',  load:'main/mainConTent_01.html'},
              {make:'mainConTent_02',  load:'main/mainConTent_02.html'},
              {make:'mainConTent_03',  load:'main/mainConTent_03.html'},
              {make:'mainConTent_04',  load:'main/mainConTent_04.html'},
              {make:'mainConTent_05',  load:'main/mainConTent_05.html'},
              {make:'asideBox',  load:'all/asideBox.html'},
              {make:'footBox',    load:'all/footBox.html'}
              ]

for(var i = 0; i < myHtml.length; i++){
 // console.log(' ');
  ImportFile(myHtml[i].make, baseUrl + myHtml[i].load);
}

}) (this.jQuery);

//jQuery end---