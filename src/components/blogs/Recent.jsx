import { useState, useEffect } from "react";
import axios from "axios";

function Recent({ onBlogClick }) {
  const [blogs, setBlogs] = useState([]);
  const baseURL = "http://localhost:1337";

  useEffect(() => {
    axios
      .get(`${baseURL}/api/blogs?populate=*`)
      .then((response) => {
        setBlogs(response.data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <section className="w-full md:w-2/6 lg:w-1/4">
        <div className="flex justify-start items-start flex-col gap-10 md:gap-1 xl:gap-8 flex-wrap xl:flex-nowrap my-8">
          <span className="text-[#791204] font-semibold text-xl">RECENT BLOG POSTS</span>
          {blogs.map((blog, index) => {
            const { Title, AuthorName, PostDate, BlogImage } = blog.attributes;
            const imageUrl = baseURL + BlogImage.data.attributes.url;

            return (
              <div
                key={index}
                className="px-4 py-10 lg:px-8 flex justify-evenly gap-6 items-start flex-col border-[#2B2A2A] shadow-md rounded-lg cursor-pointer"
                onClick={() => onBlogClick(blog)}
              >
                <div>
                  <img src={imageUrl} alt="post image" />
                </div>
                <span className="inline-flex font-raleway items-center justify-center px-6 py-2 text-base font-semibold text-center text-[#2B2A2A] rounded bg-[#FFF4CC80] hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                  Fashion
                </span>
                <div>
                  <p className="text-left text-base md:text-lg lg:text-xl text-[#2B2A2A] font-medium">
                    {Title}
                  </p>
                </div>
                <div className="flex flex-row justify-evenly items-center gap-2">
                  <h1 className="font-raleway font-semibold text-sm text-[#2B2A2A80] md:text-base">{AuthorName}</h1>
                  <p className="font-raleway font-semibold text-sm text-[#2B2A2A80] md:text-base">
                    {new Date(PostDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Recent;
