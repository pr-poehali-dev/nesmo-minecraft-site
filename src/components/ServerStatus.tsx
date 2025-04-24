
import { useState, useEffect } from "react";

export const ServerStatus = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [playerCount, setPlayerCount] = useState(128);
  
  useEffect(() => {
    // Здесь в реальном проекте был бы запрос к API сервера
    // Для демонстрации используем временные данные
    const interval = setInterval(() => {
      // Имитируем изменение числа игроков
      setPlayerCount(prev => Math.max(100, Math.min(250, prev + Math.floor(Math.random() * 11) - 5)));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></div>
      <span className="font-minecraft text-white">
        {isOnline ? `Онлайн: ${playerCount}` : 'Оффлайн'}
      </span>
    </div>
  );
};
