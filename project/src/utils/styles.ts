export const getDifficultyStyle = (difficulty: string): string => {
  const baseStyle = 'text-sm px-3 py-1 rounded-full font-medium';
  
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return `${baseStyle} bg-green-900/50 text-green-300 border border-green-700`;
    case 'medium':
      return `${baseStyle} bg-yellow-900/50 text-yellow-300 border border-yellow-700`;
    case 'hard':
      return `${baseStyle} bg-red-900/50 text-red-300 border border-red-700`;
    default:
      return `${baseStyle} bg-gray-900/50 text-gray-300 border border-gray-700`;
  }
};