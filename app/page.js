"use client"
import Image from 'next/image'
import Link from 'next/link'
import {data} from '@/app/api/data'
import Fichero from '@/app/components/Fichero'
import Buscador from '@/app/components/Buscador'


export default function Home() {
  return (
    <>
    <header>
        <a href='#'>Inicio</a>
        <a href='#nuestrosObj'>Objetivos</a>
        <Link href='/' className='main-title'><h1>Catálogo Pymes</h1></Link>
        <a href='#beneficios'>Beneficios</a>
        <a href='#emprendedores'>Emprendedores</a>
    </header>
    <main>

      

      <div className='div-sobreN'>
        <div className='div-imagen'>
        <Image
          src = "/images/sobrenosotros.jpg"
          fill
          alt='Sobre Nosotros'
        />
        </div>
        <div className='div-sobreN-text'>
          <h1>Conozca y apoye a las Pymes de su comuna:</h1>
          <p>Qué producen, cómo trabajan, dónde se encuentran; y los más importante, su Historia.</p>
          <p>Buscamos promocionar y posicionar de manera moderna y efectiva a los emprendedores de Chile.</p>
        </div>
      </div>

      <div className='div-nuestrosObj'  id = 'nuestrosObj'>
        <div className='div-nuestrosObj-text'>
          <h1>Nuestros Objetivos</h1>
          <p>Sabemos lo difícil que es emprender en Chile y generar canales de venta efectivos; Catálogo Pyme busca ser un puente entre el emprendedor y su mercado, dándole la posibilidad de tener una mayor cobertura digital y con esto tener acceso a un mayor número de clientes.</p>
          <br></br>
          <p>Como sabemos que tras un producto hay mucho tiempo, dedicación, esfuerzo, y sobre todo cariño y orgullo por lo propio; por ende, hemos creado el concepto de Identidad Productiva, que forma parte fundamental de nuestro catálogo y que busca que el emprendedor cuente su historia y sobre esto haga una diferenciación al momento de promocionar sus productos.</p>
        </div>
        <div className='div-imagen-2'>
        <Image
          src = "/images/nuestrosobjetivos.png"
          fill
          alt='Nuestros Objetivos'
        />
        </div>
      </div>

      <div className='div-beneficios' id='beneficios'>
        <div className='div-beneficios-text'>
          <h1>Beneficios de Catálogo Pymes</h1>
          <ul>
            <li> Romper la barrera de una zona geográfica específica (una Comuna, una Región, etc.), ofreciendo una cobertura mucho más amplia que la posible de obtener por medios tradicionales.</li>
            <li>Tener una mayor presencia digital en un formato moderno y atractivo en base a los modelos de comercialización actuales.</li>
            <li>Contar con una Ficha Pyme que contendrá aspectos tales como: Showroom de productos, Historia de la Pyme, Características Productivas, geoposicionamiento del emprendedor, documentación, etc.</li>
            <li>Autoadministración del Showroom: el emprendedor podrá agregar, modificar, o eliminar de manera sencilla productos de su catálogo.</li>
            <li>Tener una URL personalizada donde exponer y publicar los aspectos anteriores, y que servirá para ser utilizada como medio de promoción en redes sociales, papelería, campañas de mails, etc.</li>
          </ul>
        </div>
      </div>

        <div className='div-imagen-3' id = "emprendedores">
          <Image
            src = "/images/banda.jpg"
            fill
            alt='Banda'
          />
        </div>

        <div className='div-emprende' >
          <h1>Red de Emprendedores</h1>
          <Buscador/>
        </div>
      <div className='div-emprende-2'  >
        <div className='div-ficheros'>
          {data.map((emprendedor, index) => (
            <div className='fichero'>
            <Link href = {`emprendedores/${emprendedor.nombre.replace(/ /g, "")}`} >
                <Fichero nombre = {emprendedor.hiddenNombre} rubro = {emprendedor.rubro} logo = {emprendedor.logo} key = {index}/>
            </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
    </>
  )
}
