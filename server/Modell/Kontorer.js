<<<<<<< HEAD
import kontorer from '../Data/Kontorer.js';


const list = () => {
    if (kontorer.size === 0) {
      return { status: 200, data: 'No kontorer' };
    }
    return { status: 200, data: Object.fromEntries(kontorer) };
=======
const toJson = () => {
    const file = utils.writeJson('filnavn her', [...feedbacks]);
    if (file && file.error) return file;
    return { status: 200, data: 'File saved' };
>>>>>>> c9a01d524bceff732fe0b983734e616bd55697e2
};

export {list};
