namespace reusable.validations;

type email: String(50) @assert.format: '^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$';



