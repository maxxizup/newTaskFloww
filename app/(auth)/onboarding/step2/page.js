import Header from "@/components/ui/Header.js";
import MyInput from "@/components/ui/MyInput.js";
import MyButton from "@/components/ui/MyButton.js";
import Image from "next/image";
import Link from "next/link";

export default function OnboardingStep2 () {

	return (
		<>
			{/* Левый блок с формой */}
			<div className={"h-full w-[700px]"}>

				{/* Контейнер для контента */}
				<div className={'mx-auto h-full max-w-[430px]'}>

					<Header />
					<div className='mt-[98px] text-center'>
						<h1 className='text-white text-[32px] leading-[36px] tracking-[0.04em]'>Создай свое первое рабочее пространство</h1>
					</div>
					<div className='h-[304px] w-full px-[20px] mt-[40px] flex flex-col gap-[20px]'>
						<MyInput
							height={44}
							width={390}
							placeholder={'Как назовем Ваш первый проект?'}
						/>
						<div className='w-full h-[176px]'>
							<p className='text-white text-[14px] leading-[16px]'>Какую структуру вы выберете для управления своим проектом? Ее можно изменить позже</p>
							<div className='flex flex-wrap gap-[8px] mt-[8px]'>
								<button className='h-[64px] w-[191px] bg-[#707070] rounded-[8px] flex items-center justify-center gap-[8px] text-white cursor-pointer hover:opacity-75 focus:opacity-55'>
									Список
									<Image
										width={32}
										height={32}
										src={'/uim_list-ul.svg'}
										alt={'list-ul__icon'}
									/>
								</button>
								<button className='h-[64px] w-[191px] bg-[#707070] rounded-[8px] flex items-center justify-center gap-[8px] text-white cursor-pointer hover:opacity-75 focus:opacity-55'>
									Аналитика
									<Image
										width={32}
										height={32}
										src={'/uim_graph-bar.svg'}
										alt={''}
									/>
								</button>
								<button className='h-[64px] w-[191px] bg-[#707070] rounded-[8px] flex items-center justify-center gap-[8px] text-white cursor-pointer hover:opacity-75 focus:opacity-55'>
									Хронология
									<Image
										width={32}
										height={32}
										src={'/uim_horizontal-align-left.svg'}
										alt={''}
									/>
								</button>
								<button className='h-[64px] w-[191px] bg-[#707070] rounded-[8px] flex items-center justify-center gap-[8px] text-white cursor-pointer hover:opacity-75 focus:opacity-55'>
									Календарь
									<Image
										width={32}
										height={32}
										src={'/uim_calendar.svg'}
										alt={''}
									/>
								</button>
							</div>
						</div>
						<Link href={'/dashboard'}>
							<MyButton
								height={44}
								width={390}
							>
								Перейти к работе
							</MyButton>
						</Link>
					</div>

				</div>
			</div>

			{/* Правый декоративный блок */}
			<div className={"h-full w-[700px] bg-[#707070]"}></div>
		</>
	);
}