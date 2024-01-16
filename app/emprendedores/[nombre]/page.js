"use client"
import { useParams } from "next/navigation"
import Link from 'next/link'
import styles from "./page.module.css"
import '../../globals.css'
import Image from 'next/image'
import {data} from '@/app/api/data'
import Producto from '@/app/components/Producto'


function buscaInfo(data, nomEmpresa){
    for(const i of data){
        if(i.nombre.replace(/ /g, "") == nomEmpresa){
            return(i)
        }
    }
    return("no existe")
}



export default function Emprendedor() {
    const nombre = useParams().nombre
    const existe = true
    const infoEmprendedor = buscaInfo(data, nombre)
    
    if(infoEmprendedor != "no existe"){
        return (
            <>
                <div className={styles.header}>
                    <a href='#historia'>Nuestra historia</a>
                    <a href='#produccion'>Producción</a>
                    <Link href='/'><h1 className={styles.title}>Catálogo Pymes</h1></Link>
                    <a href='#geografia'>Geografía</a>
                    <a href='#certificados'>Certificados</a>

                </div>
                <div className={styles.main}>
                    <div className={styles.info}>
                        <div className={styles.divPrincipal} id="historia">
                            <Image
                                src={infoEmprendedor.imagenes[0]}
                                fill
                                alt='bg image'
                                className={styles.bgImagen}
                            />
                            <div className={styles.divNomLogo}>
                                <div className={styles.logo}>
                                    <Image
                                        src={infoEmprendedor.logo}
                                        fill
                                        alt="Foto producto"
                                        style={{borderRadius: 10}}
                                    />
                                </div>
                                <div className={styles.divNombre}>
                                    <h1>{nombre}</h1>
                                </div>
                            </div>
                            <div className={styles.historia}>
                                <h1>Nuestra Historia</h1>
                                <p>{infoEmprendedor.historia[0]}</p>
                            </div>
                            <div className={styles.historia2}>
                                <p>{infoEmprendedor.historia[1]}</p>
                            </div>
                        </div>

                        <div id="produccion" className={styles.divProduccion}>
                            <Image
                                src={infoEmprendedor.imagenes[1]}
                                fill
                                alt='bg image'
                                className={styles.bgImagen}
                            />
                        
                            <div className={styles.divProduccionTitle}><h1>Características Productivas</h1></div>

                            <div className={styles.divProduccionText}>
                                <p>{infoEmprendedor.produccion[0]}</p>
                            </div>
                            <div className={styles.divProduccionText2}>
                                <p>{infoEmprendedor.produccion[1]}</p>
                            </div>
                            
                        </div>

                        <div id="geografia" className={styles.divGeografia}>
                            <Image
                                src={infoEmprendedor.imagenes[2]}
                                fill
                                alt='bg image'
                                className={styles.bgImagen}
                            />
                            <div className={styles.divGeografiaTitle}>
                                <h1>Características Geográficas</h1>
                            </div>
                            <div className={styles.divMapa}>
                                <iframe src={infoEmprendedor.mapa}width="500" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapa}></iframe>
                            </div>
                        </div>

                        <div id="certificados" className={styles.divCertificados}>
                            <Image
                                src={infoEmprendedor.imagenes[3]}
                                fill
                                alt='bg image'
                                className={styles.bgImagen}
                            />
                            <div className={styles.divCertificadosTitle}><h1>Certificados</h1></div>
                            <div className={styles.divCertificadosList}>
                                {infoEmprendedor.certificados.map((cert, index) => (
                                    <div className={styles.certCont}>
                                        <Link href={cert[1]} target="_blank">
                                            <Image
                                                src={cert[0]}
                                                fill
                                                alt='bg image'
                                                style={{borderRadius: 10}}
                                            />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                    </div>

                    <div className={styles.catalogo}>
                        <h1 className={styles.titleCat}>Nuestros Productos</h1>
                        <div className={styles.productos}>
                            {infoEmprendedor.productos.map((producto, index) => (
                                <Producto info = {producto} key={index}/>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }
    else{
        return(<h1>La empresa no existe</h1>)
    }


}