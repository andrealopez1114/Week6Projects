$(document).ready(function() {

  $(".comment-form form").submit(function(e) {
    e.preventDefault();
    addComment();
  });

  $(document).on("click", ".edit-button", function() {
    var commentBody = $(this).parent().siblings("p");
    var commentText = commentBody.text();
    var editForm = '<form class="edit-form"><textarea>' + commentText + '</textarea><button type="submit">Save</button></form>';
    commentBody.replaceWith(editForm);
  });

  $(document).on("submit", ".edit-form", function(e) {
    e.preventDefault();
    var editedComment = $(this).find("textarea").val();
    var commentBody = '<p>' + editedComment + '</p>';
    $(this).replaceWith(commentBody);
  });

  $(document).on("click", ".delete-button", function() {
    $(this).closest(".comment").remove();
    
    if($(".comment").length == 0) {
      $(".comments-container img").hide();
    }
  });

  function addComment() {
    var displayName = $(".comment-form input").val();
    var comment = $(".comment-form textarea").val();
    if(displayName && comment) {
      $(".comments-container").append('<div class="comment"><img src="Photos/avatar.png" alt="avatar"><div class="comment-body"><h3>' + displayName + '</h3><p>' + comment + '</p><div class="comment-buttons"><button class="edit-button">Edit</button><button class="delete-button">Delete</button></div></div></div>');
      $(".comment-form input").val("");
      $(".comment-form textarea").val("");
    }
  }
});
