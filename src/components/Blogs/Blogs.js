import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs container'>
            <div className='blog shadow p-3 m-5'>
                <h3 className='text-secondary text-center'>What is Context API and It's Purpose</h3>
                <p className='lead'>Context API is an API provided to us by React, which lets us share data across various components without having to deal with prop drilling. Sometimes we have to share some data within different levels of components. Sending data in multiple levels via props is time-killing and lengthy procedure. And this is where Context API comes in. With the help of it we can send information to various components without using props. The Context Provider makes the data available to all the components inside it.</p>
            </div>
            <div className='blog shadow p-3 m-5'>
                <h3 className='text-secondary text-center'>What is Semantic Tag</h3>
                <p className='lead'>Semantic tags are simple HTML tags but they describe themselves very clearly to both the browser and the developer. When we see a semantic tag we know its purpose. But a non-semantic tag doesn't describe itself. For example, think of a Div. We can't guess its content and what it does by just seeing its name. On the other hand, an Article tag clearly defines itself. There are many semantic tags like header, footer, details, and nav.</p>
            </div>
            <div className='blog shadow p-3 m-5'>
                <h3 className='text-secondary text-center'>Difference between Inline, Block and Inline-Block elements</h3>
                <p className='lead'>Block elements take full width and don't allow anything beside them. On the other hand, inline elements allow other elements beside them. We can't set the height and width of inline elements. Also, inline elements don't start on a new line like block elements. Inline-block elements are a mixture of block and inline elements. We can set the height and width of inline-block elements and also they allow other elements to their left and right. Unlike inline elements, the top and bottom margins work on inline-block elements.</p>
            </div>
        </div>
    );
};

export default Blogs;