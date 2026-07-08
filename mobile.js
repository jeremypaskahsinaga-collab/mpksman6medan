function openMenu(){
  document.getElementById("mobileMenu").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMenu(){
  document.getElementById("mobileMenu").classList.remove("active");
  document.body.style.overflow = "auto";
}

function goToSection(id){
  const target = document.getElementById(id);

  closeMenu();

  if(target){
    setTimeout(() => {
      const navbarHeight = 80;
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }, 300);
  }
}
