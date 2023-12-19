$("button").click(function() {
  let question = $(".speech").val();
  $(".speech-bubble").text(question);
    console.log(question);
});