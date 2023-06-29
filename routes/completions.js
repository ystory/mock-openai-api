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
    const {
        model,
        prompt,
        suffix,
        max_tokens,
        temperature,
        top_p,
        n,
        stream,
        logprobs,
        echo,
        stop,
        presence_penalty,
        frequency_penalty,
        best_of,
        logit_bias,
        user
    } = req.body;

    let inputString = '';
    console.log('Enter the response text (type "END" on a new line to finish):');

    rl.removeAllListeners('line');
    rl.on('line', (line) => {
        if (line.trim().toLowerCase() === 'end') {
            const id = 'chatcmpl-' + crypto.randomBytes(4).toString('hex');
            const created = Math.floor(new Date() / 1000);
            const responseData = {
                id: id,
                object: 'text_completion',
                created: created,
                model: model,
                choices: [
                    {
                        text: inputString,
                        index: 0,
                        logprobs: null,
                        finish_reason: 'length'
                    }
                ],
                usage: {
                    prompt_tokens: 5,
                    completion_tokens: 7,
                    total_tokens: 12
                }
            };
            res.json(responseData);
            inputString = '';
        } else {
            inputString += line;
        }
    });
});

module.exports = router;
