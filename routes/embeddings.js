const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { model, input, user } = req.body;

        if (!model || !input) {
            return res.status(400).json({
                error: 'Model and input parameters are required.',
            });
        }

        // Simulate embedding generation
        const embedding = Array.from({ length: 10 }, () => Math.random() * 2 - 1);

        const response = {
            object: 'list',
            data: [
                {
                    object: 'embedding',
                    embedding: embedding,
                    index: 0,
                },
            ],
            model: model,
            usage: {
                prompt_tokens: 8,
                total_tokens: 8,
            },
        };

        res.status(200).json(response);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while creating the embedding.' });
    }
});

module.exports = router;