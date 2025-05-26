import Link from "next/link";
import Image from "next/image";

export default function Header () {
	return (
		<div className='h-[48px] w-full flex items-center gap-[8px]'>
			<button className='h-[28px] w-[28px]'>
				<Link href={'/'}>
					<Image
						width={28}
						height={28}
						src={'./uit_arrow-circle-left.svg'}
						alt={'GoToPrevPage__button'}
					/>
				</Link>
			</button>
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
	)
}