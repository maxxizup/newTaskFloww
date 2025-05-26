import Image from "next/image";

export default function OAuthButton ({src, alt}) {
	return (
		<button className='h-[48px] w-[88.5px] bg-[#707070] rounded-[8px] flex justify-center items-center cursor-pointer transition ease-in hover:opacity-75'>
			<Image
				src={src}
				alt={alt}
				width={24}
				height={24}
			/>
		</button>
	);
}