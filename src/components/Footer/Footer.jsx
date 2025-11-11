import logoEcomm from "../../assets/logo-white-ecomm.png";

export default function Footer() {
  return (
    <div>
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto justify-center flex flex-col sm:flex-row gap-10 sm:gap-20">
          {/* Sobre */}
          <div className="flex flex-col gap-4 items-center text-center justify-center">
            <a
              className="flex pb self-center"
              href="https://wa.me/5511966052171?text=Oi%2C%20vim%20do%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20Ecommflow...%20%23ECOMMFLOW"
            >
              <img src={logoEcomm} className="w-48 h-auto flex items-center" />
            </a>
          </div>

          {/* Links */}
          <div className="sm:border-r pr-20 border-white/30">
            <h3 className="font-bold text-xl mb-4">Links</h3>
            <ul className="space-y-2">
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
                  href="#contato"
                  className="hover:text-[#0ab9d1] transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-xl mb-4">Contato</h3>
            <p>
              <a
                href="https://wa.me/5511966052171"
                target="_blank"
                className="hover:text-[#0ab9d1] transition-colors"
              >
                WhatsApp
              </a>
            </p>
            <p>
              <a
                href="mailto:contato@ecommflow.com.br"
                className="hover:text-[#0ab9d1] transition-colors"
              >
                contato@ecommflow.com.br
              </a>
            </p>
            <p>Tel: (11) 96605-2171</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © 2025 EcommFlow. Todos os direitos reservados.
        </div>
        <p className="text-gray-400 text-center text-sm">
          Desenvolvido por{" "}
          <a target="_blank" href="https://www.linkedin.com/in/paivadanilo/">
            Danilo
          </a>
        </p>
      </footer>
    </div>
  );
}
