export const TEXT_STYLES = {
  shadowHeavy: { 
    textShadow: "0 0 20px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.7), 0 0 50px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 0, 0, 0.5)"
  },
  shadowMedium: { 
    textShadow: "0 0 15px rgba(0, 0, 0, 0.9), 0 0 25px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 0, 0, 0.7), 0 0 45px rgba(0, 0, 0, 0.6)"
  }
};

export const SECTION_STYLES = {
  section: "py-16 px-4 sm:px-6 lg:px-8",
  container: "max-w-7xl mx-auto",
  heading: "text-3xl font-bold text-white mb-4",
  subheading: "text-xl text-gray-300 mb-8",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  card: "bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
};

export const CONTAINER_STYLES = {
  base: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  narrow: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",
  wide: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
};

export const CARD_STYLES = {
  base: "bg-gray-800 rounded-lg p-6 shadow-lg",
  hover: "hover:shadow-xl transition-shadow duration-300",
  interactive: "cursor-pointer hover:bg-gray-700 transition-colors duration-200"
};

export const BUTTON_STYLES = {
  primary: "inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200",
  secondary: "inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-md transition-colors duration-200",
  disabled: "inline-flex items-center px-4 py-2 bg-gray-700 text-gray-400 font-medium rounded-md cursor-not-allowed"
}; 