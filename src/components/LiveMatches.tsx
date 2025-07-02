
import { Clock, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LiveMatches = () => {
  const matches = [
    {
      id: 1,
      league: "Brasileirão Série A",
      time: "45' - 1º Tempo",
      homeTeam: "Santos",
      awayTeam: "Corinthians",
      homeScore: 1,
      awayScore: 0,
      odds: { home: 2.8, draw: 3.2, away: 2.4 },
      viewers: "12.5K",
      isLive: true
    },
    {
      id: 2,
      league: "Premier League",
      time: "62' - 2º Tempo",
      homeTeam: "Arsenal",
      awayTeam: "Chelsea",
      homeScore: 2,
      awayScore: 2,
      odds: { home: 3.1, draw: 2.9, away: 2.7 },
      viewers: "45.2K",
      isLive: true
    },
    {
      id: 3,
      league: "La Liga",
      time: "Intervalo",
      homeTeam: "Barcelona",
      awayTeam: "Real Madrid",
      homeScore: 1,
      awayScore: 1,
      odds: { home: 2.2, draw: 3.8, away: 2.9 },
      viewers: "89.1K",
      isLive: true
    },
    {
      id: 4,
      league: "Copa do Brasil",
      time: "Hoje, 21:30",
      homeTeam: "Fluminense",
      awayTeam: "Atlético-MG",
      homeScore: null,
      awayScore: null,
      odds: { home: 2.5, draw: 3.1, away: 3.0 },
      viewers: "8.7K",
      isLive: false
    }
  ];

  return (
    <section className="py-20 bg-gray-medium relative overflow-hidden">
      <div className="absolute inset-0 broken-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Jogos <span className="text-gradient">Ao Vivo</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Acompanhe os principais jogos e faça suas apostas em tempo real
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {matches.map((match, index) => (
            <div 
              key={match.id} 
              className={`glass-effect rounded-xl p-6 hover:neon-glow transition-all duration-300 ${
                index % 2 === 0 ? 'diagonal-cut' : 'reverse-diagonal-cut'
              }`}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  {match.isLive ? (
                    <div className="flex items-center px-2 py-1 bg-red-500 rounded-full">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-1"></div>
                      <span className="text-white text-xs font-medium">AO VIVO</span>
                    </div>
                  ) : (
                    <div className="flex items-center px-2 py-1 bg-gray-600 rounded-full">
                      <Clock className="w-3 h-3 text-gray-300 mr-1" />
                      <span className="text-gray-300 text-xs font-medium">PRÓXIMO</span>
                    </div>
                  )}
                  <span className="text-gray-400 text-sm">{match.league}</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Users className="w-4 h-4 mr-1" />
                  {match.viewers}
                </div>
              </div>

              {/* Match Info */}
              <div className="flex justify-between items-center mb-6">
                <div className="text-center flex-1">
                  <p className="text-white font-semibold text-lg">{match.homeTeam}</p>
                </div>
                
                <div className="text-center px-6">
                  {match.homeScore !== null ? (
                    <div className="text-3xl font-display font-bold text-gradient">
                      {match.homeScore} - {match.awayScore}
                    </div>
                  ) : (
                    <div className="text-lg font-medium text-gray-400">VS</div>
                  )}
                  <p className="text-gray-400 text-sm mt-1">{match.time}</p>
                </div>
                
                <div className="text-center flex-1">
                  <p className="text-white font-semibold text-lg">{match.awayTeam}</p>
                </div>
              </div>

              {/* Odds */}
              <div className="grid grid-cols-3 gap-2">
                <Button 
                  size="sm" 
                  className="bg-gray-dark hover:bg-orange-primary text-white transition-colors"
                >
                  <div className="text-center">
                    <div className="text-xs text-gray-300 mb-1">Casa</div>
                    <div className="font-bold">{match.odds.home}</div>
                  </div>
                </Button>
                <Button 
                  size="sm" 
                  className="bg-gray-dark hover:bg-orange-primary text-white transition-colors"
                >
                  <div className="text-center">
                    <div className="text-xs text-gray-300 mb-1">Empate</div>
                    <div className="font-bold">{match.odds.draw}</div>
                  </div>
                </Button>
                <Button 
                  size="sm" 
                  className="bg-gray-dark hover:bg-orange-primary text-white transition-colors"
                >
                  <div className="text-center">
                    <div className="text-xs text-gray-300 mb-1">Visitante</div>
                    <div className="font-bold">{match.odds.away}</div>
                  </div>
                </Button>
              </div>

              {/* Quick Stats */}
              {match.isLive && (
                <div className="mt-4 pt-4 border-t border-gray-600 flex justify-between text-xs text-gray-400">
                  <span>Posse: 65% - 35%</span>
                  <span>Chutes: 8 - 3</span>
                  <span>Cantos: 4 - 2</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-orange-primary text-orange-primary hover:bg-orange-primary hover:text-white">
            <TrendingUp className="w-5 h-5 mr-2" />
            Ver Todos os Jogos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LiveMatches;
