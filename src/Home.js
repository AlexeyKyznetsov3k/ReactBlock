import { useState } from "react";
import BlogList from "./BlogList";

function Home() {

    const blog = [
        {
            title: "My First Blog",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga nisi cum earum odio assumenda provident laborum quisquam ipsum, eaque accusantium maiores incidunt atque porro dicta dolores ad soluta modi?",
            author: "John Doe",
            id: 1
        },
        {
            title: "Second Post",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga nisi cum earum odio assumenda provident laborum quisquam ipsum, eaque accusantium maiores incidunt atque porro dicta dolores ad soluta modi?",
            author: "Mary Jane",
            id: 2
        },
        {
            title: "Third Post",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga nisi cum earum odio assumenda provident laborum quisquam ipsum, eaque accusantium maiores incidunt atque porro dicta dolores ad soluta modi?",
            author: "Tom Soyer",
            id: 3
        }
    ]

    useState()

    const handleDelete = (id)=>{
        console.log('Delete');
    }

    return ( 
        <div className="home">
           <BlogList blog = {blog} handleDelete={handleDelete} />
        </div>
        
    );
}

export default Home;