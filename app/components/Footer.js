'use client';

export default function Footer() {
    return (
        <div className="w-full bg-[#151716] mt-10">
            <div className="container flex flex-col mx-auto">
                <div className="flex flex-col items-center w-full my-10">
                    <div className="flex flex-col items-center gap-6 mb-8">
                        <div className="flex items-center gap-8">
                            <a href="javascript:void(0)" className="text-black hover:text-grey-900">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.6348 20.7273V12.766H16.3582L16.7668 9.66246H13.6348V7.68128C13.6348 6.78301 13.8881 6.17085 15.2029 6.17085L16.877 6.17017V3.39424C16.5875 3.35733 15.5937 3.27273 14.437 3.27273C12.0216 3.27273 10.368 4.71881 10.368 7.37391V9.66246H7.63636V12.766H10.368V20.7273H13.6348Z" fill="#A3A8A3"></path>
                                </svg>
                            </a>
                            <a href="javascript:void(0)" className="text-[#A3A8A3] hover:text-grey-900">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                                    <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z" fill="#A3A8A3"></path>
                                </svg>
                            </a>
                            <a href="javascript:void(0)" className="text-[#A3A8A3] hover:text-grey-900">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 18" fill="none">
                                    <path d="M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81004 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81004 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z" fill="currentColor"></path>
                                </svg>
                            </a>
                            <a href="javascript:void(0)" className="text-[#A3A8A3] hover:text-grey-900">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.60063 2.18182H16.3991C19.3873 2.18182 21.8183 4.61281 21.8182 7.60074V16.3993C21.8182 19.3872 19.3873 21.8182 16.3991 21.8182H7.60063C4.6127 21.8182 2.18182 19.3873 2.18182 16.3993V7.60074C2.18182 4.61281 4.6127 2.18182 7.60063 2.18182ZM16.3993 20.0759C18.4266 20.0759 20.0761 18.4266 20.0761 16.3993H20.0759V7.60074C20.0759 5.57348 18.4265 3.92405 16.3991 3.92405H7.60063C5.57336 3.92405 3.92405 5.57348 3.92405 7.60074V16.3993C3.92405 18.4266 5.57336 20.0761 7.60063 20.0759H16.3993ZM6.85714 12.0001C6.85714 9.16424 9.16418 6.85714 12 6.85714C14.8358 6.85714 17.1429 9.16424 17.1429 12.0001C17.1429 14.8359 14.8358 17.1429 12 17.1429C9.16418 17.1429 6.85714 14.8359 6.85714 12.0001ZM8.62798 12C8.62798 13.8593 10.1407 15.3719 12 15.3719C13.8593 15.3719 15.372 13.8593 15.372 12C15.372 10.1406 13.8594 8.6279 12 8.6279C10.1406 8.6279 8.62798 10.1406 8.62798 12Z" fill="currentColor"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="sticky mb-6 items-center">
                        <p className="text-base font-normal leading-7 text-center text-[#daa520]">
                        &copy; 2024 Tagline Tattoo Studio. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}