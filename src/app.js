const axios = require('axios');

exports.handler = async (event) => {
    console.log("Event received:", JSON.stringify(event, null, 2));

    try {
        // Fetch a sample post from a public API
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        const post = response.data;

        const apiResponse = {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: "Successfully fetched data!",
                postTitle: post.title,
                postId: post.id
            }),
        };
        return apiResponse;

    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "Failed to fetch data.",
                error: error.message,
            }),
        };
    }
};