import OAuthButton from "@/components/ui/OAuthButton";

export default function OAuthPanel() {
	return (
		<div className='w-full h-[64px] mt-[16px] flex items-center justify-around'>
			<OAuthButton src={'/arcticons_vk.svg'} alt={'VKapi'}/>
			<OAuthButton src={'/arcticons_apple.svg'} alt={'APPLEapi'}/>
			<OAuthButton src={'/arcticons_yandex-start.svg'} alt={'YANDEXapi'}/>
			<OAuthButton src={'/arcticons_google-alt.svg'} alt={'GOOGLEapi'}/>
		</div>
	);
}