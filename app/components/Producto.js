import { Card,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    Divider,
    ModalBody,
    useToast,
    ModalCloseButton,
    useDisclosure,

} from '@chakra-ui/react'
import styles from './Producto.module.css'
import Image from 'next/image'


export default function Producto(props){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    const {info} = props
    return(
        <>
        <Card maxWidth={320} maxH={200}  margin={5}>
            <div className={styles.divProducto}>
                <Image
                    src = {info.foto}
                    width={150}
                    height={100}
                    alt = "Foto producto"
                    className={styles.imagen}
                />
                <div className={styles.divProductoText}>
                    <h1>{info.nomProducto}</h1>
                    <p>Valor : ${info.precio}</p>
                    <Button  _hover={{ bg: '#568cb3', color: 'white' }} marginLeft={10} marginTop={27} onClick={onOpen}>Ver más</Button>
                </div>
            </div>
        </Card>

        {isOpen ? (
        <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
            <ModalOverlay/>
            <ModalContent>
                <ModalCloseButton   />
                <ModalBody className={styles.modalBody} padding={10}>
                    <div className={styles.modalDiv}>
                        <div className={styles.divFoto}>
                            <Image
                                src={info.foto}
                                fill
                                alt='fotoProducto'
                                style={{borderRadius: 10}}
                            />
                        </div>
                        <div className={styles.divComprar}>
                            <h1 className={styles.modalTitle}>{info.nomProducto}</h1>
                            <h2>Valor : ${info.precio}</h2>
                            <Button  colorScheme={"red"}
                                        onClick={() =>
                                            toast({
                                                title: 'Producto Agregado',
                                                description: "Se ha añadido este producto al carro de compras",
                                                status: 'success',
                                                duration: 3000,
                                                isClosable: true,
                                            })
                                        }>
                            Añadir al carrito
                            </Button>
                        </div>
                    </div>
                    <Divider />                    
                    <div className={styles.text}>
                        <h2>Descripción</h2>
                        <p>{info.desc}</p>
                        
                    </div>
                    
                </ModalBody>
            </ModalContent>
        </Modal>
        ) : null}
        </>
    )



}