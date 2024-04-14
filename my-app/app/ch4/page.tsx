import React from 'react'

const ch4 = () => {
  return (
    <body>
      <div className='bg-[#23424A]'>
        <div className='w-[70%] p-20'>
          <div className='text-white'>
              <h1 className='text-4xl mb-4 font-bold'>Responsive layouts don't have to be a struggle</h1>
              <p className='text-lg mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat nam dolor aut, similique vitae modi adipisci. Facilis beatae inventore sunt ipsa tempora? Dolores, corporis! Obcaecati.</p>
          </div>
          <button className='rounded-3xl bg-[#38cfd9] py-2 px-6 mt-4 font-semibold'>I WANT TO LEARN</button>
        </div>
      </div>
      <section>
        <div className='flex px-14 space-x-2 py-16'>
            <div className='text-center'>
                <h2 className='text-[#87629A] font-bold text-xl mb-3'>Cheap</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nobis aliquid blanditiis ad doloremque facilis eveniet possimus nihil numquam quibusdam.</p>
            </div>
            <div className='text-center'>
                <h2 className='text-[#87629A] font-bold text-xl mb-3'>Quick</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nobis aliquid blanditiis ad doloremque facilis eveniet possimus nihil numquam quibusdam.</p>
            </div>
            <div className='text-center'>
                <h2 className='text-[#87629A] font-bold text-xl mb-3'>Quality</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nobis aliquid blanditiis ad doloremque facilis eveniet possimus nihil numquam quibusdam.</p>
            </div>
        </div>
      </section>
      <section className='bg-[#136C72] py-20'>
        <div className='flex px-14 text-center space-x-4 text-white'>
            <div>
                <h2 className='font-bold text-2xl mb-4'>Cheap</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa reprehenderit optio natus consectetur laboriosam accusantium veniam repellendus harum suscipit neque?</p>
            </div>
            <div>
                <h2 className='font-bold text-2xl mb-4'>Quick</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa reprehenderit optio natus consectetur laboriosam accusantium veniam repellendus harum suscipit neque?</p>
            </div>
        </div>
      </section>
    </body>

  )
}

export default ch4