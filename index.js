console.log("linked");

var button = $("button");
var container = $(".container");

button.on("click", save);

function save(event){
  var src = event.target.parentNode.children[0].children[0].src;
  console.log(src);
  var image = "<img src = \"" + src + "\">";
  console.log(src);
  container.append(image);
}
