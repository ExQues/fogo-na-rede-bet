
import { BarChart3, Target, Trophy, Flame } from 'lucide-react';

const Statistics = () => {
  const stats = [
    {
      icon: BarChart3,
      title: "Análises Detalhadas",
      value: "500+",
      description: "Estatísticas por jogo",
      color: "text-orange-primary"
    },
    {
      icon: Target,
      title: "Precisão nas Odds",
      value: "94.8%",
      description: "Taxa de acerto",
      color: "text-orange-secondary"
    },
    {
      icon: Trophy,
      title: "Campeonatos",
      value: "50+",
      description: "Ligas disponíveis",
      color: "text-orange-accent"
    },
    {
      icon: Flame,
      title: "Apostas Hoje",
      value: "12.5K",
      description: "Em tempo real",
      color: "text-neon-orange"
    }
  ];

  return (
    <section className="py-20 bg-gray-dark relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-primary opacity-5 rounded-full transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-secondary opacity-5 clip-path-diamond transform translate-x-48 translate-y-48"></div>
        <div className="broken-grid absolute inset-0 opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Por que Escolher <span className="text-gradient">BetMatch?</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Nossa plataforma oferece as melhores ferramentas e estatísticas para você fazer apostas inteligentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className={`glass-effect rounded-xl p-8 text-center hover:neon-glow transition-all duration-300 animate-float-slow ${
                  index % 2 === 0 ? 'diagonal-cut' : ''
                }`}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-xl flex items-center justify-center mb-4 animate-geometric-spin-slow">
                    <Icon className={`w-8 h-8 text-white`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{stat.title}</h3>
                </div>
                
                <div className="mb-4">
                  <div className={`text-4xl font-display font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <p className="text-gray-400 text-sm">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-display font-bold text-white">
              Tecnologia de <span className="text-gradient">Ponta</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Utilizamos inteligência artificial e algoritmos avançados para fornecer as odds mais precisas 
              e análises em tempo real dos jogos.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-primary rounded-full"></div>
                <span className="text-white">Odds atualizadas em tempo real</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-secondary rounded-full"></div>
                <span className="text-white">Análise preditiva com IA</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-accent rounded-full"></div>
                <span className="text-white">Interface responsiva e intuitiva</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-effect rounded-2xl p-8 neon-glow">
              <h4 className="text-xl font-bold text-white mb-6">Estatísticas em Tempo Real</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Apostas Ativas</span>
                  <span className="text-orange-primary font-bold">2,847</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Taxa de Vitória</span>
                  <span className="text-orange-primary font-bold">89.2%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '89%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Usuários Online</span>
                  <span className="text-orange-primary font-bold">15,643</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
