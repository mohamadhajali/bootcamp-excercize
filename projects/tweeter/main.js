let rand = new rander();
let tweeter = new tweeterModule();
rand.renderPost(tweeter.getPosts());

savePost = function () {
  let text = document.getElementById("TwitInput").value;
  tweeter.addPost(text);
  rand.renderPost(tweeter.getPosts());
};

$(".addComment").on("click", function () {
  let doc = $(this).closest(".comments");

  let po = doc.find(".com");
  const posts = tweeter.getPosts();
  const comm = $("#commentInput").val();

  console.log(comm);

  for (let post of posts) {
    if (post.text == po.text()) {
      console.log(post.id);
      tweeter.addComment(comm, post.id);

      rand.renderPost(tweeter.getPosts());
    }
  }
});
