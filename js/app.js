



document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".item");
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filterValue = button.getAttribute("data-filter");
  
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
  
        galleryItems.forEach((item) => {
          if (filterValue === "all" || item.classList.contains(filterValue)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  });
  

$(document).ready(function(){
  $(".testimonial .indicators li").click(function(){
    var i = $(this).index();
    var targetElement = $(".testimonial .tabs li");
    targetElement.eq(i).addClass('active');
    targetElement.not(targetElement[i]).removeClass('active');
            });
            $(".testimonial .tabs li").click(function(){
                var targetElement = $(".testimonial .tabs li");
                targetElement.addClass('active');
                targetElement.not($(this)).removeClass('active');
            });
        });
$(document).ready(function(){
    $(".slider .swiper-pagination span").each(function(i){
        $(this).text(i+1).prepend("0");
    });
});