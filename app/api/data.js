import {NextResponse} from 'next/server'

export const data = 
    [
      {
        nombre: "TerraSanta",
        hiddenNombre: "TerraSanta",
        rubro: "Aceite de oliva",
        logo: "/images/logo1.jpg",
        productos: [
                    {nomProducto: "Aceite de Oliva Extra Virgen",desc: "Formato: 250 ml. El aceite Extra Virgen Terra Santa, cuenta con un grato aroma frutado fresco y tonos a manzana verde y frutas frescas. Tiene un sabor equilibrado con grato amargor y picante de fondo. De color verde dorado, tiene una acidez de 0,2% y un alto contenido de polifenoles. Características que lo convierten en un aceite extra virgen de calidad superior. ",foto: "/images/aceite1.jpg", precio: ""},
                    {nomProducto: "Aceto Balsámico di Módena", desc:"Formato: 250 ml. El Aceto Balsámico Terra Santa tiene un sabor ligeramente dulce y delicado. Óptimo perfume y color caramelo.El Aceto Balsámico de Módena se obtiene de una cuidadosa fermentación de mosto de uvas originarias de la ciudad de Módena.Es ideal para ensaladas y muy adecuado como acompañamiento de carnes asadas.", foto: "/images/aceite2.jpg", precio: ""}, 
                    {nomProducto: "Aceto Balsámico di Módena", desc: "Formato: 10 ml. El Aceto Balsámico Terra Santa tiene un sabor ligeramente dulce y delicado. Óptimo perfume y color caramelo.El Aceto Balsámico de Módena se obtiene de una cuidadosa fermentación de mosto de uvas originarias de la ciudad de Módena.Es ideal para ensaladas y muy adecuado como acompañamiento de carnes asadas. ", foto: "/images/aceite3.jpg", precio: ""},
                    {nomProducto: "Aceite de Oliva Extra Virgen", desc: "Formato: 5000 ml. El aceite Extra Virgen Terra Santa, cuenta con un grato aroma frutado fresco y tonos a manzana verde y frutas frescas. Tiene un sabor equilibrado con grato amargor y picante de fondo. De color verde dorado, tiene una acidez de 0,2% y un alto contenido de polifenoles. Características que lo convierten en un aceite extra virgen de calidad superior. ", foto: "/images/aceite4.jpg", precio: ""},
                    ],
        produccion: "Nuestro proceso de elaboración comienza con la cosecha. Esta comienza cuando las aceitunas de los olivos de Terra Santa se encuentran con un porcentaje de agua y aceite adecuado. Gracias a maquinaria con tecnología de punta, nuestras aceitunas son cosechadas y transportadas a la planta de proceso en un tiempo menor a 2 horas para preservar todo el sabor y calidad de la fruta.",
        historia: "Nuestros olivos crecen en el corazón del valle de Curacaví bajo un clima privilegiado que hace del Aceite de Oliva Extra Virgen Terra Santa un aceite de oliva verdaderamente excepcional. Nuestras aceitunas son elegidas a través de un proceso tradicional, en el que nos aseguramos que solo las aceitunas de más alta calidad sean parte del proceso de confección de nuestro Aceite de Oliva.",
        imagenes:["/images/terraSanta1.jpg", "/images/wall1.jpg"]
      },

      {
        nombre: "Kutral",
        hiddenNombre: "Kutral",
        rubro: "Artesanía",
        logo: "/images/logo2.jpg",
        productos: [
                      { nomProducto: "Anillo Cobre Liso Mujer", desc: "El Anillo Cobre Liso Mujer es una joya encantadora que realzará tu elegancia. Elaborado a mano por talentosos artesanos Chilenos con cobre de alta calidad, este anillo presenta un diseño liso y minimalista que resalta tu estilo personal. Su ajuste ajustable garantiza comodidad y versatilidad. Apoya a los artesanos y la economía local de Chile con este anillo exclusivo.", foto: "/images/artesania1.webp", precio: "9990" },
                      { nomProducto: "Pulsera Bronce Tubo Hombre", desc: "Hecha a mano por talentosos artesanos chilenos, esta pulsera de bronce de alta calidad presenta un diseño en tubo que irradia estilo y elegancia. Su ajuste ajustable garantiza comodidad y versatilidad, mientras apoyas a los artesanos y la economía local de Chile.", foto: "/images/artesania2.webp", precio: "15990" },
                      { nomProducto: "Pulsera Plata Rayada Hombre", desc: "La Pulsera Plata Rayada Hombre es una pieza clásica y elegante hecha a mano por artesanos Chilenos con plata de alta calidad. Su diseño con rayas le da un toque de estilo y personalidad, lo que la hace perfecta para cualquier outfit.. Además, su ajuste universal permite que se adapte a tu de muñeca.", foto: "/images/artesania3.webp", precio: "52990" },
                      { nomProducto: "Anillo Plata Rayado Mujer", desc: "El Anillo Plata Rayado Mujer es una joya sofisticada que realzará tu elegancia. Elaborado a mano por talentosos artesanos Chilenos con plata de alta calidad, este anillo presenta un diseño con rayas que le confiere un aspecto moderno y distintivo. Su ajuste ajustable garantiza comodidad y versatilidad. Apoya a los artesanos y la economía local de Chile con este anillo exclusivo.", foto: "/images/artesania4.webp", precio: "21990" },
        ],
        produccion: "Esse eu quis sit esse consectetur non commodo exercitation duis nisi. Proident nisi mollit amet voluptate anim laborum. Pariatur veniam quis sint nostrud enim aute commodo cupidatat anim.",
        historia: "Kutral nace el año 2019 con el objetivo de que cada joya fabricada sea una obra de arte única, creada con amor y dedicación por manos expertas. Nuestro objetivo es que te sientas identificado con tu grabado y que te ayude a contar tu historia, que tu joya Kutral sea una extensión de ti mismo. Por eso, apoyamos a artesanos Chilenos y trabajamos en estrecha colaboración con ellos para crear piezas auténticas. Únete a nuestra comunidad y lleva contigo un pedacito de Chile.",
        imagenes: ["/images/kutral1.webp", "/images/wall2.webp"]
      },
      {
        nombre: "Kutral",
        hiddenNombre: "Apihuel",
        rubro: "Miel",
        logo: "/images/logo3.webp",
      },
      {
        nombre: "TerraSanta",
        hiddenNombre: "Payamtume",
        rubro: "Aceites",
        logo: "/images/logo4.jpg",
      },
    
    ]

    export async function GET() {
        return new NextResponse.json(data);
      }