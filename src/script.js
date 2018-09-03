function clickable(){
  var classname = document.getElementsByClassName("item");
  var myFunction = function() {
      var attribute = this.getAttribute("data-myattribute");
      //alert(attribute);
      document.getElementById("my-modal").getElementsByTagName("img")[0].src=attribute;
      document.getElementById("my-modal").classList.add("show-it");      
  };
  // for (var i = 0; i < classname.length; i++) {
  //     classname[i].addEventListener('click', myFunction, false);
  // }
  Array.from(classname).forEach(function(element) {
    element.addEventListener("click", myFunction);
  });
  document.getElementById("close").addEventListener("click", closeModal);
  function closeModal(){
    document.getElementById("my-modal").classList.remove("show-it");
  }
  document.getElementById("mobile-menu").addEventListener("click", openMenu);
  function openMenu(){
    document.getElementsByClassName('m-menu')[0].classList.add("open");
  }

}
// setTimeout(function(){ clickable(); }, 1000);
setInterval(function(){ clickable(); }, 1000);

// var linkItem = document.getElementsByClassName("linkto");
//   Array.from(linkItem).forEach(function(el) {
//     el.addEventListener("click", setTimeout(function(){ clickable(); }, 1000));
//   });


// document.getElementById("breadcrumbs").addEventListener("click", clickable);
