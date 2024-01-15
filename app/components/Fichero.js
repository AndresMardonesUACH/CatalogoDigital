import { Card, CardBody } from '@chakra-ui/react'
import styles from './Fichero.module.css'
import Image from 'next/image'


export default function Fichero(props) {
    const{ nombre, rubro, logo } = props
    return (
      <Card maxW='sm'>
        <CardBody margin={8}>
          <Image 
            src = {logo}
            width={150}
            height={150}
            alt = "Logo empresa"
            className={styles.imagen}
            style={{borderRadius: 10}}
          />
            <p className={styles.nomEmpresa}>{nombre}</p>
            <p>{rubro}</p>
        </CardBody>
      </Card>
    )
  }