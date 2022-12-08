  // let width = screen.availWidth;
  //   console.log(width);


  /*function click (){
    document.getElementById("button").addEventListener("click", function() {
      $("body").css("background-color", "black");
    });
  }*/

  /*$(".nine").click(function() {
    $(this).toggleClass("ninetrans");
  });*/
  let check = $("#toggle_button").is(':checked');
  let button = $("#toggle_button");
  let bodyclick = $("body");

  function Delete() {
    $(".nine").removeClass("ninetrans");
    $(".bar1").removeClass("bar1trans");
    $(".bar2").removeClass("bar2trans");
    $(".bar3").removeClass("bar3trans");
  }
  button.click(function() {
    $(".nine").addClass((this.checked) ? "ninetrans" : Delete());
    $(".bar1").addClass((this.checked) ? "bar1trans" : Delete());
    $(".bar2").addClass((this.checked) ? "bar2trans" : Delete());
    $(".bar3").addClass((this.checked) ? "bar3trans" : Delete());
    console.log("hello");
  });

  // let color_Button = $("#purpel");
  // let beige_button = $("#beige");
  // function color(){
  //   $(".paraServic").css("color","black");
  // }
  // color_Button.click(function(){
  //   $("h5").css("color", (this.click)? "#8b8fe6":  color());
  //   $(".serIcon").css("color", (this.click)? "#8991ff":  "#8991ff");
  //   $(".services").css("color", (this.click)? "#1c29d44a": "#1c29d44a");
  // });
  // beige_button.click(function(){
  //   $("h5").css("color", (this.click)? "black":"black");
  //   $(".serIcon").css("color", (this.click)? "#6cc9bf":  "#6cc9bf");
  //   $(".services").css("color", (this.click)? "#F5EDDC": "#F5EDDC");
  // });

  // window.addEventListener("resize", function(){
  //   let width = $("body").css("width");
  //    width = (width.slice(0, (width.length-2)));
  //    console.log(width);
  // });

  $(function(){
      $(document).scroll(function(){
          if($(this).scrollTop() >= $('#content').offset().top - 50) {
              $("#content").css("background","red");
          } else {
              $("#content").css("background","orange");
          }
      });
  });

  window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    // console.log(Math.trunc(scroll));
    scroll = Math.trunc(scroll);

    if (scroll > 1490) {
      $(".portcol").css("animation","cardtrans 1s cubic-bezier(0, 0.37, 0.74, 0.76) 0.2s 1 normal forwards");
      console.log("great");

    }

});






  // function transition() {
  //
  //
  // }
