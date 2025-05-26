import NavPanel from "@/components/ui/NavPanel";
import WSHeader from "@/components/workspace__components/WSHeader";
import Image from "next/image";

export default function Workspace () {
	return (
		<div className='h-full p-[20px] flex gap-[40px]'>
			<NavPanel/>
			<div className='h-full w-full py-[20px] flex flex-col justify-between gap-[40px]'>
				<WSHeader />
				<div className='border border-teal-900 w-full h-full flex flex-col gap-[45px]'>
					<div className='w-full h-[192px] flex flex-col justify-center gap-[8px]'>
						<p className='text-white text-[20px] leading-[24px] tracking-[0.04em]'>Сегодня 18 апреля</p>
						<h2 className='text-white text-[36px] leading-[40px] tracking-[0.04em]'>Добрый вечер, <br/>Игорь</h2>
					</div>
					<div className='border border-red-600 w-full h-[430px] flex flex-col gap-[20px]'>
						<div className='w-full h-[36px] flex justify-between'>
							<div className='flex justify-between gap-[8px]'>
								<button className='h-[36px] w-[141px] bg-[#B0B0B0] text-white rounded-[8px] hover:opacity-75 cursor-pointer focus:bg-[#6361FF]'>Все проекты</button>
								<button className='h-[36px] w-[173px] bg-[#B0B0B0] text-white rounded-[8px] hover:opacity-75 cursor-pointer focus:bg-[#6361FF]'>Личные проекты</button>
								<button className='h-[36px] w-[124px] bg-[#B0B0B0] text-white rounded-[8px] hover:opacity-75 cursor-pointer focus:bg-[#6361FF]'>TaskFloww</button>
							</div>
							<div className='h-full w-[216px] flex gap-[8px] items-center'>
								<Image
									src={'./arcticons_killapps.svg'}
									width={24}
									height={24}
									alt={'Plus'}
								/>
								<button className='h-full w-[184px] bg-[#707070] rounded-[24px] text-white hover:opacity-75 cursor-pointer'>Настроить проект</button>
							</div>
						</div>
						<div className='h-[383px] w-full flex gap-[10px] justify-between'>
							<div className='h-full w-[620px] border-[2px] rounded-[8px] p-[20px] border-dashed border-[#DBDBDB]'>
								<div className='h-[44px] w-full flex justify-between'>
									<div className='h-full w-[188px] flex gap-[20px] items-center'>
										<Image
											src={'./mdi-light_account.svg'}
											width={44}
											height={44}
											alt={'Analytics'}
										/>
										<h4 className='text-[20px] leading-[24px] text-white'>Аналитика</h4>
									</div>
									<div className='h-[32px] w-[175px] bg-[#B0B0B0] rounded-[32px] flex justify-center items-center'>
										<button className='h-full w-[87.5px] text-[16px] text-white focus:bg-[#707070] rounded-[32px] hover:opacity-85 cursor-pointer'>Неделя</button>
										<button className='h-full w-[87.5px] text-[16px] text-white focus:bg-[#707070] rounded-[32px] hover:opacity-85 cursor-pointer'>Месяц</button>
									</div>
								</div>
								<div className='py-[30px]'>
									<Image
										src='./Frame 291.svg'
										width={579}
										height={250}
										alt={'Frame'}
									/>
								</div>
							</div>
							<div className='h-full w-[460px] border-[2px] rounded-[8px] p-[20px] border-dashed border-[#DBDBDB]'>
								<div className='h-[44px] w-[188px] flex gap-[20px] items-center'>
									<Image
										src={'./mdi-light_format-list-numbered.svg'}
										width={44}
										height={44}
										alt={'Tasks'}
									/>
									<h4 className='text-[20px] leading-[24px] text-white'>Задачи</h4>
								</div>
								<div className='mt-[20px]'>
									<Image
										src={'./Frame 289.svg'}
										width={270}
										height={230}
										alt={'Frame Tasks'}
									/>
								</div>
							</div>
							<div className='h-full w-[460px] border-[2px] rounded-[8px] p-[20px] border-dashed border-[#DBDBDB]'>
								<div className='h-[44px] w-[188px] flex gap-[20px] items-center'>
									<Image
										src={'./mdi-light_members.svg'}
										width={44}
										height={44}
										alt={'Members'}
									/>
									<h4 className='text-[20px] leading-[24px] text-white'>Участники</h4>
								</div>
								<div className='w-full h-[146px] mt-[20px]'>
									<input type="text" placeholder='Найти кого-то' className='w-full h-[44px] bg-transparent border text-center text-white border-[#DBDBDB] rounded-[24px]'/>
									<div className='w-full h-[92px] flex items-center gap-[10px]'>
										<Image
											src={'./solar_paw-broken.svg'}
											width={51}
											height={51}
											alt={'Ava'}
										/>
										<div>
											<h3 className='text-white text-[16px] leading-[24px]'>Кирюха Денисович</h3>
											<h4 className='text-[#DBDBDB] text-[16px] leading-[24px]'>SMM</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}