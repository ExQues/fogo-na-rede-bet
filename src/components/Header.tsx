
import { useState } from 'react';
import { Menu, X, User, Wallet, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-gray-dark border-b border-gray-medium">
      <div className="absolute inset-0 broken-grid opacity-30"></div>
      
      <div className="relative container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg geometric-shape flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl">⚽</span>
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-gradient">BetMatch</h1>
              <p className="text-xs text-gray-400">Apostas Esportivas</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-orange-primary transition-colors font-medium">
              Futebol
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-primary transition-colors font-medium">
              Ao Vivo
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-primary transition-colors font-medium">
              Estatísticas
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-primary transition-colors font-medium">
              Promoções
            </a>
          </nav>

          {/* User Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-orange-primary">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-orange-primary">
              <Wallet className="w-5 h-5" />
              <span className="ml-2">R$ 1,245.50</span>
            </Button>
            <Button className="bg-gradient-primary hover:opacity-90 text-white diagonal-cut">
              <User className="w-4 h-4 mr-2" />
              Entrar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-medium animate-slide-diagonal">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-orange-primary transition-colors font-medium">
                Futebol
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-primary transition-colors font-medium">
                Ao Vivo
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-primary transition-colors font-medium">
                Estatísticas
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-primary transition-colors font-medium">
                Promoções
              </a>
              <div className="pt-4 border-t border-gray-medium">
                <Button className="w-full bg-gradient-primary hover:opacity-90 text-white">
                  <User className="w-4 h-4 mr-2" />
                  Entrar
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
