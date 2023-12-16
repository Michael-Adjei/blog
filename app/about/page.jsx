import Image from "next/image"


const About = () => {
  return (
    <div className="py-10">
      <div className="wrapper flex flex-col gap-5 justify-center items-center">
          <h1 className="text-3xl font-bold text-gray-900
           dark:text-gray-50">
              About Us
           </h1>
           <Image src='/asserts/patrick.jpg' width={700} height={700}
            alt="about us" className=" rounded-xl shadow-xl w-[800px] h-[600px]
             object-cover" />
             <p className=" max-w-[600px] text-center text-gray-600
              dark:text-gray-50">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
         </p>
      </div>
    </div>
  )
}

export default About
