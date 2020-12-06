import kontorer from '../Data/Kontorer.js';


const list = () => {
    if (kontorer.size === 0) {
      return { status: 200, data: 'No kontorer' };
    }
    return { status: 200, data: Object.fromEntries(kontorer) };
};

export {list};
