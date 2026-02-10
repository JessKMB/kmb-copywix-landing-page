export interface BotonQrText {
    title: string;
    list: string[];
    cta: {
        label: string;
        href:string;
    };
}
export interface  Content{
    title: string;
    content: string[];
}

export interface ContactText {
    title: string;
    address: Content
    phone: Content;
    email: Content
}

export interface New {
    title: string;
    content: string;
    img: any;
    href: string;
    hrefLabel?: string;
    date: string;
}
export interface NewsText {
    news:New[];
}


export const BOTON_QR_TEXT:BotonQrText = {
    title: "BOTÓN QR",
    list: [
        "<strong>Kimobill y Deuna</strong> tienen una alianza para facilitar la inclusión financiera del Ecuador",
        "Los clientes de cualquier institución financiera podrán pagar con QR en <strong>más de 500 mil comercios</strong> de Deuna",
        "El QR de Deuna podrá habilitarse en el <strong>aplicativo móvil</strong> de la institución financiera",
        "Esto permitirá incrementar el uso de los <strong>canales digitales</strong> de la institución financiera"
    ],
    cta: { label: "Contáctanos", href:"https://wa.me/+593984897877"}
}

export const CONTACT_CENTER_TEXT: BotonQrText = {
    title: "CONTACT CENTER",
    list: [
        "<string>Conecta</string> a tu Institución Financiera en menos de 48 horas un <strong>canal de atención 24/7</strong> para tus clientes: Chat, Redes Sociales y Llamadas",
        "Permite que tus clientes puedan autogestionar sus solicitudes o recibir una <strong>atención personalizada de calidad</strong>",
        "Realiza acciones comerciales y de cobranza <strong>de manera efectiva</strong>",
        "Plataformas complementarias para un excelente servicio: <strong>Plataforma de quejas y reclamos</strong>"
    ],
    cta: { label: "Contáctanos", href: "https://wa.me/+593984897877" }
}



export const CONTACT_TEXT: ContactText = {
    title: "CONTACTO",
    address: {
        title: "Dirección",
        content: ['Ruiz de Castilla N30-13 y Pascual de Andagoya, Quito'],
    },
    phone: {
        title: "Teléfonos",
        content: ['02 3957335', '+593 99 802 1293', '+593 98 489 7877'],
    },
    email: {
        title: "Email",
        content: ['info@kimobill.com']
    }
};

import New1 from '../../../assets/news/new1.jpg';
import New2 from '../../../assets/news/new2.jpg';

export const NEWS_TEXT: NewsText = {
    news: [
        {
            title: "Revista Ekos",
            content: "El camino hacia un futuro sin dinero en efectivo",
            img: New1,
            href: "https://ekosnegocios.com/articulo/el-camino-hacia-un-futuro-sin-dinero-en-efectivo",
            date: "Mayo 2024",
            hrefLabel: "Ver noticia"
        },
        {
            content: "Deuna integrará botón de pagos QR en más de 10 cooperativas de ahorro y crédito de Ecuador",
            title: "Primicias",
            img: New2,
            href: "https://www.primicias.ec/economia/billetera-deuna-boton-pagos-qr-cooperativas-ahorro-credito-ecuador-77461/",
            date: "Mayo 2024",
            hrefLabel: "Ver noticia"
        }
    ]
};


export const CLIENTS_TEXT = {
    instituciones:"+80",
    cooperativas:"74",
    mutualistas:"3",
    bancos:"4"
}