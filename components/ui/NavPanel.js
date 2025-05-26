import Link from "next/link";
import Image from "next/image";

export default function NavPanel () {
	return (
		<nav className='h-full w-[92px] flex flex-col justify-between py-[20px]'>
			<div className='w-full h-[378px] flex flex-col justify-between'>
				<div className=''>
					<Link href={'/'}>
						<div className='h-full w-[92px] flex items-center gap-[4px]'>
							<Image
								width={24}
								height={24}
								src={'./logo.svg'}
								alt={'Logo'}
							/>
							<Image
								height={48}
								width={64}
								src={'./TaskFloww.svg'}
								alt={'TaskFloww'}
							/>
						</div>
					</Link>
				</div>
				<div className='h-full flex flex-col gap-[10px] justify-end'>
					<button className='w-full h-[40px] flex items-center justify-center hover:bg-[#B0B0B0] rounded-[8px] transition ease-linear cursor-pointer'>
						<Image
							src={'./arcticons_widget.svg'}
							width={24}
							height={24}
							alt={'NavButtonIcon'}
						/>
					</button>
					<button className='w-full h-[40px] flex items-center justify-center hover:bg-[#B0B0B0] rounded-[8px] transition ease-linear cursor-pointer'>
						<Image
							src={'./arcticons_minimal.svg'}
							width={24}
							height={24}
							alt={'NavButtonIcon'}
						/>
					</button>
					<button className='w-full h-[40px] flex items-center justify-center hover:bg-[#B0B0B0] rounded-[8px] transition ease-linear cursor-pointer'>
						<Image
							src={'./arcticons_calendar-fossify-1.svg'}
							width={24}
							height={24}
							alt={'NavButtonIcon'}
						/>
					</button>
					<button className='w-full h-[40px] flex items-center justify-center hover:bg-[#B0B0B0] rounded-[8px] transition ease-linear cursor-pointer'>
						<Image
							src={'./arcticons_business-suite.svg'}
							width={24}
							height={24}
							alt={'NavButtonIcon'}
						/>
					</button>
					<button className='w-full h-[40px] flex items-center justify-center hover:bg-[#B0B0B0] rounded-[8px] transition ease-linear cursor-pointer'>
						<Image
							src={'./arcticons_nextcloud-news.svg'}
							width={24}
							height={24}
							alt={'NavButtonIcon'}
						/>
					</button>
					<button className='w-full h-[40px] flex items-center justify-center hover:bg-[#B0B0B0] rounded-[8px] transition ease-linear cursor-pointer'>
						<Image
							src={'./arcticons_settings.svg'}
							width={24}
							height={24}
							alt={'NavButtonIcon'}
						/>
					</button>
				</div>
			</div>
			<div className='w-full h-[80px]'>
				<button className='w-full h-[40px] flex items-center justify-center hover:bg-[#B0B0B0] rounded-[8px] transition ease-linear cursor-pointer'>
					<Image
						src={'./arcticons_symbol-question-mark.svg'}
						width={24}
						height={24}
						alt={'NavButtonIcon'}
					/>
				</button>
				<button className='w-full h-[40px] flex items-center justify-center hover:bg-[#B0B0B0] rounded-[8px] transition ease-linear cursor-pointer'>
					<Image
						src={'./iwwa_logout.svg'}
						width={24}
						height={24}
						alt={'NavButtonIcon'}
					/>
				</button>
			</div>
		</nav>
	);
}