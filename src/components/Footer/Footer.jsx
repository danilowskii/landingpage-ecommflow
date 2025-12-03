import logoEcomm from "../../assets/logo-white-ecomm.png";

const WhatsAppIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zM12.05 20.21c-1.5 0-2.97-.39-4.27-1.14l-.3-.18-3.15.83.84-3.07-.19-.31a8.154 8.154 0 01-1.26-4.44c0-4.48 3.64-8.13 8.13-8.13 2.17 0 4.21.85 5.75 2.38 1.53 1.53 2.38 3.57 2.38 5.75 0 4.48-3.64 8.13-8.13 8.13zm4.47-6.11c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.63.79-.77.95-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.95-1.21-.73-.65-1.22-1.45-1.36-1.7-.14-.24-.02-.37.1-.49.11-.1.24-.26.36-.4.12-.13.16-.22.24-.37s.04-.27-.02-.38c-.06-.11-.54-1.3-.74-1.78-.2-.48-.41-.41-.56-.42h-.48c-.16 0-.42.06-.64.3-.22.24-.86.84-.86 2.05s.88 2.38 1 2.71c.12.33 1.73 2.65 4.19 3.71.59.25 1.04.4 1.4.52.59.19 1.13.16 1.56.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z" />
  </svg>
);

const InstagramIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const EmailIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const PhoneIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export default function Footer() {
  const mensagem = `Oi, vim do site e gostaria de informações sobre a assessoria Ecommflow. #ECOMMFLOW`;

  const link =
    "https://wa.me/5511966052171?text=" + encodeURIComponent(mensagem);
  return (
    <div>
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto justify-center flex flex-col sm:flex-row gap-10 sm:gap-20">
          <div className="flex flex-col gap-4 items-center text-center justify-center">
            <a
              className="flex pb self-center"
              href="https://wa.me/5511966052171?text=Oi%2C%20vim%20do%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20Ecommflow...%20%23ECOMMFLOW"
            >
              <img
                src={logoEcomm}
                alt="Logo Ecomm Fow"
                className="w-48 h-auto flex items-center"
              />
            </a>
          </div>

          <div className="sm:border-r border-white/30">
            <h3 className="font-bold text-start text-xl md:pr-20 mb-4">Menu</h3>
            <ul className="space-x-8 md:space-y-2 flex justify-between flex-row md:flex-col">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-[#0ab9d1] transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#0ab9d1] transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#cases"
                  className="hover:text-[#0ab9d1] transition-colors"
                >
                  Cases
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  href={link}
                  className="hover:text-[#0ab9d1] transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-start text-xl mb-4">Contato</h3>
            <div className="flex justify-center items-start flex-col gap-3">
              <p className="">
                <a
                  href="https://wa.me/5511966052171"
                  target="_blank"
                  className="hover:text-[#0ab9d1] flex gap-2 transition-colors"
                >
                  <WhatsAppIcon /> WhatsApp
                </a>
              </p>
              <p className="">
                <a
                  href="https://wa.me/5511966052171"
                  target="_blank"
                  className="hover:text-[#0ab9d1] flex gap-2 transition-colors"
                >
                  <InstagramIcon /> Instagram
                </a>
              </p>
              <p>
                <a
                  href="mailto:contato@ecommflow.com.br"
                  className="hover:text-[#0ab9d1] flex gap-2 transition-colors"
                >
                  <EmailIcon /> contato@ecommflow.com.br
                </a>
              </p>
              <a
                target="_blank"
                href={link}
                className="hover:text-[#0ab9d1] flex gap-2 transition-colors"
              >
                <PhoneIcon /> Tel: (11) 96605-2171
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t group border-gray-700 pt-6 text-center text-sm text-gray-400">
          © 2025 Ecomm Flow Estratégias Digitais LTDA — CNPJ 44.148.089/0001-03.
          <p className="text-gray-400 text-center text-sm">
            Todos os direitos reservados.
          </p>
          <p className="text-transparent transition-all ease-in-out group-hover:text-gray-400 text-center text-sm">
            Desenvolvido por{" "}
            <a
              href="https://www.linkedin.com/in/paivadanilo/"
              rel="noopener noreferrer"
              target="_blank"
              className="cursor-pointer"
            >
              Danilo
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
