import { useState, useEffect } from 'react';
import axios from 'axios';

function Detailedblog({ blog }) {
    const [currentBlog, setCurrentBlog] = useState(blog);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const baseURL = 'https://mylace-dashboard-strapi.onrender.com';

    useEffect(() => {
        if (!blog) {
            axios.get(`${baseURL}/api/blogs?populate=*`)
                .then(response => {
                    if (response.data.data.length > 0) {
                        setCurrentBlog(response.data.data[0]);
                    }
                })
                .catch(error => console.error('Error fetching data:', error));
        } else {
            setCurrentBlog(blog);
        }
    }, [blog]);

    const handleSubscribe = async () => {
        try {
            const response = await axios.post('https://mylace-dashboard-strapi.onrender.com/api/subscription/subscribe', { email });
            setMessage(response.data.msg);
            setShowMessage(true); // Show the message

            // Clear the input field after successful subscription
            setEmail('');

            // Hide the message after 3 seconds
            setTimeout(() => {
                setShowMessage(false);
            }, 3000);

        } catch (error) {
            console.error('Subscription Error:', error);
            setMessage('There was an issue with your subscription. Please try again.');
            setShowMessage(true);
            
            // Hide the message after 3 seconds
            setTimeout(() => {
                setShowMessage(false);
            }, 3000);
        }
    };

    if (!currentBlog) return <div>Loading...</div>;

    const { Title, AuthorName, PostDate, BlogDescription, BlogImage } = currentBlog.attributes;
    const imageUrl = BlogImage?.data?.attributes?.url ? BlogImage.data.attributes.url : '';

    return (
        <>
            <section className='w-full md:w-3/4'>
                <div className='flex flex-row gap-4'>
                    <span className='font-semibold'>{new Date(PostDate).toLocaleDateString()}</span>
                    <span className='font-bold'>{AuthorName}</span>
                </div>

                <div className="mt-8 mb-16">
                    <h1 className="flex flex-col py-4">
                        <span
                            className="font-greatVibes text-3xl md:text-4xl lg:text-5xl text-[#791204] font-normal tracking-widest w-full md:w-5/6">{Title}</span>
                    </h1>

                    {imageUrl && <img className='w-full md:w-3/4' src={imageUrl} alt='post image' />}

                    <div className="text-lg md:text-xl lg:text-2xl font-medium text-[#2B2A2AB2] pt-10 w-full md:w-9/12">
                        {BlogDescription.map((paragraph, index) => (
                            <p key={index} className="mb-4">
                                {paragraph.children[0].text}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="mt-16 mb-16 w-full md:w-9/12">
                    <h1 className="flex flex-col">
                        <span
                            className="font-greatVibes text-center text-3xl md:text-4xl lg:text-5xl text-[#791204] font-normal tracking-widest">Newsletter</span>
                    </h1>
                    <p className="text-center text-lg md:text-xl lg:text-2xl font-medium text-[#2B2A2AB2] pt-10">
                        Stay updated on the latest Indian fashion trends and exclusive offers by subscribing to our newsletter today!
                    </p>

                    <div className='flex flex-col md:flex-row justify-center items-center mt-4'>
                        <input className='font-raleway py-2 px-4 border-4 border-black rounded'
                            type='email'
                            placeholder="Enter your email"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            className='text-center bg-[#2B2A2ACC] text-white font-raleway text-xl py-2 px-4 m-4 rounded'
                            onClick={handleSubscribe}
                        >
                            Subscribe
                        </button>
                    </div>
                    {showMessage && <p className='text-center mt-4 text-lg text-green-600'>{message}</p>}
                </div>
            </section>
        </>
    );
}

export default Detailedblog;
