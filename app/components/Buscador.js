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
import styles from './Buscador.module.css'


function buscaComunas(region){
    for(const i of regiones){
      if(i.region == region){
          return(i.comunas)
      }
  }
  }
  

export default function Buscador() {
    const [region, setRegion] = useState("Todas")
    const [comunas, setComunas] = useState([])
    const [comunaSelec, setComunaSelec ] = useState("Todas")
    const [categoria, setCategoria] = useState("Todas")

    useEffect(() => {
        const newComunas = buscaComunas(region)
        setComunas(newComunas)
      }, [region]);


    return (
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
                <MenuItemOption onClick={() => setCategoria("Todas")} value='Todas'>Todas</MenuItemOption>
                  <MenuItemOption onClick={() => setCategoria("Artesanía")} value='A'>Artesanía</MenuItemOption>
                  <MenuItemOption onClick={() => setCategoria("Agricultura")} value='B'>Agricultura</MenuItemOption>
                  <MenuItemOption onClick={() => setCategoria("Gastronomía")} value='C'>Gastronomía</MenuItemOption>
                  <MenuItemOption onClick={() => setCategoria("Textilería")} value='D'>Textilería</MenuItemOption>
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
    )
  }