import { FacebookLogo, InstagramLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr"

export function Footer() {
    return (
        <section className="bg-[#E4B644] py-16 text-white">
            <div className="container mx-auto px-4">
                <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">IPB Consagração</h3>
                        <p className="mb-6">Firmados na Palavra, servindo em amor, proclamando Cristo para transformar vidas.</p>
                        <a href="https://wa.me/5511914315524?text=Olá, vim pelo site e gostaria de mais informações sobre a igreja." target="_blank" className="bg-green-500 px-4 py-2 rounded-md mt-4">
                            Contato via Whatsapp!
                        </a>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Contatos</h3>
                        <p>Email: ipb.consagracao@gmail.com</p>
                        <p>Tel: (11) 99242-5665</p>
                        <p>Endereço: Rua Alberto Frediani, 157 - 2 ANDAR - Jardim Frediani, Santana de Parnaíba - SP, 06502-155</p>
                    </div>
                     <div>
                        <h3 className="text-2xl font-bold mb-2">Redes Sociais</h3>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/ipmalphaville" target="_blank">
                                <FacebookLogo className="w-8 h-8"/>
                            </a>
                            <a href="https://www.instagram.com/ipbconsagracao/" target="_blank">
                                <InstagramLogo className="w-8 h-8"/>
                            </a>
                            <a href="https://www.youtube.com/@IPMAlphaville" target="_blank">
                                <YoutubeLogo className="w-8 h-8"/>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    )
}