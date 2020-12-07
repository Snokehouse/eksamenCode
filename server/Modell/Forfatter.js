import forfatter from '../Data/Forfatter.js';

const list = () => {
  if (forfatter.size === 0) {
    return { status: 200, data: 'No kontorer' };
  }
  return { status: 200, data: forfatter };
};

export { list };
