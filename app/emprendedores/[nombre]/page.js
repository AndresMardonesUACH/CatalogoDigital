"use client"
import { useParams } from "next/navigation"
import Link from 'next/link'
import styles from "./page.module.css"
import '../../globals.css'
import Image from 'next/image'
import {data} from '@/app/api/data'
import { useEffect, useState } from "react"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Producto from '@/app/components/Producto'
import { border } from "@chakra-ui/react"


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
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    const infoEmprendedor = buscaInfo(data, nombre)
    
    if(infoEmprendedor != "no existe"){
        return (
            <div>
                <div className={styles.header}>
                    <a href='#historia'>Nuestra historia</a>
                    <a href='#produccion'>Producción</a>
                    <Link href='/' className={styles.title}><h1>Catálogo Pymes</h1></Link>
                    <a href='#geografia'>Geografía</a>
                    <a href='#certificados'>Certificados</a>

                </div>
                <div className={styles.main}>
                    <div className={styles.info}>
                        <Image
                            src={infoEmprendedor.imagenes[1]}
                            fill
                            alt='bg image'
                            className={styles.bgImagen}
                        />
                        <div className={styles.divPrincipal}>
                            <div className={styles.divLogo}>
                            <div className={styles.logo}>
                                <Image
                                    src = {infoEmprendedor.logo}
                                    fill
                                    alt = "Foto producto"
                                /> 
                            </div>
                            </div>
                            <div className={styles.historia} id="historia">
                                Nuestra Historia
                                <p>{infoEmprendedor.historia}</p>
                            </div>
                        </div>
                        <div className={styles.divNombre}>
                            <h1>{nombre}</h1>
                        </div>
                        <div id="produccion" className={styles.divProduccion}>
                            <h1>Características Productivas</h1>
                        </div>
                        <div className={styles.divProduccionText}>
                            <p>{infoEmprendedor.produccion}</p>
                        </div>
                        <div className={styles.divImagen}>
                            <div className={styles.imagen}>
                                <Image
                                    src = {infoEmprendedor.imagenes[0]}
                                    fill
                                    alt = "Foto producto"
                                /> 
                            </div>
                        </div>
                        <div id="geografia" className={styles.divGeografia}>
                            <h1>Características Geográficas</h1>
                        </div>
                        <div className={styles.divMapa}>
                            <iframe src={infoEmprendedor.mapa}width="500" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapa}></iframe>
                        </div>
                        <div id="certificados" className={styles.divCertificados}>
                            <h1>Certificados</h1>
                            <p>{infoEmprendedor.certificados}</p>
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
            </div>
        )
    }
    else{
        return(<h1>La empresa no existe</h1>)
    }


}