import Header from "@/components/ui/Header";
import PsychoForm from "@/components/introduce__components/PsychoForm";

export default function Introduce() {
	return (
		<div className="h-full p-[20px] flex justify-center items-center">

			{/* 1й блок с приветствием и формой авторизации */}
			<div className={/* border */"h-full w-[700px]"}>

				{/* Container */}
				<div className={/* border border-red-600 */'mx-auto h-full max-w-[430px]'}>
					<Header />
					<div className='mt-[105px] text-center'>
						<h1 className='text-white text-[32px] leading-[36px] tracking-[0.04em]'>Давайте познакомимся поближе!</h1>
						<h3 className='text-white text-[16px] leading-[18px] tracking-[0.12em] mt-[24px]'>Всего 2 минуты — и ваш личный ассистент будет понимать, как вам помогать эффективнее. Чем точнее ответы, тем умнее будут подсказки! </h3>
					</div>
					<div className='h-[386px] w-full'>
						<PsychoForm/>
					</div>
				</div>
			</div>

			{/* 2й блок с картинками */}
			<div className={/*border*/"h-full w-[700px] bg-[#707070]"}></div>
		</div>
	);
}