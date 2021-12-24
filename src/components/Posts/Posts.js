import Post from "./Post";
import "./Posts.css";
import {useState, useEffect} from "react";
import Button from "../Button/Button";
import {FiExternalLink} from "react-icons/fi";
//use UseState hook to get the posts

export default function Posts(props) {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        fetch("https://blog.ahmadz.ai/@rehman/posts", {
            method: 'GET',
            redirect: 'follow',
        })
            .then(response => response.json())
            .then(data => setPosts(data.slice(0, 3)))
            .catch(error => console.log('error', error));
    }, []);

    // convert string to date format with month in full name
    const convertDate = (date) => {
        let newDate = new Date(date);
        let month = newDate.getMonth();
        let day = newDate.getDate();
        let year = newDate.getFullYear();
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${day} ${months[month]} ${year}`;
    };

    return posts ? (
        <div className="posts">
            <h2>Latest Posts</h2>
            <div className={'post-container'}>
                {
                    posts.map(post => (
                        <Post link={'https://blog.ahmadz.ai/' + post.slug} title={post.title} date={convertDate(post.created_on)} />
                    ))
                }
            </div>
            <Button href={'https://blog.ahmadz.ai/@rehman'} target={'_blank'} value={'View More'} style={{
                width: "100%",
                padding: "20px",
                placeContent: "center",
                border: "1px solid rgb(82 82 82)"
            }} icon={<FiExternalLink size={30}/>}/>
        </div>
    ) : (<div>Loading</div>)
}

