/*
Full Name: Detroja Bhavya H.
Student ID: 100898589
Date Completed: 17/03/24
*/



document.addEventListener('DOMContentLoaded', function() {
    const blogPostsContainer = document.getElementById('blog-posts');
    const PIXABAY_API_KEY = '42929715-a70306f3a674451d0d27e2f2c'; 

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(posts => {
          
            const numberOfPostsToDisplay = Math.min(posts.length, 500);

            // Array to hold all the image fetch promises
            const imageFetchPromises = [];

            // Iterate over the fetched posts
            for (let i = 0; i < numberOfPostsToDisplay; i++) {
                const post = posts[i];

                // Fetch image from Pixabay API and push the promise to the array
                const imageFetchPromise = fetch(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(post.title)}&image_type=photo&per_page=20&min_width=20&min_height=10`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Pixabay API request failed');
                        }
                        return response.json();
                    })
                    .then(data => {
                        if (data.hits.length > 0) {
                            // Create Bootstrap card element
                            const card = document.createElement('div');
                            card.classList.add('card', 'm-2'); 
                    
                            // Create card body
                            const cardBody = document.createElement('div');
                            cardBody.classList.add('card-body');
                    
                            // Create card title
                            const title = document.createElement('h5');
                            title.classList.add('card-title');
                            title.textContent = post.title;
                    
                            // Create image element for Pixabay image
                            const image = document.createElement('img');
                            image.classList.add('card-img-top');
                            image.src = data.hits[0].webformatURL;
                            image.alt = post.title;
                    
                            // Create card text (post content)
                            const content = document.createElement('p');
                            content.classList.add('card-text');
                            content.textContent = post.body;
                    
                            // Append title, image, and content to card body
                            cardBody.appendChild(title);
                            cardBody.appendChild(image);
                            cardBody.appendChild(content);
                    
                            // Append card body to card
                            card.appendChild(cardBody);
                    
                            // Append card to blogPostsContainer
                            blogPostsContainer.appendChild(card);
                        } else {
                            console.warn('No image found for post:', post.title);
                      
                        }
                    })
                    .catch(error => {
                        console.error('Error fetching image:', error);
                    });

                // Push the promise to the array
                imageFetchPromises.push(imageFetchPromise);
            }

            // Wait for all the image fetch promises to resolve
            return Promise.all(imageFetchPromises);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
