const math = require('mathjs');

const calculate = (req, res) => {
  try {
    const { expression } = req.body;
    
    if (!expression) {
      return res.status(400).json({ error: 'Expression is required' });
    }

    const result = math.evaluate(expression);
    res.json({ result });
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  calculate
};