import Image from "next/image";
import MyInput from "@/components/ui/MyInput";
import MyButton from "@/components/ui/MyButton";

export default function WSHeader () {
	return (
		<div className='w-full h-[48px] flex justify-between'>
			<div className='h-full w-[345px] flex items-center justify-between'>
				<div className='flex gap-[8px]'>
					<Image
						src={'./solar_paw-broken.svg'}
						height={44}
						width={44}
						alt={'Sperma'}
					/>
					<div className='h-full w-[158px] border border-r-[#DBDBDB] border-r-2 border-l-transparent border-b-transparent border-t-transparent'>
						<h4 className='text-white text-[16px] leading-[24px]'>Кирюха Денисович</h4>
						<p className='text-[#DBDBDB] text-[16px] leading-[24px]'>SMM</p>
					</div>
				</div>
				<button className='h-[40px] w-[122px] bg-[#B0B0B0] rounded-[8px] text-white hover:opacity-85 text-center transition ease-linear cursor-pointer'>Premium +</button>
			</div>
			<div className='h-full w-[352px] flex gap-[10px]'>
				<MyInput
					width={244}
					height={44}
					placeholder={'Найти что-то...'}
				/>
				<MyButton
					height={44}
					width={44}
				>
					<Image
						src={'./arcticons_hourlyreminder.svg'}
						width={24}
						height={24}
						alt={'Notifications'}
					/>
				</MyButton>
				<button className='border border-white rounded-full w-[44px] h-[44px] flex justify-center transition ease-linear hover:bg-[#6361FF] cursor-pointer'>
					<Image
						src={'./solar_cat-broken.svg'}
						width={24}
						height={24}
						alt={'Cat'}
					/>
				</button>
			</div>
		</div>
	);
}