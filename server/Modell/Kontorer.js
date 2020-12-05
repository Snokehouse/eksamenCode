const toJson = () => {
    const file = utils.writeJson('...', [...feedbacks]);
    if (file && file.error) return file;
    return { status: 200, data: 'File saved' };
};

export { toJson };