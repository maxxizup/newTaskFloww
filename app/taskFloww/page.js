"use client"

import NavPanel from "@/components/ui/NavPanel";
import WSHeader from "@/components/workspace__components/WSHeader";
import {useEffect, useState} from "react";

export default function TaskFloww() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const storedUser = localStorage.getItem("currentUser");
			if (storedUser) {
				setUser(JSON.parse(storedUser));
			}
		}
	}, []);

	return (
		<div className='h-full p-[20px] flex gap-[40px]'>
			<NavPanel/>
			<div className='h-full w-full py-[20px] flex flex-col justify-between gap-[40px]'>
				<WSHeader user={user} />
				<div className='w-full h-full flex flex-col gap-[45px] border px-[10px]'>
					<div className='w-full h-[30px] flex gap-[10px]'>
						<button
							className='h-full flex items-center justify-center bg-[#707070] rounded-[20px] text-center px-[20px] text-white'>My
							workspace
						</button>
						<div className='text-white h-[24px] w-[8px]'>/</div>
						<button
							className='h-full flex items-center justify-center bg-[#707070] rounded-[20px] py-[4px] px-[20px] text-white'>Проекты
						</button>
						<div className='text-white h-[24px] w-[8px]'>/</div>
						<button
							className='h-full flex items-center justify-center bg-[#707070] rounded-[20px] py-[4px] px-[20px] text-white'>ProjectName
						</button>
					</div>
					<div className='w-full h-[64px]'>
						<div className='flex justify-between'>
							<div className=''>
								<h2 className='text-white text-[32px] tracking-[0.04em]'>Разработка проекта
									ProjectName</h2>
								<div className='w-full flex gap-[10px] px-[3px]'>
									<span
										className='text-white text-[12px] hover:opacity-75 cursor-pointer'>Приложение</span>
									<span
										className='text-white text-[12px] hover:opacity-75 cursor-pointer'>Вебсайт</span>
									<span
										className='text-white text-[12px] hover:opacity-75 cursor-pointer'>Разработка</span>
									<span
										className='text-white text-[12px] hover:opacity-75 cursor-pointer'>Маркетинг</span>
								</div>
							</div>
							<div>
								<button
									className='text-white bg-[#B0B0B0] w-[56px] h-[40px] rounded-[8px] flex justify-center cursor-pointer hover:opacity-75 hover:bg-[#6361FF] transition ease-linear'>
									<img src={'./arcticons_plus.svg'} alt={'Add'} width={24} height={24}/></button>
							</div>
						</div>
					</div>
					<div className='border w-full h-[540px] flex flex-col gap-[20px]'>
						<div className='w-full h-[32px] flex justify-between'>
							<div
								className='h-[32px] w-[430px] bg-[#B0B0B0] rounded-[32px] flex justify-between items-center px-[15px]'>
								<button
									className='h-full w-[60px] text-[16px] text-white focus:bg-[#707070] rounded-[32px] hover:opacity-85 cursor-pointer'>Задачи
								</button>
								<button
									className='h-full w-[90px] text-[16px] text-white focus:bg-[#707070] rounded-[32px] hover:opacity-85 cursor-pointer'>Timeline
								</button>
								<button
									className='h-full w-[90px] text-[16px] text-white focus:bg-[#707070] rounded-[32px] hover:opacity-85 cursor-pointer'>Аналитика
								</button>
								<button
									className='h-full w-[90px] text-[16px] text-white focus:bg-[#707070] rounded-[32px] hover:opacity-85 cursor-pointer'>Хронология
								</button>
							</div>
							<div
								className='h-full w-[94px] flex items-center gap-[8px] cursor-pointer hover:opacity-85'>
								<img src="./solar_list-bold-duotone.svg" alt="Filters"/>
								<p className='text-white text-[14px] leading-[24px]'>Фильтры</p>
							</div>
						</div>
						<div className='w-full h-[500px] flex justify-between'>
							<div className='border border-white border-dashed h-full w-[420px] rounded-[8px] py-[8px] px-[10px]'>
								<div className='bg-[#B0B0B0] w-full h-[40px] rounded-[8px] flex justify-between items-center px-[20px] text-white text-[14px]'>
									<p>К выполнению</p>
									<img src="./arcticons_conversations.svg" alt="settings"/>
								</div>
								<button className='flex justify-center items-center cursor-pointer hover:bg-[#6361FF] transition ease-linear mt-[10px] text-white border border-dashed border-white w-full h-[40px] w-full h-[40px] rounded-[8px] flex justify-between items-center px-[20px] text-white text-[14px]'>
									<img src="./arcticons_plus.svg" alt="add task"/>
								</button>
							</div>
							<div
								className='border border-white border-dashed h-full w-[420px] rounded-[8px] py-[8px] px-[10px]'>
								<div
									className='bg-[#B0B0B0] w-full h-[40px] rounded-[8px] flex justify-between items-center px-[20px] text-white text-[14px]'>
									<p>В процессе</p>
									<img src="./arcticons_conversations.svg" alt="settings"/>
								</div>
								<button className='flex justify-center items-center cursor-pointer hover:bg-[#6361FF] transition ease-linear mt-[10px] text-white border border-dashed border-white w-full h-[40px] w-full h-[40px] rounded-[8px] flex justify-between items-center px-[20px] text-white text-[14px]'>
									<img src="./arcticons_plus.svg" alt="add task"/>
								</button>
							</div>
							<div
								className='border border-white border-dashed h-full w-[420px] rounded-[8px] py-[8px] px-[10px]'>
								<div
									className='bg-[#B0B0B0] w-full h-[40px] rounded-[8px] flex justify-between items-center px-[20px] text-white text-[14px]'>
									<p>Готово</p>
									<img src="./arcticons_conversations.svg" alt="settings"/>
								</div>
								<button className='flex justify-center items-center cursor-pointer hover:bg-[#6361FF] transition ease-linear mt-[10px] text-white border border-dashed border-white w-full h-[40px] w-full h-[40px] rounded-[8px] flex justify-between items-center px-[20px] text-white text-[14px]'>
									<img src="./arcticons_plus.svg" alt="add task"/>
								</button>
							</div>
							<div
								className='border border-white border-dashed h-full w-[420px] rounded-[8px] py-[8px] px-[10px]'>
								<div
									className='bg-[#B0B0B0] w-full h-[40px] rounded-[8px] flex justify-between items-center px-[20px] text-white text-[14px]'>
									<p>Добавить раздел</p>
									<img src="./arcticons_conversations.svg" alt="settings"/>
								</div>
								<button className='flex justify-center items-center cursor-pointer hover:bg-[#6361FF] transition ease-linear mt-[10px] text-white border border-dashed border-white w-full h-[40px] w-full h-[40px] rounded-[8px] flex justify-between items-center px-[20px] text-white text-[14px]'>
									<img src="./arcticons_plus.svg" alt="add task"/>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}