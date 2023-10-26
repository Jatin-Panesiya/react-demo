import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'
import img7 from './images/img7.jpg'
import img8 from './images/img8.jpg'
import img9 from './images/img9.jpg'
import img10 from './images/img10.jpg'
import img11 from './images/img11.jpg'

function App() {
  return (
    <div>
      <h1 className='text-center text-xl py-2 font-bold'>Github Commands</h1>
      <div className='flex flex-wrap justify-center'>
        <img src={img11} className='border border-black w-[30rem] p-1 m-1'  alt="Img1" />
        <img src={img1}  className=' h-auto border border-black w-[30rem] p-1 m-1' alt="Img1" />
        <img src={img2} className='border border-black w-[30rem] p-1 m-1'  alt="Img1" />
        <img src={img3}  className='border border-black w-[30rem] p-1 m-1' alt="Img1" />
        <img src={img4} className='border border-black w-[30rem] p-1 m-1'  alt="Img1" />
        <img src={img5} className='border border-black w-[30rem] p-1 m-1'  alt="Img1" />
        <img src={img6} className='border border-black w-[30rem] p-1 m-1'  alt="Img1" />
        <img src={img7} className='border border-black w-[30rem] p-1 m-1'  alt="Img1" />
        <img src={img8} className='border border-black w-[30rem] p-1 m-1'  alt="Img1" />
        <img src={img9}  className='border border-black w-[30rem] p-1 m-1' alt="Img1" />
        <img src={img10} className='border border-black w-[30rem] p-1 m-1'  alt="Img1" />
      </div>
    </div>
  );
}

export default App;
