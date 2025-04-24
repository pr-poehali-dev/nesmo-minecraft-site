
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";

const GameMode = () => {
  const { mode } = useParams<{ mode: string }>();
  
  // Данные для разных режимов игры
  const modeData: Record<string, {
    title: string;
    description: string;
    features: string[];
    icon: string;
    image: string;
    commands: {name: string, cmd: string}[];
  }> = {
    "survival": {
      title: "Выживание",
      description: "Классическое выживание с друзьями, с уникальной экономикой и системой кланов. Исследуйте огромный мир, стройте базы и развивайтесь вместе с другими игроками!",
      features: [
        "Уникальная экономика сервера",
        "Система кланов и фракций",
        "Приватная территория",
        "Рейтинг игроков",
        "Ежемесячные ивенты",
        "PvP-зоны с уникальными наградами"
      ],
      icon: "🌳",
      image: "/placeholder.svg",
      commands: [
        {name: "Телепорт на спавн", cmd: "/spawn"},
        {name: "Создать клан", cmd: "/clan create [название]"},
        {name: "Магазин предметов", cmd: "/shop"},
        {name: "Приват территории", cmd: "/claim"}
      ]
    },
    "skyblock": {
      title: "SkyBlock",
      description: "Начните с маленького острова и постройте свою империю в небесах. Развивайте свой остров, торгуйте с другими игроками и участвуйте в еженедельных соревнованиях!",
      features: [
        "Уникальные острова с выбором биома",
        "Система уровней острова",
        "Рейтинг лучших островов",
        "Совместное развитие с друзьями",
        "Автоматизация процессов",
        "Торговая площадка между игроками"
      ],
      icon: "☁️",
      image: "/placeholder.svg",
      commands: [
        {name: "Создать остров", cmd: "/is create"},
        {name: "Телепорт на остров", cmd: "/is home"},
        {name: "Пригласить друга", cmd: "/is invite [игрок]"},
        {name: "Остров топ", cmd: "/is top"}
      ]
    },
    "pvp": {
      title: "PvP Арены",
      description: "Сразитесь с другими игроками на специальных аренах с уникальными способностями. Побеждайте противников, повышайте свой ранг и получайте эксклюзивные награды!",
      features: [
        "Разнообразные арены для сражений",
        "Система рангов и матчмейкинга",
        "Уникальные способности персонажей",
        "Еженедельные турниры с призами",
        "Личная статистика боёв",
        "Командные бои"
      ],
      icon: "⚔️",
      image: "/placeholder.svg",
      commands: [
        {name: "Присоединиться к арене", cmd: "/arena join"},
        {name: "Статистика игрока", cmd: "/stats"},
        {name: "Выбор способности", cmd: "/ability select [название]"},
        {name: "Список арен", cmd: "/arena list"}
      ]
    }
  };

  // Проверка, существует ли режим
  const currentMode = mode ? modeData[mode] : null;

  if (!currentMode) {
    return (
      <div className="min-h-screen flex flex-col bg-[#1A1F2C]">
        <header className="w-full py-4 bg-sidebar shadow-lg">
          <div className="container mx-auto">
            <Link to="/" className="flex items-center">
              <img src="/logo-b.svg" alt="Nesmo Logo" className="h-10 mr-3" />
              <span className="text-2xl font-minecraft text-white">NESMO</span>
            </Link>
          </div>
        </header>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-minecraft text-white mb-6">Режим не найден</h1>
            <p className="text-xl text-gray-300 mb-8">Запрошенный игровой режим не существует</p>
            <Button asChild className="minecraft-btn">
              <Link to="/">Вернуться на главную</Link>
            </Button>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1F2C]">
      {/* Шапка сайта */}
      <header className="w-full py-4 bg-sidebar shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo-b.svg" alt="Nesmo Logo" className="h-10 mr-3" />
            <span className="text-2xl font-minecraft text-white">NESMO</span>
          </Link>
          
          <div className="flex space-x-6">
            <Link to="/" className="font-minecraft text-white hover:text-primary">Главная</Link>
            <Link to="/news" className="font-minecraft text-white hover:text-primary">Новости</Link>
            <Link to="/rules" className="font-minecraft text-white hover:text-primary">Правила</Link>
          </div>
          
          <Button className="minecraft-btn">Играть сейчас</Button>
        </div>
      </header>

      {/* Баннер режима */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center filter brightness-50"></div>
        <div className="container mx-auto relative z-10 text-center">
          <div className="w-20 h-20 mx-auto mb-4 bg-primary rounded-lg flex items-center justify-center text-4xl">
            {currentMode.icon}
          </div>
          <h1 className="text-5xl md:text-6xl font-minecraft text-white mb-6">{currentMode.title}</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            {currentMode.description}
          </p>
          <Button size="lg" className="minecraft-btn text-xl px-8 py-4">НАЧАТЬ ИГРАТЬ</Button>
        </div>
      </section>

      {/* Особенности режима */}
      <section className="py-16 bg-sidebar">
        <div className="container mx-auto">
          <h2 className="text-4xl font-minecraft text-white text-center mb-16">Особенности режима</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentMode.features.map((feature, index) => (
              <div key={index} className="bg-[#1A1F2C] p-6 rounded-lg border-2 border-primary">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary rounded flex items-center justify-center text-xl mr-4">
                    ✓
                  </div>
                  <h3 className="text-xl font-minecraft text-white">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Полезные команды */}
      <section className="py-16 bg-[#1A1F2C]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-minecraft text-white text-center mb-16">Полезные команды</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentMode.commands.map((cmd, index) => (
              <div key={index} className="bg-sidebar p-4 rounded-lg flex justify-between items-center">
                <span className="text-white font-minecraft">{cmd.name}</span>
                <code className="bg-[#0D1117] px-4 py-2 rounded text-green-400 font-mono">{cmd.cmd}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Другие режимы */}
      <section className="py-16 bg-sidebar">
        <div className="container mx-auto">
          <h2 className="text-4xl font-minecraft text-white text-center mb-16">Другие режимы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(modeData)
              .filter(([key]) => key !== mode)
              .map(([key, data]) => (
                <div key={key} className="bg-[#1A1F2C] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
                  <div className="h-48 bg-[url('/placeholder.svg')] bg-cover bg-center relative">
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="text-5xl">{data.icon}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-minecraft text-white mb-2">{data.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">{data.description}</p>
                    <Link 
                      to={`/modes/${key}`} 
                      className="inline-block w-full text-center py-2 bg-primary rounded font-minecraft text-white hover:bg-opacity-80 transition-colors"
                    >
                      Узнать больше
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 bg-[#1A1F2C]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-minecraft text-white mb-8">Готовы начать игру?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам игроков на сервере Nesmo прямо сейчас и начните свое приключение!
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <Button size="lg" className="minecraft-btn text-xl px-8 py-4">ИГРАТЬ СЕЙЧАС</Button>
            <Button size="lg" variant="outline" className="minecraft-btn bg-transparent border-2 border-white text-xl px-8 py-4">DISCORD</Button>
          </div>
        </div>
      </section>

      {/* Подвал сайта */}
      <Footer />
    </div>
  );
};

export default GameMode;
