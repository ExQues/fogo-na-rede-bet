
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-dark border-t border-gray-medium relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-primary opacity-5 clip-path-diamond transform translate-x-32 -translate-y-32"></div>
        <div className="broken-grid absolute inset-0 opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg geometric-shape flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">⚽</span>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-gradient">BetMatch</h3>
                <p className="text-xs text-gray-400">Apostas Esportivas</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A plataforma de apostas esportivas mais confiável do Brasil. 
              Aposte com responsabilidade e diversão.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-medium hover:bg-orange-primary rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gray-medium hover:bg-orange-primary rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gray-medium hover:bg-orange-primary rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gray-medium hover:bg-orange-primary rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                <Youtube className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Links Rápidos</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-orange-primary transition-colors">
                Futebol Brasileiro
              </a>
              <a href="#" className="block text-gray-400 hover:text-orange-primary transition-colors">
                Futebol Internacional
              </a>
              <a href="#" className="block text-gray-400 hover:text-orange-primary transition-colors">
                Apostas Ao Vivo
              </a>
              <a href="#" className="block text-gray-400 hover:text-orange-primary transition-colors">
                Estatísticas
              </a>
              <a href="#" className="block text-gray-400 hover:text-orange-primary transition-colors">
                Promoções
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Suporte</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-orange-primary transition-colors">
                Central de Ajuda
              </a>
              <a href="#" className="block text-gray-400 hover:text-orange-primary transition-colors">
                Como Apostar
              </a>
              <a href="#" className="block text-gray-400 hover:text-orange-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="block text-gray-400 hover:text-orange-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="block text-gray-400 hover:text-orange-primary transition-colors">
                Jogo Responsável
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-primary rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-400">(11) 3000-0000</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-primary rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-400">contato@betmatch.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-primary rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-400">São Paulo, Brasil</span>
              </div>
            </div>
            
            <div className="glass-effect rounded-lg p-4">
              <p className="text-sm text-gray-400 leading-relaxed">
                Suporte 24/7 disponível para todos os usuários. 
                Estamos aqui para ajudar!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-medium mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 BetMatch. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🔒 Pagamentos Seguros</span>
              <span>✓ Licenciado</span>
              <span>⚡ Saques Rápidos</span>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Apostas esportivas envolvem riscos. Jogue com responsabilidade. 
              Proibido para menores de 18 anos. Se você tem problemas com jogos, procure ajuda.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
