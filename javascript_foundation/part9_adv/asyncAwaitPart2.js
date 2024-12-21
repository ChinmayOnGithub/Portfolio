function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("PostData fetched successfully.");
        }, 2000);
    });
}

function fetchCommentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("commentData fetched successfully...");
        }, 3000);
    });
}

async function getBlogData() {
    try {
        console.log("Fetching blog data...");
        // const postData = await fetchPostData();
        // const commentData = await fetchCommentData();

        // using Promise.all for more than 1 function
        // works same way (takes same time)
        const [postData, commentData] = await Promise.all([
            fetchPostData(),
            fetchCommentData()
        ]);
        console.log(postData);
        console.log(commentData);

        console.log("Blog data fetched ^_^!");



    } catch (error) {
        console.error("Error fetching the data");
    }

}

getBlogData();