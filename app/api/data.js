import {NextResponse} from 'next/server'

export const data = 
    [
      {
        nombre: "TerraSanta",
        hiddenNombre: "TerraSanta",
        region: "Región Metropolitana de Santiago",
        comuna: "Curacaví",
        categoria: "Agricultura",
        rubro: "Aceite de oliva",
        logo: "/images/logo1.jpg",
        productos: [
                    {nomProducto: "Aceite de Oliva Extra Virgen",desc: "Formato: 250 ml. El aceite Extra Virgen Terra Santa, cuenta con un grato aroma frutado fresco y tonos a manzana verde y frutas frescas. Tiene un sabor equilibrado con grato amargor y picante de fondo. De color verde dorado, tiene una acidez de 0,2% y un alto contenido de polifenoles. Características que lo convierten en un aceite extra virgen de calidad superior. ",foto: "/images/aceite1.jpg", precio: ""},
                    {nomProducto: "Aceto Balsámico di Módena", desc:"Formato: 250 ml. El Aceto Balsámico Terra Santa tiene un sabor ligeramente dulce y delicado. Óptimo perfume y color caramelo.El Aceto Balsámico de Módena se obtiene de una cuidadosa fermentación de mosto de uvas originarias de la ciudad de Módena.Es ideal para ensaladas y muy adecuado como acompañamiento de carnes asadas.", foto: "/images/aceite2.jpg", precio: ""}, 
                    {nomProducto: "Aceto Balsámico di Módena", desc: "Formato: 10 ml. El Aceto Balsámico Terra Santa tiene un sabor ligeramente dulce y delicado. Óptimo perfume y color caramelo.El Aceto Balsámico de Módena se obtiene de una cuidadosa fermentación de mosto de uvas originarias de la ciudad de Módena.Es ideal para ensaladas y muy adecuado como acompañamiento de carnes asadas. ", foto: "/images/aceite3.jpg", precio: ""},
                    {nomProducto: "Aceite de Oliva Extra Virgen", desc: "Formato: 5000 ml. El aceite Extra Virgen Terra Santa, cuenta con un grato aroma frutado fresco y tonos a manzana verde y frutas frescas. Tiene un sabor equilibrado con grato amargor y picante de fondo. De color verde dorado, tiene una acidez de 0,2% y un alto contenido de polifenoles. Características que lo convierten en un aceite extra virgen de calidad superior. ", foto: "/images/aceite4.jpg", precio: ""},
                    ],
        produccion: ["Nuestro proceso de elaboración comienza con la cosecha. Esta comienza cuando las aceitunas de los olivos de Terra Santa se encuentran con un porcentaje de agua y aceite adecuado.", "Gracias a maquinaria con tecnología de punta, nuestras aceitunas son cosechadas y transportadas a la planta de proceso en un tiempo menor a 2 horas para preservar todo el sabor y calidad de la fruta."],
        historia: ["Nuestros olivos crecen en el corazón del valle de Curacaví bajo un clima privilegiado que hace del Aceite de Oliva Extra Virgen Terra Santa un aceite de oliva verdaderamente excepcional.", "Nuestras aceitunas son elegidas a través de un proceso tradicional, en el que nos aseguramos que solo las aceitunas de más alta calidad sean parte del proceso de confección de nuestro Aceite de Oliva."],
        imagenes:["/images/wall1.jpg", "/images/wall2.jpg", "/images/wall3.jpg", "/images/wall4.jpg"],
        mapa: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d106594.44373268957!2d-71.12335073280775!3d-33.3951718099905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scl!4v1704124274281!5m2!1ses-419!2scl",
        certificados: [["/images/cert1.jpg", "/images/Resolución Sanitaria.pdf"], ["/images/cert2.jpg", "/images/Patente Comercial.pdf"], ["/images/cert3.jpg", "/images/Autorización sanitaria de alimentos.pdf"], ]

      },

      {
        nombre: "Kutral",
        hiddenNombre: "Kutral",
        region: "Región Metropolitana de Santiago",
        comuna: "",
        categoria: "Artesanía",
        rubro: "Artesanía",
        logo: "/images/logo2.jpg",
        productos: [
                      { nomProducto: "Anillo Cobre Liso Mujer", desc: "El Anillo Cobre Liso Mujer es una joya encantadora que realzará tu elegancia. Elaborado a mano por talentosos artesanos Chilenos con cobre de alta calidad, este anillo presenta un diseño liso y minimalista que resalta tu estilo personal. Su ajuste ajustable garantiza comodidad y versatilidad. Apoya a los artesanos y la economía local de Chile con este anillo exclusivo.", foto: "/images/artesania1.webp", precio: "9990" },
                      { nomProducto: "Pulsera Bronce Tubo Hombre", desc: "Hecha a mano por talentosos artesanos chilenos, esta pulsera de bronce de alta calidad presenta un diseño en tubo que irradia estilo y elegancia. Su ajuste ajustable garantiza comodidad y versatilidad, mientras apoyas a los artesanos y la economía local de Chile.", foto: "/images/artesania2.webp", precio: "15990" },
                      { nomProducto: "Pulsera Plata Rayada Hombre", desc: "La Pulsera Plata Rayada Hombre es una pieza clásica y elegante hecha a mano por artesanos Chilenos con plata de alta calidad. Su diseño con rayas le da un toque de estilo y personalidad, lo que la hace perfecta para cualquier outfit.. Además, su ajuste universal permite que se adapte a tu de muñeca.", foto: "/images/artesania3.webp", precio: "52990" },
                      { nomProducto: "Anillo Plata Rayado Mujer", desc: "El Anillo Plata Rayado Mujer es una joya sofisticada que realzará tu elegancia. Elaborado a mano por talentosos artesanos Chilenos con plata de alta calidad, este anillo presenta un diseño con rayas que le confiere un aspecto moderno y distintivo. Su ajuste ajustable garantiza comodidad y versatilidad. Apoya a los artesanos y la economía local de Chile con este anillo exclusivo.", foto: "/images/artesania4.webp", precio: "21990" },
        ],
        produccion: ["Pensado y fabricado en Chile. Nos tomamos el tiempo y el cuidado necesario para asegurarnos de que cada pieza sea perfecta.", "Graba tu accesorio y cuenta tu historia. Ofrecemos la oportunidad de grabar nuestras joyas, para que cada pieza tenga un significado único y personal. Cada vez que te pongas tu accesorio Kutral, estarás llevando contigo tus sueños y experiencias."],
        historia: ["Kutral nace el año 2019 con el objetivo de que cada joya fabricada sea una obra de arte única, creada con amor y dedicación por manos expertas. Nuestro objetivo es que te sientas identificado con tu grabado y que te ayude a contar tu historia, que tu joya Kutral sea una extensión de ti mismo.", "Por eso, apoyamos a artesanos Chilenos y trabajamos en estrecha colaboración con ellos para crear piezas auténticas. Únete a nuestra comunidad y lleva contigo un pedacito de Chile."],
        imagenes: ["/images/wall5.webp", "/images/wall6.webp", "/images/wall7.webp", "/images/wall8.webp"],
        mapa:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d426242.74759110535!2d-70.66861973815142!3d-33.42268471900482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scl!4v1704124817043!5m2!1ses-419!2scl",
        certificados: [["/images/cert1.jpg", "/images/Resolución Sanitaria.pdf"], ["/images/cert2.jpg", "/images/Patente Comercial.pdf"], ["/images/cert3.jpg", "/images/Autorización sanitaria de alimentos.pdf"], ]
      },
      {
        nombre: "Kutral",
        hiddenNombre: "Apihuel",
        region: "Región Metropolitana de Santiago",
        comuna: "Isla de Maipo",
        categoria: "Gastronomía",
        rubro: "Miel",
        logo: "/images/logo3.webp",
      },
      {
        nombre: "TerraSanta",
        hiddenNombre: "Payamtume",
        region: "Atacama",
        comuna: "Vallenar",
        categoria: "Agricultura",
        rubro: "Aceites",
        logo: "/images/logo4.jpg",
      },
      {
        nombre: "Kutral",
        hiddenNombre: "Artesanías Volcán",
        region: "Región de la Araucanía",
        comuna: "Pucón",
        categoria: "Artesanía",
        rubro: "Artesanía",
        logo: "/images/logo5.jpg",
      },
      {
        nombre: "TerraSanta",
        hiddenNombre: "Mawud",
        region: "Región Metropolitana de Santiago",
        comuna: "Lo Barnechea",
        categoria: "Artesanía",
        rubro: "Artesanía",
        logo: "/images/logo6.png",
      },
    
    ]

    export async function GET() {
        return new NextResponse.json(data);
      }