let book = {
    title: "",
    auther: ""
}
let library = {
    book
}
book['title'] = "java";
book['auther']= "ali";
console.log(library.book.title,library.book.auther)



////////////////////////////////////////////////////////////////////////
const posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]

 // console.log(posts[1].comments[2])

for(var i = 0 ; i<posts.length;i++){
    if(posts[i].id==2){
            
        for(var j =0 ; j<posts[i].comments.length ; j++){
                if(posts[i].comments[j].id==3){
                    console.log(posts[i].comments[j])
                    
                }
            }
       

      
    }
}
////////////////////////////////////////////////////////////////////////////
const sant = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]

  for(let i =0 ; i<sant.length ; i++){
        if(sant[i].id==2){
            sant[i] = sant[i+1]
            sant.pop();
        }
  }
  console.log(sant)

  //////////////////////////////////////////////////////////////////////////////////////////
  const dictionary = [
    {"A": ["Aardvark", "Abacus", "Actually", "Atomic"]},
    {"B": ["Banana", "Bonkers", "Brain", "Bump"]},
   {"C": ["Callous", "Chain", "Coil", "Czech"]}
  ]
  for(let i = 0 ; i< dictionary.length ; i++){
    if(dictionary[i].A){
        console.log("Words that begin with A: " )
        for(let j =0 ;j<dictionary[i].A.length;j++){
            console.log(dictionary[i].A[j]);

        }
    }
        if(dictionary[i].B){
            console.log("Words that begin with B: " )
            for(let j =0 ;j<dictionary[i].B.length;j++){
                console.log(dictionary[i].B[j]);
    
            }
        }
            if(dictionary[i].C){
                console.log("Words that begin with C: " )
                for(let j =0 ;j<dictionary[i].C.length;j++){
                    console.log(dictionary[i].C[j]);
        
                }
            }
        
    
}

    
  
     

