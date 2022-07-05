$("button").on("click", function () {
  const processorEl = $(this).closest(".processor");
  const processorId = processorEl.attr("id");
  console.log(processorId);
  const computerEl = $(this).closest(".computer");
  computerId = computerEl.attr("data-id");
  console.log(computerId);
  const BusEl = computerEl.find(".BUS").text();
  console.log(BusEl);
});
