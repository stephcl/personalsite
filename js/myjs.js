  $(".accordion dd").on("click", "a:eq(0)", function (event)
      {
        var dd_parent = $(this).parent();

        if(dd_parent.hasClass('active'))
          $(".accordion dd div.content:visible").slideToggle("normal");
        else
        {
          $(".accordion dd div.content:visible").slideToggle("normal");
          $(this).parent().find(".content").slideToggle("normal");
        }
      });          

  //work on some code to get the stick nav and make accordion labels go away when clicked