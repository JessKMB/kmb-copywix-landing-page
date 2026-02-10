import { useCallback, useState } from "react";

export interface Product {
    id: string; 
    name: string; 
    quantity: number;
    isActive: boolean;
    price: number;
    description: string; 
    icon: any;
}

export interface ProductsOutbound {
    Icon: any;
    title: string;
    description: string;
    products: Product[];
}

import { 
    Headphones, MessageCircle, Mail, MessageSquare,
    PhoneOutgoing, DollarSign, Gift, CheckCircle
} from "lucide-react";

const initialInboundProducts: Product[] = [
    { id: 'chats', name: 'Chats', quantity: 0, isActive: false, price: 0.03,
        description: 'Atiende a tus clientes mediante chat en línea en tiempo real.',
        icon: MessageCircle
    },
    { id: 'callcenter', name: 'Call center', quantity: 0, isActive: false, price: 0.10,
        description: 'Gestión de llamadas entrantes con agentes especializados.',
        icon: Headphones
    },
    { id: 'email', name: 'Email', quantity: 0, isActive: false, price: 0.01,
        description: 'Mensajería a través de correo electrónico.',
        icon: Mail
    },
    { id: 'sms', name: 'Sms', quantity: 0, isActive: false, price: 0.05,
        description: 'Mensajería de texto para notificaciones rápidas y efectivas.',
        icon: MessageSquare
    },
];

const outboundChannels: Product[] = [
    { id: 'chats', name: 'Chats', quantity: 0, isActive: false, price: 0.03,
        description: 'Atiende a tus clientes mediante chat en línea en tiempo real.',
        icon: MessageCircle
    },
    { id: 'callcenter', name: 'Call center', quantity: 0, isActive: false, price: 0.10,
        description: 'Gestión de llamadas con agentes especializados.',
        icon: Headphones
    },
    { id: 'email', name: 'Email', quantity: 0, isActive: false, price: 0.01,
        description: 'Mensajería a través de correo electrónico.',
        icon: Mail
    },
    { id: 'sms', name: 'Sms', quantity: 0, isActive: false, price: 0.05,
        description: 'Mensajería de texto para notificaciones rápidas y efectivas.',
        icon: MessageSquare
    },
];

const initialOutboundProducts: ProductsOutbound[] = [
    {
        Icon: PhoneOutgoing,
        title: "Colocación de créditos",
        description: "Llamadas salientes para promoción y colocación de créditos.",
        products: outboundChannels.map(channel => ({ ...channel })) 
    },
    {
        Icon: DollarSign,
        title: "Cobranzas",
        description: "Gestión de llamadas para recuperación de cartera y pagos pendientes.",
        products: outboundChannels.map(channel => ({ ...channel }))
    },
    {
        Icon: Gift,
        title: "Fidelización y campañas",
        description: "Campañas de marketing para fidelizar clientes y aumentar retención.",
        products: outboundChannels.map(channel => ({ ...channel }))
    },
    {
        Icon: CheckCircle,
        title: "Verificación de datos",
        description: "Llamadas para verificar información personal, laboral o crediticia.",
        products: outboundChannels.map(channel => ({ ...channel }))
    }
];

// ---------------- HOOK ----------------
const useSimulator = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [inboundProducts, setInboundProducts] = useState<Product[]>(initialInboundProducts);
    const [outboundProducts, setOutboundProducts] = useState<ProductsOutbound[]>(initialOutboundProducts);

    // Paso siguiente
    const onNextStep = useCallback((page?: number) => {
        setCurrentStep(prev => page ?? prev + 1);
    }, []);

    // ---------- INBOUND ----------
    const onActiveInboundProduct = useCallback((productId: string) => {
        setInboundProducts(prev =>
            prev.map(p =>
                p.id === productId ? { ...p, isActive: !p.isActive } : p
            )
        );
    }, []);

    const onChangeInboundQuantity = useCallback((productId: string, quantity: number) => {
        setInboundProducts(prev =>
            prev.map(p =>
                p.id === productId ? { ...p, quantity } : p
            )
        );
    }, []);

    // ---------- OUTBOUND ----------
    const onActiveOutboundProduct = useCallback((productTitle: string, channelId: string) => {
        setOutboundProducts(prev =>
            prev.map(p =>
                p.title === productTitle
                    ? {
                        ...p,
                        products: p.products.map(ch =>
                            ch.id === channelId ? { ...ch, isActive: !ch.isActive } : ch
                        )
                    }
                    : p
            )
        );
    }, []);

    const onChangeOutboundQuantity = useCallback((productTitle: string, channelId: string, quantity: number) => {
        setOutboundProducts(prev =>
            prev.map(p =>
                p.title === productTitle
                    ? {
                        ...p,
                        products: p.products.map(ch =>
                            ch.id === channelId ? { ...ch, quantity } : ch
                        )
                    }
                    : p
            )
        );
    }, []);

    return {
        currentStep,
        inboundProducts,
        outboundProducts,
        onNextStep,
        onActiveInboundProduct,
        onChangeInboundQuantity,
        onActiveOutboundProduct,
        onChangeOutboundQuantity
    };
};

export default useSimulator;
