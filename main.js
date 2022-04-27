const baseURL = "https://jsonplaceholder.typicode.com";


const enpoints = { posts: "/posts"}; 


const getAllPost = () => {
    fetch( `${baseURL}${enpoints.posts}`,{
        method: 'GET'
    }).then((response) =>{
        return response.json();
    }).then(data => {
        console.log(data);
    });
}

getAllPost();


const post = { 
    user: 10,
    title: "hello",
    body: "body"
}


const createPost = (post) => {
    fetch(`${baseURL}${enpoints.posts}`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'appLication/json'
        }
    }).then((response) => {
        return response.json();
    }).then(data => {
        console.log(data);
    })
}


createPost(post);