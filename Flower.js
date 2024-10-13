onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  function start () { 
    let splash = document.getElementById("splash");
  
    splash.addEventListener("transitionend", () => {
      document.getElementById("bgm").play();
      splash.remove();
    });
 
    splash.classList.add("hide");
  }