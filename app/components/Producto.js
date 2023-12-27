import { Card,
    CardHeader,
    CardBody, 
    CardFooter, 
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,

} from '@chakra-ui/react'
import styles from './Producto.module.css'
import Image from 'next/image'


export default function Producto(props){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {info} = props
    return(
        <>
        <Card maxW='sm' margin={5}>
            <div className={styles.divProducto}>
                <Image
                    src = {info.foto}
                    width={150}
                    height={150}
                    alt = "Foto producto"
                    className={styles.imagen}
                />
                <div className={styles.divProductoText}>
                    <h1>{info.nomProducto}</h1>
                    <p>Valor : ${info.precio}</p>
                    <Button className={styles.boton} marginLeft={10} marginTop={30} onClick={onOpen}>Ver más</Button>
                </div>
            </div>
        </Card>

        {isOpen ? (
        <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
            <ModalOverlay/>
            <ModalContent>
                <ModalCloseButton   />
                <ModalBody>
                    <div className={styles.modal}>
                        <h1>{info.nomProducto}</h1>
                        <h2>Descripción</h2>
                        <p>{info.desc}</p>
                    </div>
                    <div>
                        <Button marginLeft={380} marginTop={10} colorScheme={"red"}>Añadir al carrito</Button>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
        ) : null}
        </>
    )



}