import { useState, useEffect } from "react";
import Detailedblog from "./Detailedblog";
import Recent from "./Recent";
import axios from 'axios';

function Mixedpage() {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [defaultBlog, setDefaultBlog] = useState(null);
    const baseURL = 'http://localhost:1337'; 

    useEffect(() => {
        axios.get(`${baseURL}/api/blogs?populate=*`)
            .then(response => {
                if (response.data.data.length > 0) {
                    setDefaultBlog(response.data.data[0]);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        if (!selectedBlog && defaultBlog) {
            setSelectedBlog(defaultBlog);
        }
    }, [defaultBlog, selectedBlog]);

    return (
        <>
            <section className="max-w-screen-2xl mx-auto w-full pt-32 md:pt-56 p-4 flex flex-col md:flex-row justify-center md:justify-evenly items-center md:items-start">
                <Detailedblog blog={selectedBlog} />
                <Recent onBlogClick={setSelectedBlog} />
            </section>
        </>
    );
}

export default Mixedpage;
