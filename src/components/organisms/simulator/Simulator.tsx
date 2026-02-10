import StepInbound from './components/StepInbound';
import StepOutbound from './components/StepOutbound';
import Results from './components/Result';
import useSimulator from './hooks/useSimulator';

export default function Simulator() {

    const { 
        currentStep, 
        inboundProducts, 
        outboundProducts, 
        onNextStep, 
        onActiveInboundProduct,
        onChangeInboundQuantity,
        onActiveOutboundProduct,
        onChangeOutboundQuantity
    } = useSimulator();
    return (
        <div className="
        flex flex-col items-center justify-center
        bg-black min-h-screen w-screen 
        text-white pt-[150px]!
        p-6!
        ">
            <div className='md:max-w-[80%] sm:p-10! max-w-max p-1!'>
                {currentStep === 1 && (
                    <StepInbound 
                        products={inboundProducts}
                        onActiveInboundProduct={onActiveInboundProduct}
                        onChangeInboundQuantity={onChangeInboundQuantity}
                        onNextStep={onNextStep}
                    />
                )}
                
                {currentStep === 2 && (
                    <StepOutbound 
                        products={outboundProducts}
                        onActiveOutboundProduct={onActiveOutboundProduct}
                        onChangeOutboundQuantity={onChangeOutboundQuantity}
                        onNextStep={onNextStep}
                    />
                )}
                
                {currentStep === 3 && (
                    <Results
                        inboundProducts={inboundProducts}
                        outboundProducts={outboundProducts}
                        onRestart={ () => onNextStep(1) }
                    />
                )}  
            </div>
        </div>
    );
}