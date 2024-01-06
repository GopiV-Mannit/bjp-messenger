import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'
import { toast } from 'react-toastify';
import axios from 'axios'
export const Subscription = () => {
    const navigate = useNavigate();
    // const navigate = useNavigate();
    const [selectedPack, setSelectedPack] = useState(null);
    const [subscriptionError, setSubscriptionError] = useState(null);
    const handlesubscribe = async () => {
        toast.warning('Under Construction', { autoClose: 1500 });
    }
    const handlePaymentSuccess = async (token) => {
        try {
            const response = await axios.post('/api/subscriptions', {
                token: token.id,
                packId: selectedPack.id,
                email: token.email,
                name: token.card.name,
            });
            // console.log(response.data);
        } catch (error) {
            console.error(error);
            setSubscriptionError('Failed to cnreate subscription. Please try again later.');
        }
    };
    const packs = [
        {
            id: 'basic',
            name: 'Basic Pack',
            description: 'Get access to basic features for $10/month',
            price: 400, // price is in cents
        },
        {
            id: 'standard',
            name: 'Premium Pack',
            description: 'Get access to premium features for $20/month',
            price: 500,
        },
        {
            id: 'premium',
            name: 'Ultimate Pack',
            description: 'Get access to all features for $30/month',
            price: 600,
        },
    ];
    return (
        <div  >
            <div className='flex flex-col w-full h-[650px] space-y-[40px] justify-center mt-10 items-center '>

                <div className='  flex flex-row gap-10 justify-around items-center '>
                    <div className='flex flex-col w-[300px] h-[200px] items-center'>
                        <h1 className='w-[65%]  text-[20px] rounded-t-2xl bg-[#d1f542] text-center font-semibold flex flex-col justify-center text-black '>Onboarding</h1>
                        <div className="w-[300px] rounded-3xl  h-[200px] flex flex-col items-center justify-center font-semibold space-y-1 p-[1.5px] border-4 bg-white">
                            <h1>Platform Charge ₹ 1000</h1>
                            <h2>Send Upto  <strong className='text-[#fb660d]'>300</strong> free messages</h2>
                        </div>
                    </div>
                    <div className='w-[300px] h-[200px] flex flex-col items-center'  >
                        <h1 className='w-[65%] h-[15%] text-[20px] rounded-t-2xl bg-[#00a650] text-center font-semibold flex flex-col justify-center text-white'>Silver</h1>
                        <div className='w-full h-full flex flex-col text-black items-center rounded-3xl text-center gap-5 border-4 bg-white'>
                            <h1 className='text-xl mt-5'>₹ 500</h1>

                            <p className='text-[14px] text-center px-10'>✅ Send up to <strong>500</strong> WhatsApp messages</p>


                            <div className="mb-3 bg-[#00a650] p-[5px] rounded-[10px] w-[100px]">
                                <button className="text-[#fff] text-[16px] font-semibold " onClick={handlesubscribe}>Subscribe</button>
                            </div>

                        </div>
                        <stripe-buy-button
                            buy-button-id="buy_btn_1MqVXWSFfgArvhIU8boz1Fhu"
                            publishable-key="pk_test_51MpDzhSFfgArvhIUpVLWDAjh4IRaSSepideHNYxjgosLVRtakzxDjJkkZvyuNo43dOo3f9KiKuLiJSDtMJpTXMvQ00NV0So6nP"
                        >
                        </stripe-buy-button>
                    </div>
                    <div className='w-[300px] h-[200px] flex flex-col items-center'  >
                        <h1 className='w-[65%] h-[15%] text-[20px] rounded-t-2xl bg-[#00a650] font-semibold text-center flex flex-col justify-center text-white'>Gold</h1>
                        <div className='w-full h-full flex flex-col text-black items-center rounded-3xl text-center gap-5 border-4 bg-white'>
                            <h1 className='text-xl mt-5'>₹ 1000</h1>

                            <p className='text-[14px] text-center px-10'>✅ Send up to <strong>1100</strong> WhatsApp messages</p>


                            <div className="mb-3 bg-[#00a650] p-[5px] rounded-[10px] w-[100px]">
                                <button className="text-[#fff] text-[16px] font-semibold " onClick={handlesubscribe}>Subscribe</button>
                            </div>

                        </div>
                        <stripe-buy-button
                            buy-button-id="buy_btn_1MqVXWSFfgArvhIU8boz1Fhu"
                            publishable-key="pk_test_51MpDzhSFfgArvhIUpVLWDAjh4IRaSSepideHNYxjgosLVRtakzxDjJkkZvyuNo43dOo3f9KiKuLiJSDtMJpTXMvQ00NV0So6nP"
                        >
                        </stripe-buy-button>
                    </div>
                </div>
                <div className='text-white flex lg:flex-row sm:flex-col justify-around gap-10'>
                    <div className='w-[300px] h-[200px] flex flex-col items-center'  >
                        <h1 className='w-[65%] h-[15%] text-[20px] font-semibold rounded-t-2xl bg-[#00a650] text-center  text-white flex flex-col justify-center'>Platinum</h1>
                        <div className='w-full h-full flex flex-col text-black  items-center rounded-3xl text-center gap-5 border-4 bg-white'>
                            <h1 className='text-xl mt-5'>₹ 2500</h1>

                            <p className='text-[14px] text-center px-10'>✅ Send up to <strong>3000</strong> WhatsApp messages </p>

                            <div className="mb-3 bg-[#00a650] p-[5px] rounded-[10px] w-[100px]">
                                <button className="text-[#fff] text-[16px] font-semibold " onClick={handlesubscribe}>Subscribe</button>
                            </div>
                        </div>

                    </div>
                    <div className='w-[300px] h-[200px] flex flex-col items-center'  >
                        <h1 className='w-[65%] h-[15%] text-[20px] rounded-t-2xl bg-[#00a650] text-center font-semibold flex flex-col justify-center text-white'>Diamond</h1>
                        <div className=' w-full h-full flex flex-col text-black items-center rounded-3xl text-center gap-5  border-4 bg-white'>
                            <h1 className='text-xl mt-5'>₹ 5000</h1>

                            <p className='text-[14px] text-center px-10'>✅ Send up to <strong>6500</strong> WhatsApp messages </p>

                            <div className="mb-3 bg-[#00a650] p-[5px] rounded-[10px] w-[100px]">
                                <button className="text-[#fff] text-[16px] font-semibold " onClick={handlesubscribe}>Subscribe</button>
                            </div>
                        </div>
                        <stripe-buy-button
                            buy-button-id="buy_btn_1MqWZFSFfgArvhIU9jkT4VkS"
                            publishable-key="pk_test_51MpDzhSFfgArvhIUpVLWDAjh4IRaSSepideHNYxjgosLVRtakzxDjJkkZvyuNo43dOo3f9KiKuLiJSDtMJpTXMvQ00NV0So6nP"
                        >
                        </stripe-buy-button>
                    </div>
                    <div className='w-[300px] h-[200px] flex flex-col items-center'  >
                        <h1 className='w-[65%] h-[15%] text-[20px] rounded-t-2xl bg-[#00a650] text-center flex flex-col font-semibold  justify-center text-white'>VIP</h1>
                        <div className='w-full h-full flex flex-col text-black items-center rounded-3xl text-center gap-5 border-4 bg-white'>
                            <h1 className='text-xl mt-5'>₹ 10000</h1>

                            <p className='text-[14px] text-center px-10'>✅ Send up to <strong>15000</strong> WhatsApp messages</p>
                            <div className="mb-3 bg-[#00a650] p-[5px] rounded-[10px] w-[100px]">
                                <button className="text-[#fff] text-[16px] font-semibold " onClick={handlesubscribe}>Subscribe</button>
                            </div>

                        </div>
                        <stripe-buy-button
                            buy-button-id="buy_btn_1MqVXWSFfgArvhIU8boz1Fhu"
                            publishable-key="pk_test_51MpDzhSFfgArvhIUpVLWDAjh4IRaSSepideHNYxjgosLVRtakzxDjJkkZvyuNo43dOo3f9KiKuLiJSDtMJpTXMvQ00NV0So6nP"
                        >
                        </stripe-buy-button>
                    </div>

                    {selectedPack && (
                        <StripeCheckout
                            stripeKey="pk_test_51MpDzhSFfgArvhIUpVLWDAjh4IRaSSepideHNYxjgosLVRtakzxDjJkkZvyuNo43dOo3f9KiKuLiJSDtMJpTXMvQ00NV0So6nP"
                            token={handlePaymentSuccess}
                            amount={selectedPack.price}
                            name={selectedPack.name}
                            description={selectedPack.description}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
