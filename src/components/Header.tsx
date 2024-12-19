import { Image } from 'antd'
import  logo  from  '../assets/logo_sfk.jpg'
function Header() {
    return (
    <header className='flex flex-col items-center mb-10'>
        <div className="logo flex py-5">
            <Image src={logo} width={100} preview={false}/>
        </div>
        <div className='py-5  bg-[midnightblue] w-full'>
            <h1 className='text-white text-4xl max-md:text-3xl text-center'>Application de reçu: STK KANANA FIADANANA</h1>
        </div>
    </header>
    )
}

export default Header