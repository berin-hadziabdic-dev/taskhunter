const CONFIG = {
  validateStatus: (response) => response.status === 200,
  timeout: 1500,
};

const POST_JSON_CONFIG = {
  validateStatus: (response) => response.status === 200,
  timeout: 1500,
  headers: { "content-type": "application/json" },
};

export { CONFIG, POST_JSON_CONFIG };
