$(document).ready(function () {
  console.log("Rehan Nagoor Mohideen  1100592");

  //get button handler sends a GET request
  $("#get-btn").click(function () {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "/request",
      success: function (result) {
        $("#title").html(result.requestType);
        $("#mainText").html(JSON.stringify(result));
        console.log(result);
      },
    });
  });

  //post button handler sends a POST request
  $("#post-btn").click(function () {
    $.ajax({
      type: "POST",
      dataType: "json",
      data: JSON.stringify({
        message:
          "This is a POST request<br />Used to send data to a server to create/update a resource<br /><br />This is a message sent from the client browser to the server and sent back to the client to display",
      }),
      contentType: "application/json; charset=utf-8",
      url: "/request",
      success: function (result) {
        $("#title").html(result.requestType);
        $("#mainText").html(JSON.stringify(result));
        console.log(result);
      },
    });
  });

  //put button handler sends a PUT request
  $("#put-btn").click(function () {
    $.ajax({
      type: "PUT",
      dataType: "json",
      data: JSON.stringify({
        message:
          "This is a PUT request<br />Used to send data to a server to create/update a resource by completely replacing the file/data that exists in the entity body<br /><br />This is a message sent from the client browser to the server and sent back to the client to display",
      }),
      contentType: "application/json; charset=utf-8",
      url: "/request",
      success: function (result) {
        $("#title").html(result.requestType);
        $("#mainText").html(JSON.stringify(result));
        console.log(result);
      },
    });
  });

  //delete button handler sends a DELETE request
  $("#delete-btn").click(function () {
    $.ajax({
      type: "DELETE",
      url: "/request",
      success: function (result) {
        $("#title").html(result.requestType);
        $("#mainText").html(JSON.stringify(result));
        console.log(result);
      },
    });
  });

  //delete button handler sends a DELETE request and actually deletes something
  $("#delete-btn2").click(function () {
    $.ajax({
      type: "DELETE",
      url: "/request",
      success: function (result) {
        $("#title").html(result.requestType);
        $("#mainText").empty();
        console.log(result);
      },
    });
  });

  //selecting by class
  //   $(".btn-dark").click(function () {
  //     console.log("The dark button was clicked.");
  //   });
});
