const txt_box=document.getElementById("txt_box");
const bg_theme=document.getElementById("bg_theme");

document.addEventListener("DOMContentLoaded", function(){
    txt_box.addEventListener('click', function(){
        if (txt_box.classList == "text_for_dark")
        {
            txt_box.classList.remove("text_for_dark");
            txt_box.classList.add("text_for_light");
            txt_box.innerHTML = "Switch to dark-mode"
            bg_theme.classList.add("clr_for_bg_light");
            bg_theme.classList.remove("clr_for_bg_dark");
        }
        else if(txt_box.classList == "text_for_light")
        {
            txt_box.classList.add("text_for_dark");
            txt_box.classList.remove("text_for_light");
            txt_box.innerHTML = "Switch to light-mode"
            bg_theme.classList.remove("clr_for_bg_light");
            bg_theme.classList.add("clr_for_bg_dark");
        }
    })
})