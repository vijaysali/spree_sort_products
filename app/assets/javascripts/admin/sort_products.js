var saveOrder;

saveOrder = function() {
  var data;
  data = $("#products li").map(function() {
    return $(this).children().attr("value");
  }).get();
  $("input[name=product_positions]").val(data.join(","));
  return $("#save_order").html('<button class="button btn-primary"><i class="icon-ok icon-white"></i> <%= I18n.t(:save_sorted_order) %></button>');
};

$("#products, #list2").dragsort({
  dragSelector: "div",
  dragBetween: true,
  dragEnd: saveOrder,
  placeHolderTemplate: "<li class='placeHolder'><div></div></li>"
});