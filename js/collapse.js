function Collapsible(idCollapsible){
    let currentCollapsible = null;
    const collapsible = document.querySelector(idCollapsible);
    const collapseButtons = collapsible.querySelectorAll(".collapse__button");
 
    function cleanCurrentCollapsible() {
        collapseButtons.forEach((currentCollapsible,index,array)=>{
            currentCollapsible.parentElement.nextElementSibling.classList.remove("collapse__content_visible");
            currentCollapsible.querySelector(".collapse__icon").classList.remove("collapse__icon_active");
            currentCollapsible.classList.remove("collapse__link_active");
        });
    }
    
    collapseButtons.forEach((value,index,array)=>{
        value.addEventListener("click",(evt) =>{ 
            evt.preventDefault();
            cleanCurrentCollapsible();
            if((evt.target !== currentCollapsible) || (!evt.target.classList.contains("collapse__link_active"))){
                evt.target.parentElement.nextElementSibling.classList.add("collapse__content_visible");
                evt.target.querySelector(".collapse__icon").classList.add("collapse__icon_active");
                evt.target.classList.add("collapse__content_visible");
                currentCollapsible = evt.target;
            }
        });
    });
}