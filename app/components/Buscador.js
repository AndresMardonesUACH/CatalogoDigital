import {
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import { IoChevronDownOutline } from "react-icons/io5";
import { useEffect, useState } from "react"
import {regiones} from '@/app/api/regiones'
import Link from 'next/link'
import Image from 'next/image'

import Fichero from '@/app/components/Fichero'
import {data} from '@/app/api/data'
import styles from './Buscador.module.css'


function buscaComunas(region){
    for(const i of regiones){
      if(i.region == region){
          return(i.comunas)
      }
  }
  }

function buscaFicheros(region, comuna, categoria, data){
    const ficheros = []
    for(const i of data){
      if(i.region == region || region == "Todas"){
        if(i.comuna == comuna || comuna == "Todas"){
          if(i.categoria == categoria || categoria == "Todas"){
              ficheros.push(i)
          }
        }
      }
    }
    return ficheros
}



export default function Buscador() {
    const [region, setRegion] = useState("Todas")
    const [comunas, setComunas] = useState([])
    const [comunaSelec, setComunaSelec ] = useState("Todas")
    const [categoria, setCategoria] = useState("Todas")
    const [ficheros, setFicheros] = useState(data)

    const categorias = ["Todas", "Artesanía", "Agricultura", "Gastronomía", "Textilería"]

    useEffect(() => {
        const newComunas = buscaComunas(region)
        setComunas(newComunas)
      }, [region]);

    useEffect(() => {
        const newFicheros = buscaFicheros(region, comunaSelec, categoria, data)
        setFicheros(newFicheros)
    }, [region, comunaSelec, categoria, ])


    return (
      <>
        <div className={styles.buscador}>
          <div>
            <Menu closeOnSelect={true} >
            <MenuButton as={Button} rightIcon={<IoChevronDownOutline />} margin={6} colorScheme={"white"} color={"black"} border={"1px"} size={"lg"}>
                Región 
              </MenuButton>
              <MenuList>
                <MenuOptionGroup defaultValue = "Todas" type='radio'>
                  {regiones.map((region, index) => (
                    <MenuItemOption onClick={() => setRegion(region.region)} value={region.region} key={index}>{region.region} </MenuItemOption>
                  ))}
                </MenuOptionGroup>
              </MenuList>
            </Menu>

            <Menu closeOnSelect={true}>
            <MenuButton as={Button} rightIcon={<IoChevronDownOutline />} margin={6} colorScheme={"white"} color={"black"} border={"1px"} size={"lg"}>
                Comuna
              </MenuButton>
              <MenuList>
                <MenuOptionGroup defaultValue="Todas" type='radio'>
                  <MenuItemOption onClick={() => setComunaSelec("Todas")} value='Todas'>Todas</MenuItemOption>
                  {
                  comunas.map((comuna, index) => (
                    <MenuItemOption onClick={() => setComunaSelec(comuna)} value={comuna} key={index}>{comuna} </MenuItemOption>
                  ))
                  }
                </MenuOptionGroup>
              </MenuList>
            </Menu>

            <Menu closeOnSelect={true}>
              <MenuButton as={Button} rightIcon={<IoChevronDownOutline />} margin={6} colorScheme={"white"} color={"black"} border={"1px"} size={"lg"}>
                Categoría
              </MenuButton>
              <MenuList>
              <MenuOptionGroup defaultValue="Todas" type='radio'>
                {categorias.map((cat, index) => (
                    <MenuItemOption onClick={() => setCategoria(cat)} value={cat} key={index}>{cat} </MenuItemOption>
                  ))}
              </MenuOptionGroup>
              </MenuList>
            </Menu>
          </div>
          <div className={styles.buscadorSelec}>
            <b>Región: </b><p>{region}</p>
            <b>Comuna: </b><p>{comunaSelec}</p>
            <b>Categoría: </b><p>{categoria}</p>
          </div>
        </div>

        <div className='div-emprende-2'  >
        <div className='div-ficheros'>
          {ficheros.length > 0 ?(ficheros.map((emprendedor, index) => (
            <div className='fichero'>
              <Link href={`emprendedores/${emprendedor.nombre.replace(/ /g, "")}`} >
                <Fichero nombre={emprendedor.hiddenNombre} rubro={emprendedor.rubro} logo={emprendedor.logo} key={index} />
              </Link>
            </div>
          ))) : (<p>No se ha encontrado ningún emprendedor</p>) }
          {}
        </div>
        </div>
      </>
    )
  }