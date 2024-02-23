namespace reusable.validations;

type email: String(100) @assert.format: '/^[^\s@]+@[^\s@]+\.[^\s@]+$/';



