let n = 0;
let posts = [
  {
    text: "First post!",
    id: "p1",
    comments: [
      { id: "c1", text: "First comment on first post!" },
      { id: "c2", text: "Second comment on first post!!" },
      { id: "c3", text: "Third comment on first post!!!" },
    ],
  },
  {
    text: "Aw man, I wanted to be first",
    id: "p2",
    comments: [
      { id: "c4", text: "Don't wory second poster, you'll be first one day." },
      { id: "c5", text: "Yeah, believe in yourself!" },
      { id: "c6", text: "Haha second place what a joke." },
    ],
  },
];
let postIdCounter;
let commentIdCounter;
postObject = [
  {
    text: "",
    id: 0,
    comennt: [{}],
  },
];
const getPosts = function () {
  return posts;
};

const addPost = function (post) {
  let i = "p";

  let id = i + n;
  postObject.text = post;
  postObject["id"] = id;

  posts.push(postObject);
  n = n + 1;
  postIdCounter = postIdCounter + 1;
  //console.log(getPosts());
};

addPost("This is my own post!");

const removePost = function (idPost) {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id == idPost) {
      posts.splice(i, 1);
    }
  }
  console.log(getPosts());
};
//removePost("p1");
//console.log(getPosts());

const addComment = function (comment, idPost) {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id == idPost) {
      let countOfcomment =
        parseInt(
          posts[i].comments[posts[i].comments.length - 1].id.slice(1, 2)
        ) + 1;
      idForNewPost = "c" + countOfcomment;
      posts[i].comments.push({ id: idForNewPost, text: comment });
    }
  }
};
addComment("Damn straight it is!", "p2");
const removeComment = function (idPost, idComment) {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id == idPost) {
      for (let j = 0; j < posts[i].comments.length; j++) {
        if (posts[i].comments[j].id == idComment) {
          posts[i].comments.splice(j, 1);
        }
      }
    }
  }
};
console.log(getPosts());
