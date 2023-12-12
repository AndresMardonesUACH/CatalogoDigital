import Image from 'next/image'
import imagen1 from '../public/images/default-logo.png'

export default function Home() {
  return (
    <main>
      <div className='header-empresa'>

        <div className='header-empresa-1'>
          <p>Ficha Productiva: <b>Empresa 1</b></p>
          <div className='div-logo'>
            <Image
              src={imagen1}
              fill
              alt=""
            />
          </div>
          
        </div>

        <div className='header-empresa-2'>

        </div>
      </div>
      <div>

      </div>
    </main>
  )
}
