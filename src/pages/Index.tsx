
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ServerStatus } from "@/components/ServerStatus";
import { FeatureCard } from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#1A1F2C]">
      {/* Шапка сайта */}
      <header className="w-full py-4 bg-sidebar shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo-b.svg" alt="Nesmo Logo" className="h-10 mr-3" />
            <span className="text-2xl font-minecraft text-white">NESMO</span>
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className="font-minecraft text-white hover:text-primary"
                  href="/"
                >
                  Главная
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-minecraft text-white">О сервере</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] bg-sidebar">
                    <Link to="/rules" className="font-minecraft text-white hover:text-primary">Правила</Link>
                    <Link to="/donate" className="font-minecraft text-white hover:text-primary">Донат</Link>
                    <Link to="/team" className="font-minecraft text-white hover:text-primary">Команда</Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className="font-minecraft text-white hover:text-primary"
                  href="/news"
                >
                  Новости
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center space-x-4">
            <ServerStatus />
            <Button className="minecraft-btn">Играть сейчас</Button>
          </div>
        </div>
      </header>

      {/* Главный баннер */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center filter brightness-50"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-minecraft text-white mb-6">NESMO</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-minecraft">
            Лучший Minecraft сервер с уникальными режимами и сообществом
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <Button size="lg" className="minecraft-btn text-xl px-8 py-4">НАЧАТЬ ИГРУ</Button>
            <Button size="lg" variant="outline" className="minecraft-btn bg-transparent border-2 border-white text-xl px-8 py-4">DISCORD</Button>
          </div>
        </div>
      </section>

      {/* Разделы сервера */}
      <section className="py-16 bg-sidebar">
        <div className="container mx-auto">
          <h2 className="text-4xl font-minecraft text-white text-center mb-16">Режимы сервера</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Выживание" 
              description="Классическое выживание с друзьями, с уникальной экономикой и системой кланов"
              icon="🌳"
            />
            <FeatureCard 
              title="SkyBlock" 
              description="Начните с маленького острова и постройте свою империю в небесах"
              icon="☁️"
            />
            <FeatureCard 
              title="PvP Арены" 
              description="Сразитесь с другими игроками на специальных аренах с уникальными способностями"
              icon="⚔️"
            />
          </div>
        </div>
      </section>

      {/* Почему нас выбирают */}
      <section className="py-16 bg-[#1A1F2C]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-minecraft text-white text-center mb-16">Почему Nesmo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary rounded-lg flex items-center justify-center text-4xl">⚡</div>
              <h3 className="text-xl font-minecraft text-white mb-2">Мощные сервера</h3>
              <p className="text-gray-300">Никаких лагов, только плавный геймплей 24/7</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-secondary rounded-lg flex items-center justify-center text-4xl">🔒</div>
              <h3 className="text-xl font-minecraft text-white mb-2">Безопасность</h3>
              <p className="text-gray-300">Защита от читеров и гриферов</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-accent rounded-lg flex items-center justify-center text-4xl">🎮</div>
              <h3 className="text-xl font-minecraft text-white mb-2">Уникальные плагины</h3>
              <p className="text-gray-300">Эксклюзивные механики, которых нет на других серверах</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-destructive rounded-lg flex items-center justify-center text-4xl">👥</div>
              <h3 className="text-xl font-minecraft text-white mb-2">Сообщество</h3>
              <p className="text-gray-300">Дружелюбные игроки и активная администрация</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Блок новостей */}
      <section className="py-16 bg-sidebar">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-minecraft text-white">Последние новости</h2>
            <Link to="/news" className="minecraft-btn">Все новости</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Заглушки новостей */}
            <div className="bg-[#1A1F2C] rounded-lg overflow-hidden shadow-lg">
              <img src="/placeholder.svg" alt="Обновление сервера" className="w-full h-48 object-cover pixelated" />
              <div className="p-6">
                <h3 className="text-xl font-minecraft text-white mb-2">Большое летнее обновление!</h3>
                <p className="text-gray-300 mb-4">Добавлены новые биомы, мобы и крафты. Заходите проверить...</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">15.06.2023</span>
                  <Link to="/news/1" className="text-primary font-minecraft">Подробнее</Link>
                </div>
              </div>
            </div>
            <div className="bg-[#1A1F2C] rounded-lg overflow-hidden shadow-lg">
              <img src="/placeholder.svg" alt="Турнир PvP" className="w-full h-48 object-cover pixelated" />
              <div className="p-6">
                <h3 className="text-xl font-minecraft text-white mb-2">Турнир по PvP с призами</h3>
                <p className="text-gray-300 mb-4">В эту субботу состоится грандиозный турнир. Главный приз...</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">10.06.2023</span>
                  <Link to="/news/2" className="text-primary font-minecraft">Подробнее</Link>
                </div>
              </div>
            </div>
            <div className="bg-[#1A1F2C] rounded-lg overflow-hidden shadow-lg">
              <img src="/placeholder.svg" alt="Весенний ивент" className="w-full h-48 object-cover pixelated" />
              <div className="p-6">
                <h3 className="text-xl font-minecraft text-white mb-2">Весенний ивент на SkyBlock</h3>
                <p className="text-gray-300 mb-4">С 1 по 15 мая на режиме SkyBlock пройдет весенний ивент...</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">28.04.2023</span>
                  <Link to="/news/3" className="text-primary font-minecraft">Подробнее</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Подвал сайта */}
      <Footer />
    </div>
  );
};

export default Index;
