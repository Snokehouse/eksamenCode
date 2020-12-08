import Event from '../Modell/Event.js';

export const listEvents = async () => Event.find().populate('user', 'email');

export const getEventById = async (id) => Event.findById(id);

export const createEvent = async (data) => Event.create(data);

export const updateEvent = async (id, data) =>
  Event.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

export const removeEvent = async (id) => {
  const event = await Event.findById(id);
  event.remove();
};