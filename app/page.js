import MyButton from "@/components/ui/MyButton";
import Link from "next/link";

export default function Home() {
    return (
        <div className='h-full p-[20px] flex flex-col items-center justify-center gap-[15px]'>
            <div className='border border-[#6361FF] rounded-[16px] w-[400px] h-[150px] text-white font-bold text-center flex items-center bg-[#4A4A4A]'>Приветствуем вас на главной странице TaskFloww! К сожалению она еще не готова, мы ищо верстаем. Но вы можете посетить другие страницы, которые мы уже для вас сделали!)</div>
            <Link href={'/register'}>
                <MyButton width={226} height={64} fontSize={32}>Sign Up</MyButton>
            </Link>
        </div>
    );
}
