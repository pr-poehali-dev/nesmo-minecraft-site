
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#141824] pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-minecraft text-white mb-4">О проекте</h3>
            <p className="text-gray-400 mb-4">
              Nesmo - это уникальный Minecraft сервер с множеством режимов и дружелюбным сообществом.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl" title="Discord">💬</a>
              <a href="#" className="text-2xl" title="YouTube">📺</a>
              <a href="#" className="text-2xl" title="Telegram">✈️</a>
              <a href="#" className="text-2xl" title="VK">👥</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-minecraft text-white mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary">Главная</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-primary">Новости</Link></li>
              <li><Link to="/rules" className="text-gray-400 hover:text-primary">Правила</Link></li>
              <li><Link to="/donate" className="text-gray-400 hover:text-primary">Донат</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-minecraft text-white mb-4">Режимы</h3>
            <ul className="space-y-2">
              <li><Link to="/modes/survival" className="text-gray-400 hover:text-primary">Выживание</Link></li>
              <li><Link to="/modes/skyblock" className="text-gray-400 hover:text-primary">SkyBlock</Link></li>
              <li><Link to="/modes/pvp" className="text-gray-400 hover:text-primary">PvP Арены</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-minecraft text-white mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: info@nesmo.ru</li>
              <li className="text-gray-400">Discord: discord.gg/nesmo</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2023 Nesmo. Все права защищены.</p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-400 hover:text-primary">Условия использования</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-primary">Политика конфиденциальности</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
