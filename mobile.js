function openMenu(){
  document.getElementById("mobileMenu").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMenu(){
  document.getElementById("mobileMenu").classList.remove("active");
  document.body.style.overflow = "auto";
}

function goToSection(id){
  closeMenu();
  setTimeout(function(){
    document.getElementById(id).scrollIntoView({
      behavior:"smooth",
      block:"start"
    });
  },250);
}
