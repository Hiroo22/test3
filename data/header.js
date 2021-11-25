
function header(){
var html = "";
html += '<h1><a href = "./index.html" style = "font-style: italic; text-decoration: none;color:white;">TEST  </a>';
html += '<a href = "https://scratch.mit.edu/" style = "font-style: italic; text-decoration: none;color:white;"target = "_blank"rel = "nonopener noreferrer">Scratch</a></h1>';
html += '<ul class="gnav">';
      html +=  '<li>';
      //火曜日
        html +='<a href="">Tues</a>';
          html += '<ul>';
html += "<li><a href = \"test.html\">test</a></li>";
html += "<li>test23</li>";
html += "<li>test23</li>";
html += "<li>test23</li>";
        html += '</ul>';
    //水曜日
    html += '<li><a href="">Wed</a>';
        html += '<ul>';
html += "<li>test23</li>";html += "<li>test23</li>";
        html += '</ul></li>';
    //木曜日
    html += '<li><a href="">Thurs</a>';
        html += '<ul>';
html += "<li>test23</li>";html += "<li>test23</li>";
        html += '</ul>';
html += '</li>';
    //金曜日
    html += '<li><a href="">Fri</a>';
        html += '<ul>';
        html += '</ul></li>';
    //土曜日
    html += '<li><a href="">Sat</a>';
        html += '<ul>';
html += "<li>test23</li>";html += "<li>test23</li>";html += "<li>test23</li>";
        html += '</ul>';
      html += '</li>';
      //Other
      html += '<li><a href="">Other</a>';
          html += '<ul>';
html += "<li>test23</li>";html += "<li>test23</li>";html += "<li>test23</li>";
          html += '</ul>';
        html += '</li>';
html += '</ul>';
document.write(html);
}
