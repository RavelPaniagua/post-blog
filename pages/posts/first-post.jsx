import Link from 'next/link'; //link para reeplazar por el a href porque es mas potente
import Image from 'next/image';//se usa para que next cargue la imagen tomando en cuenta muchos factores
import Head from 'next/head';//se usa para personalizar nuestro head 
import Script from 'next/script';//se utiliza para hacer la carga de script de terceros
import Layout from '../../components/layout';

export default function FirstPost(){
    return (<Layout>
    <Head>
        <title>First Post</title>
    </Head>
    <Script
    src="https://connect.facebook.net/en_US/sdk.js"
    strategy="lazyOnload"//controla cuando debe cargarse el sclript de terceros. con el valor lazyOnload le dice a next que cargue el script de forma perezosa durante el tiempo de inactividad y
    //onload para que lo ejecute inmediatamente se cargue
    onLoad={() =>
      console.log(`script loaded correctly, window.FB has been populated`)
    }
    />
    <h1>First Post</h1>
    <h1><Link href="/">Atras</Link></h1>
    <Image
    src="/images/perfil.jpg"
    height={144}
    width={144}
    alt="Name"
    />
    
    
    </Layout>
    );
}