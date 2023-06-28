const express = require('express');
const router = express.Router();
const readline = require('readline');
const crypto = require('crypto');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

router.post('/', (req, res) => {
    console.log('Request received:', req.body);

    let inputJson = '';
    console.log('Enter the JSON response (type "END" on a new line to finish):');

    rl.removeAllListeners('line');
    rl.on('line', (line) => {
        if (line.trim().toLowerCase() === 'end') {
            try {
                const userInput = JSON.parse(inputJson);
                const id = 'chatcmpl-' + crypto.randomBytes(4).toString('hex');
                const created = Math.floor(new Date() / 1000);
                const responseData = {
                    id: id,
                    object: 'chat.completion',
                    created: created,
                    choices: [
                        {
                            index: 0,
                            message: {
                                role: 'assistant',
                                content: JSON.stringify(userInput)
                            },
                            finish_reason: 'stop'
                        }
                    ],
                    usage: {
                        prompt_tokens: 9,
                        completion_tokens: 12,
                        total_tokens: 21
                    }
                };
                res.json(responseData);
            } catch (error) {
                console.error('Invalid JSON format:', error);
                res.status(400).send('Invalid JSON format');
            }
            inputJson = '';
        } else {
            inputJson += line;
        }
    });
});

module.exports = router;