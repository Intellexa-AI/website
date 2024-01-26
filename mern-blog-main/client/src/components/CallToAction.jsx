import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    // <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
    //     <div className="flex-1 justify-center flex flex-col">
    //         <h2 className='text-2xl'>
    //             Want to learn more about JavaScript?
    //         </h2>
    //         <p className='text-gray-500 my-2'>
    //             Checkout these resources with 100 JavaScript Projects
    //         </p>
    //         <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
    //             <a href="https://www.100jsprojects.com" target='_blank' rel='noopener noreferrer'>
    //                 100 JavaScript Projects
    //             </a>
    //         </Button>
    //     </div>
    //     <div className="p-7 flex-1">
    //         <img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg" />
    //     </div>
    // </div>
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
            JOIN THE MOVEMENT! 
            </h2>
            <p className='text-gray-500 my-2'>
            Intellexa-AI believes in the power of collaboration, innovation, continuous learning and it is a chance for you to elevate your future vision with us and be a part of a journey that transcends boundaries.

Ready to shape the future of technology and to be a part of something extraordinary? Join Intellexa-AI today, where we’re not just learning AI; we’re creating the future! “Elevating Future Vision” isn’t just a slogan; it’s a commitment to excellence and the pursuit of limitless possibilities.
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.100jsprojects.com" target='_blank' rel='noopener noreferrer'>
                   JOIN INTELLEXA AI
                </a>
            </Button>
        </div>

    </div>
  )
}