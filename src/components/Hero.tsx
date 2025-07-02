
import { Play, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-gradient-dark">
      {/* Animated Background Elements - Removed problematic geometric shapes */}
      <div className="absolute inset-0">
        <div className="broken-grid absolute inset-0 opacity-20"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-orange-primary/20 rounded-full border border-orange-primary/30">
                <Zap className="w-4 h-4 text-orange-primary mr-2" />
                <span className="text-orange-primary font-medium text-sm">Apostas Ao Vivo</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-black leading-tight">
                <span className="text-white">Aposte no</span>
                <br />
                <span className="text-gradient">Futebol</span>
                <br />
                <span className="text-white">que Você</span>
                <br />
                <span className="text-gradient">Ama</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Experimente a emoção das apostas esportivas com as melhores odds do mercado. 
                Futebol brasileiro, internacional e muito mais.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white text-lg px-8 py-4 diagonal-cut">
                <Play className="w-5 h-5 mr-2" />
                Começar Agora
              </Button>
              <Button size="lg" variant="outline" className="border-orange-primary text-orange-primary hover:bg-orange-primary hover:text-white text-lg px-8 py-4">
                <TrendingUp className="w-5 h-5 mr-2" />
                Ver Estatísticas
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-gradient">150K+</div>
                <div className="text-sm text-gray-400">Usuários Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-gradient">98.5%</div>
                <div className="text-sm text-gray-400">Taxa de Pagamento</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-gradient">24/7</div>
                <div className="text-sm text-gray-400">Suporte</div>
              </div>
            </div>
          </div>

          {/* Right Content - Live Match Card */}
          <div className="relative">
            <div className="glass-effect rounded-2xl p-8 neon-glow animate-float">
              <div className="text-center mb-6">
                <div className="inline-flex items-center px-3 py-1 bg-red-500 rounded-full mb-4">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></div>
                  <span className="text-white text-sm font-medium">AO VIVO</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Brasileirão Série A</h3>
                <p className="text-gray-400 text-sm">78' - 2º Tempo</p>
              </div>

              <div className="flex justify-between items-center mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">PAL</span>
                  </div>
                  <p className="text-white font-medium">Palmeiras</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-gradient">2 - 1</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">FLA</span>
                  </div>
                  <p className="text-white font-medium">Flamengo</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <Button size="sm" className="bg-gray-medium hover:bg-orange-primary text-white text-xs">
                  PAL 2.1
                </Button>
                <Button size="sm" className="bg-gray-medium hover:bg-orange-primary text-white text-xs">
                  EMP 3.5
                </Button>
                <Button size="sm" className="bg-gray-medium hover:bg-orange-primary text-white text-xs">
                  FLA 4.2
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
