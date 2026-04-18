// Reusable Button component
// Props: children (button text), onClick, className (additional styles), variant (primary, secondary)
const Button = ({ children, onClick, className = '', variant = 'primary' }) => {
  // Base styles for all buttons
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-colors duration-200 hover:shadow-md';

  // Variant styles
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;