import type { ProductsOutbound } from "../hooks/useSimulator";
import ProductComponent from "./Product";
import { PhoneOutgoing } from "lucide-react";
import "./styles.css"

interface StepOutboundProps {
    products: ProductsOutbound[];
    onNextStep: (page?: number) => void;
    onActiveOutboundProduct: (productTitle: string, channelId: string) => void;
    onChangeOutboundQuantity: (productTitle: string, channelId: string, quantity: number) => void;
}


const StepOutbound = ({products, onNextStep, onActiveOutboundProduct, onChangeOutboundQuantity}:StepOutboundProps) => {
    return (
        <div className="gap-10 flex flex-col animate-step-in">
            
            <div className="text-center flex flex-col items-center justify-center gap-4">
                <div className="bg-blue-200 border-blue-600 border-3 rounded-full p-3! spin-x">
                    <PhoneOutgoing className="w-8 h-8 text-blue-600" /> 
                </div>
                <p className="text-white text-3xl text-center md:text-4xl font-semibold leading-snug">
                    2. Selecciona los productos que deseas incluir en tu servicio{" "}
                    <span className="text-blue-400 font-bold">Outbound</span>
                </p>
            </div>

            <div className="flex flex-col gap-4">
                {products.map((group) => {
                    const { title, Icon, products: productList, description } = group
                    return (
                        <div key={title} className="flex flex-col gap-4">
                            <div className="flex gap-4">
                                <div className="bg-blue-200 border-blue-600 border-3 rounded-full p-3! spin-x h-min">
                                    <Icon className="w-5 h-5 text-blue-500"/>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-blue-500">{title}</span>
                                    <p className="text-gray-300">{description}</p>
                                </div>
                            </div>
                            <div className="flex w-full flex-col gap-2">
                                {productList.map(product => (
                                    <ProductComponent
                                        key={product.id}
                                        product={product}
                                        onActiveProduct={(productId:any) => onActiveOutboundProduct(title, productId)}
                                        onChangeQuantity={(productId:any, quantity:any) => onChangeOutboundQuantity(title, productId, quantity)}
                                    />
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>

            <button
                className="
                    p-4! bg-blue-500 hover:bg-blue-600 
                    text-white font-semibold 
                    rounded-xl shadow-md 
                    transition-all duration-200
                    cursor-pointer
                "
                onClick={() => onNextStep(3)}
            >
                Simular →
            </button>
        </div>
    )
}

export default StepOutbound
