export class ApiFilters {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  filter() {
    const query = { ...this.queryStr };
    const removeFields = ['q', 'page', 'limit'];
    removeFields.forEach((el) => delete query[el]);
    let queryStr = JSON.stringify(query);
    queryStr = queryStr.replace(
      /\b(gt|gte|lt|lte|in)\b/g,
      (match) => `$${match}`
    );

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  searchByQuery() {
    if (this.queryStr.q) {
      const term = this.queryStr.q.split('-').join(' ');
      this.query = this.query.find({ $text: { $search: `"${term}"` } });
    }
    return this;
  }

  // limit => how to group events
  // page => what "group-selection" to return
  pagination() {
    const page = parseInt(this.queryStr.page, 10) || 1;
    const limit = parseInt(this.queryStr.limit, 10) || 10;
    const skipResults = (page - 1) * limit;
    this.query = this.query.skip(skipResults).limit(limit);
    return this;
  }
}
