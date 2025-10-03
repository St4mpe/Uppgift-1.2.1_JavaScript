document.addEventListener("DOMContentLoaded", function(){
    const theme_switch=document.getElementById("theme_switch");
    const bg_theme=document.getElementById("bg_theme");
    const title_clr=document.getElementById("title_clr");
    const inledning=document.getElementById("inled");
    const miss=document.getElementsByClassName("miss");
    const header=document.getElementsByClassName("header");
    const punktlst=document.getElementById("punktlst");

    theme_switch.addEventListener('click', function(){
        if (theme_switch.classList.contains("dark"))
        {
            title_clr.classList.remove("title_for_dark");
            title_clr.classList.add("title_for_light");
            theme_switch.classList.remove("dark");
            theme_switch.innerHTML="Switch to Dark-mode";
            theme_switch.classList.add("light")
            bg_theme.classList.remove("clr_for_bg_dark");
            bg_theme.classList.add("clr_for_bg_light");
            inledning.classList.remove("inledning_for_dark");
            inledning.classList.add("inledning_for_light");
            punktlst.classList.remove("punktLista_for_dark");
            punktlst.classList.add("punktLista_for_light");
            for(vdo=0;vdo<miss.length;vdo++){
                miss[vdo].classList.remove("mistakes_for_dark");
                miss[vdo].classList.add("mistakes_for_light");
            }
            for(vdo=0;vdo<header.length;vdo++){
                header[vdo].classList.remove("header_for_dark");
                header[vdo].classList.add("header_for_light");
            }
        }
        else if(theme_switch.classList.contains("light"))
        {
            title_clr.classList.remove("title_for_light");
            title_clr.classList.add("title_for_dark");
            theme_switch.classList.remove("light");
            theme_switch.classList.add("dark")
            theme_switch.innerHTML="Switch to Light-mode";
            bg_theme.classList.remove("clr_for_bg_light");
            bg_theme.classList.add("clr_for_bg_dark");
            inledning.classList.remove("inledning_for_light");
            inledning.classList.add("inledning_for_dark");
            punktlst.classList.remove("punktLista_for_light");
            punktlst.classList.add("punktLista_for_dark");
            for(vdo=0;vdo<miss.length;vdo++){
                miss[vdo].classList.remove("mistakes_for_light");
                miss[vdo].classList.add("mistakes_for_dark");
            }
            for(vdo=0;vdo<header.length;vdo++){
                header[vdo].classList.remove("header_for_light");
                header[vdo].classList.add("header_for_dark");
            }
            
        }
    })
})