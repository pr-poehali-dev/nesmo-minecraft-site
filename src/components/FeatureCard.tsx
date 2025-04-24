
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <Card className="bg-[#1A1F2C] border-2 border-primary hover:border-accent transition-colors duration-300 hover:scale-105 transform">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="bg-primary w-14 h-14 rounded flex items-center justify-center text-3xl">
          {icon}
        </div>
        <CardTitle className="text-xl font-minecraft text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-300 text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};
