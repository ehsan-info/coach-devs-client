import React from 'react';

const Blog = () => {
    return (
        <div>
            <h4 className='text-primary'>what is cors?</h4>
            <p className='text-muted'>A browser feature called cross-origin resource sharing (CORS) permits managed access to resources that are outside of a certain domain. It expands and gives the same-origin policy(SOP) more flexibility.</p>
            <h4 className='text-primary'>Why are you using firebase? What other options do you have to implement authentication?</h4>
            <p className='text-muted'>Building comprehensive backend code for dynamic apps may be time-consuming and technically complex. Firebase provides a less technical alternative.</p>
            <p className='text-muted'>If you eventually want to host and manage our app in the cloud, We might also want to think about using this tool. Firebase eliminates the need to be concerned about the specifics of setting up a cloud server because it is serverless.</p>
            <p>We can also use other Google features and products, including Google Drive and Sheets, because it is a Google Cloud service. We might, for instance, import fictitious data from Google Sheets and use it to serve our app momentarily.</p>
            <p>Besides this we can also use Okta which is hugely popular now and some others are MongoDB, Keycloak etc</p>
            <h4 className='text-primary'>How does the private route work?</h4>
            <p className='text-muted'>The only differences between the private route component and the public route are the redirect URL and the authenticate condition.</p>
            <p className='text-muted'>The user can only access the authenticated routes if he is authenticated, else he will be sent to the login page (Logged in).</p>
            <h4 className='text-primary'>What is Node? How does Node work?</h4>
            <p className='text-muted'>An open-source backend runtime environment for javascript is node.js. It serves as a backend service for applications that use javascript on the server. Javascript is utilized in this fashion for both the front end and the back end. Node.js is extremely scalable, light, quick, and data-intensive. It uses the Chrome v8 engine, which turns javascript code into machine code.</p>
        </div>
    );
};

export default Blog;