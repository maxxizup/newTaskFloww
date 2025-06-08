import Header from "@/components/ui/Header.js";
import OAuthPanel from "@/components/ui/OAuthPanel.js";
import Divider from "@/components/ui/Divider.js";
import Link from "next/link";
import LoginForm from "@/components/signIn__components/LoginForm.js";

export default function Login () {

	return (
		<>
			{/* Левый блок с формой */}
			<div className={/* border */"h-full w-[700px]"}>

				{/* Контейнер для контента */}
				<div className={'mx-auto h-full max-w-[430px]'}>

					<Header />
					<div className='mt-[98px] text-center'>
						<h1 className='text-white text-[32px] leading-[36px] tracking-[0.04em]'>Рады видеть Вас снова!</h1>
					</div>
					<OAuthPanel />
					<Divider />
					<div className='h-[340px] w-full'>
						<LoginForm />
						<div className='w-full mt-[16px] flex justify-center items-center gap-[4px]'>
							<p className='text-[#B0B0B0] text-[12px]'>Нет аккаунта?</p>
							<Link href={'/register'}>
								<button
									className='w-[114px] h-[24px] bg-transparent border-[0.5px] border-[#DBDBDB] rounded-[4px] opacity-75 text-white text-[12px] transition ease-linear cursor-pointer hover:opacity-35'>Создать аккаунт
								</button>
							</Link>
						</div>
					</div>

				</div>
			</div>

			{/* Правый декоративный блок */}
			<div className={"h-full w-[700px] bg-[#707070]"}></div>
		</>
	)
}