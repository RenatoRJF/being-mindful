import { AcademicCapIcon, LightBulbIcon, SparklesIcon } from '@heroicons/react/24/outline';

export const getSectionIcon = (type: string) => {
  switch (type) {
    case 'introduction':
      return <AcademicCapIcon className="w-6 h-6 text-amber-400" />;
    case 'tip':
      return <LightBulbIcon className="w-6 h-6 text-amber-400" />;
    case 'conclusion':
      return <SparklesIcon className="w-6 h-6 text-amber-400" />;
    default:
      return null;
  }
}; 