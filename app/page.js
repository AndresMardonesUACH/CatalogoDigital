"use client"
import Link from 'next/link'
import Image from 'next/image'
import Buscador from '@/app/components/Buscador'


export default function Home() {

  return (
    <div>
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
          src = "/images/nuestrosobjetivos.png"
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
          src = "/images/sobrenosotros.jpg"
          fill
          alt='Nuestros Objetivos'
        />
        </div>
      </div>

      <div className='div-beneficios' id='beneficios'>
        <h1>Beneficios de Catálogo Pymes</h1>
        <div className='div-beneficios-text'>
          <div className='beneficios-izq'>
            <b>Amplia Cobertura:</b>
            <p>Nuestro catálogo rompe las barreras geográficas, ofreciendo una cobertura amplia, pudiendo llegar a todo Chile y al Extranjero. Estamos aquí para ayudarte a llegar a un público más amplio.</p>

            <b>Presencia Digital:</b>
            <p>Tendrás presencia digital en un formato moderno y atractivo, basado en los modelos de comercialización actuales. Con nosotros, tu negocio estará al día con las últimas tendencias digitales.</p>

            <b>Ficha Pyme:</b>
            <p>Esta ficha será el showroom de tus productos y de tu historia mostrando las características productivas y mucho más. Es una excelente manera de destacar lo que hace único a tu negocio.</p>
          </div>
          <div className='beneficios-der'>
            <b>Autoadministración del Showroom:</b>
            <p>Podrás agregar, modificar o eliminar productos de tu catálogo de manera sencilla, dándote total control sobre cómo presentas tus productos al mundo.</p>

            <b>URL Personalizada:</b>
            <p>Tendrás una URL personalizada donde podrás exponer y publicar todos los aspectos anteriores. Esta URL puede ser utilizada como medio de promoción en redes sociales, papelería, campañas de correo electrónico, y más.</p>
            
            <b>Buscador:</b>
            <p>Nuestro catálogo incluye un buscador para facilitar a los clientes encontrar exactamente lo que están buscando.</p>
          </div>
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
    </main>

    <footer>
      <p>En <b>Catálogo Pyme</b>, estamos comprometidos a ayudarte a crecer y prosperar en el mundo digital.</p>
      <p>Únete a nosotros en este emocionante viaje y descubre cómo podemos ayudarte a alcanzar tus objetivos de negocio.</p>
      <p>¡Estamos aquí para apoyarte en cada paso del camino!</p>
      <p className='rights'>Desarrollado por Singa S.A.</p>
    </footer>
    </div>
  )
}
