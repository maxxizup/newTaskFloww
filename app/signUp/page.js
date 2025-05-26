import Header from "@/components/ui/Header";
import Divider from "@/components/ui/Divider";
import Link from "next/link";
import RegistrationForm from "@/components/signUp__components/RegistrationForm";
import OAuthPanel from "@/components/ui/OAuthPanel";

export default function signUp() {
    return (
        <div className="h-full p-[20px] flex justify-center items-center">

            {/* 1й блок с приветствием и формой авторизации */}
            <div className={/* border */"h-full w-[700px]"}>

                {/* Container */}
                <div className={/* border border-red-600 */'mx-auto h-full max-w-[430px]'}>
                    <Header />
                    <div className='mt-[98px] text-center'>
                        <h1 className='text-white text-[32px] leading-[36px] tracking-[0.04em]'>Добро пожаловать!</h1>
                        <h3 className='text-white text-[16px] leading-[18px] tracking-[0.12em] mt-[24px]'>Приветствуем Вас в TaskFloww! Введите информацию о себе или выберите способ входа. </h3>
                    </div>
                    <OAuthPanel />
                    <Divider />
                    <div className='h-[340px] w-full'>
                        <RegistrationForm />
                        <div className='w-full mt-[16px] flex justify-center items-center gap-[4px]'>
                            <p className='text-[#B0B0B0] text-[12px]'>Уже есть аккаунт?</p>
                            <Link href={'/login'}>
                                <button
                                    className='w-[52px] h-[24px] bg-transparent border-[0.5px] border-[#DBDBDB] rounded-[4px] opacity-75 text-white text-[12px] transition ease-linear cursor-pointer hover:opacity-35'>Войти
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2й блок с картинками */}
            <div className={/*border*/"h-full w-[700px] bg-[#707070]"}></div>
        </div>
    );
}
