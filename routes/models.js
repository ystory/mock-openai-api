var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json(
        {
            "object": "list",
            "data": [
                {
                    "id": "whisper-1",
                    "object": "model",
                    "created": 1677532384,
                    "owned_by": "openai-internal",
                    "permission": [
                        {
                            "id": "modelperm-KlsZlfft3Gma8pI6A8rTnyjs",
                            "object": "model_permission",
                            "created": 1683912666,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": false,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "whisper-1",
                    "parent": null
                },
                {
                    "id": "babbage",
                    "object": "model",
                    "created": 1649358449,
                    "owned_by": "openai",
                    "permission": [
                        {
                            "id": "modelperm-49FUp5v084tBB49tC4z8LPH5",
                            "object": "model_permission",
                            "created": 1669085501,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": false,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "babbage",
                    "parent": null
                },
                {
                    "id": "davinci",
                    "object": "model",
                    "created": 1649359874,
                    "owned_by": "openai",
                    "permission": [
                        {
                            "id": "modelperm-U6ZwlyAd0LyMk4rcMdz33Yc3",
                            "object": "model_permission",
                            "created": 1669066355,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": false,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "davinci",
                    "parent": null
                },
                {
                    "id": "text-davinci-edit-001",
                    "object": "model",
                    "created": 1649809179,
                    "owned_by": "openai",
                    "permission": [
                        {
                            "id": "modelperm-otmQSS0hmabtVGHI9QB3bct3",
                            "object": "model_permission",
                            "created": 1679934178,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": false,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "text-davinci-edit-001",
                    "parent": null
                },
                {
                    "id": "babbage-code-search-code",
                    "object": "model",
                    "created": 1651172509,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-4qRnA3Hj8HIJbgo0cGbcmErn",
                            "object": "model_permission",
                            "created": 1669085863,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "babbage-code-search-code",
                    "parent": null
                },
                {
                    "id": "text-similarity-babbage-001",
                    "object": "model",
                    "created": 1651172505,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-48kcCHhfzvnfY84OtJf5m8Cz",
                            "object": "model_permission",
                            "created": 1669081947,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "text-similarity-babbage-001",
                    "parent": null
                },
                {
                    "id": "text-embedding-ada-002",
                    "object": "model",
                    "created": 1671217299,
                    "owned_by": "openai-internal",
                    "permission": [
                        {
                            "id": "modelperm-4Q17GHrCljUZK9VkQdb21eAp",
                            "object": "model_permission",
                            "created": 1687743865,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "text-embedding-ada-002",
                    "parent": null
                },
                {
                    "id": "code-davinci-edit-001",
                    "object": "model",
                    "created": 1649880484,
                    "owned_by": "openai",
                    "permission": [
                        {
                            "id": "modelperm-Foe5Y4TvaKveYxt74oKMw8IB",
                            "object": "model_permission",
                            "created": 1679934178,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": false,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "code-davinci-edit-001",
                    "parent": null
                },
                {
                    "id": "text-davinci-001",
                    "object": "model",
                    "created": 1649364042,
                    "owned_by": "openai",
                    "permission": [
                        {
                            "id": "modelperm-MVM5NfoRjXkDve3uQW3YZDDt",
                            "object": "model_permission",
                            "created": 1669066355,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": false,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "text-davinci-001",
                    "parent": null
                },
                {
                    "id": "ada",
                    "object": "model",
                    "created": 1649357491,
                    "owned_by": "openai",
                    "permission": [
                        {
                            "id": "modelperm-u0nKN4ub7EVQudgMuvCuvDjc",
                            "object": "model_permission",
                            "created": 1675997661,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": false,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "ada",
                    "parent": null
                },
                {
                    "id": "babbage-code-search-text",
                    "object": "model",
                    "created": 1651172509,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-Lftf8H4ZPDxNxVs0hHPJBUoe",
                            "object": "model_permission",
                            "created": 1669085863,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "babbage-code-search-text",
                    "parent": null
                },
                {
                    "id": "babbage-similarity",
                    "object": "model",
                    "created": 1651172505,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-mS20lnPqhebTaFPrcCufyg7m",
                            "object": "model_permission",
                            "created": 1669081947,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "babbage-similarity",
                    "parent": null
                },
                {
                    "id": "code-search-babbage-text-001",
                    "object": "model",
                    "created": 1651172507,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-EC5ASz4NLChtEV1Cwkmrwm57",
                            "object": "model_permission",
                            "created": 1669085863,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "code-search-babbage-text-001",
                    "parent": null
                },
                {
                    "id": "text-curie-001",
                    "object": "model",
                    "created": 1649364043,
                    "owned_by": "openai",
                    "permission": [
                        {
                            "id": "modelperm-8InhPV3CZfN3F5QHKoJd4zRD",
                            "object": "model_permission",
                            "created": 1679310997,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": false,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "text-curie-001",
                    "parent": null
                },
                {
                    "id": "code-search-babbage-code-001",
                    "object": "model",
                    "created": 1651172507,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-64LWHdlANgak2rHzc3K5Stt0",
                            "object": "model_permission",
                            "created": 1669085864,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "code-search-babbage-code-001",
                    "parent": null
                },
                {
                    "id": "gpt-3.5-turbo-0613",
                    "object": "model",
                    "created": 1686587434,
                    "owned_by": "openai",
                    "permission": [
                        {
                            "id": "modelperm-5XP2xnkaNkMxRS436DXZ8FYy",
                            "object": "model_permission",
                            "created": 1687913317,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": false,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "gpt-3.5-turbo-0613",
                    "parent": null
                },
                {
                    "id": "text-ada-001",
                    "object": "model",
                    "created": 1649364042,
                    "owned_by": "openai",
                    "permission": [
                        {
                            "id": "modelperm-KN5dRBCEW4az6gwcGXkRkMwK",
                            "object": "model_permission",
                            "created": 1669088497,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": false,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "text-ada-001",
                    "parent": null
                },
                {
                    "id": "text-similarity-ada-001",
                    "object": "model",
                    "created": 1651172505,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-DdCqkqmORpqxqdg4TkFRAgmw",
                            "object": "model_permission",
                            "created": 1669092759,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "text-similarity-ada-001",
                    "parent": null
                },
                {
                    "id": "curie-instruct-beta",
                    "object": "model",
                    "created": 1649364042,
                    "owned_by": "openai",
                    "permission": [
                        {
                            "id": "modelperm-bsg59MlOi88CMf1MjnIKrT5a",
                            "object": "model_permission",
                            "created": 1680267269,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": false,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "curie-instruct-beta",
                    "parent": null
                },
                {
                    "id": "gpt-3.5-turbo",
                    "object": "model",
                    "created": 1677610602,
                    "owned_by": "openai",
                    "permission": [
                        {
                            "id": "modelperm-LeYYAMp5mu0Qkfui5StsNiib",
                            "object": "model_permission",
                            "created": 1687914041,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": false,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "gpt-3.5-turbo",
                    "parent": null
                },
                {
                    "id": "ada-code-search-code",
                    "object": "model",
                    "created": 1651172505,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-wa8tg4Pi9QQNaWdjMTM8dkkx",
                            "object": "model_permission",
                            "created": 1669087421,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "ada-code-search-code",
                    "parent": null
                },
                {
                    "id": "ada-similarity",
                    "object": "model",
                    "created": 1651172507,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-LtSIwCEReeDcvGTmM13gv6Fg",
                            "object": "model_permission",
                            "created": 1669092759,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "ada-similarity",
                    "parent": null
                },
                {
                    "id": "code-search-ada-text-001",
                    "object": "model",
                    "created": 1651172507,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-JBssaJSmbgvJfTkX71y71k2J",
                            "object": "model_permission",
                            "created": 1669087421,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "code-search-ada-text-001",
                    "parent": null
                },
                {
                    "id": "text-search-ada-query-001",
                    "object": "model",
                    "created": 1651172505,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-1YiiBMYC8it0mpQCBK7t8uSP",
                            "object": "model_permission",
                            "created": 1669092640,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "text-search-ada-query-001",
                    "parent": null
                },
                {
                    "id": "davinci-search-document",
                    "object": "model",
                    "created": 1651172509,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-M43LVJQRGxz6ode34ctLrCaG",
                            "object": "model_permission",
                            "created": 1669066355,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "davinci-search-document",
                    "parent": null
                },
                {
                    "id": "ada-code-search-text",
                    "object": "model",
                    "created": 1651172510,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-kFc17wOI4d1FjZEaCqnk4Frg",
                            "object": "model_permission",
                            "created": 1669087421,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "ada-code-search-text",
                    "parent": null
                },
                {
                    "id": "text-search-ada-doc-001",
                    "object": "model",
                    "created": 1651172507,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-kbHvYouDlkD78ehcmMOGdKpK",
                            "object": "model_permission",
                            "created": 1669092640,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "text-search-ada-doc-001",
                    "parent": null
                },
                {
                    "id": "davinci-instruct-beta",
                    "object": "model",
                    "created": 1649364042,
                    "owned_by": "openai",
                    "permission": [
                        {
                            "id": "modelperm-k9kuMYlfd9nvFiJV2ug0NWws",
                            "object": "model_permission",
                            "created": 1669066356,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": false,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "davinci-instruct-beta",
                    "parent": null
                },
                {
                    "id": "text-similarity-curie-001",
                    "object": "model",
                    "created": 1651172507,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-6dgTTyXrZE7d53Licw4hYkvd",
                            "object": "model_permission",
                            "created": 1669079883,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "text-similarity-curie-001",
                    "parent": null
                },
                {
                    "id": "code-search-ada-code-001",
                    "object": "model",
                    "created": 1651172507,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-8soch45iiGvux5Fg1ORjdC4s",
                            "object": "model_permission",
                            "created": 1669087421,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "code-search-ada-code-001",
                    "parent": null
                },
                {
                    "id": "ada-search-query",
                    "object": "model",
                    "created": 1651172505,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-b753xmIzAUkluQ1L20eDZLtQ",
                            "object": "model_permission",
                            "created": 1669092640,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "ada-search-query",
                    "parent": null
                },
                {
                    "id": "text-search-davinci-query-001",
                    "object": "model",
                    "created": 1651172505,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-9McKbsEYSaDshU9M3bp6ejUb",
                            "object": "model_permission",
                            "created": 1669066353,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "text-search-davinci-query-001",
                    "parent": null
                },
                {
                    "id": "curie-search-query",
                    "object": "model",
                    "created": 1651172509,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-sIbfSwzVpVBtymQgOQSLBpxe",
                            "object": "model_permission",
                            "created": 1677273417,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "curie-search-query",
                    "parent": null
                },
                {
                    "id": "davinci-search-query",
                    "object": "model",
                    "created": 1651172505,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-lYkiTZMmJMWm8jvkPx2duyHE",
                            "object": "model_permission",
                            "created": 1669066353,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "davinci-search-query",
                    "parent": null
                },
                {
                    "id": "babbage-search-document",
                    "object": "model",
                    "created": 1651172510,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-5qFV9kxCRGKIXpBEP75chmp7",
                            "object": "model_permission",
                            "created": 1669084981,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "babbage-search-document",
                    "parent": null
                },
                {
                    "id": "ada-search-document",
                    "object": "model",
                    "created": 1651172507,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-8qUMuMAbo4EwedbGamV7e9hq",
                            "object": "model_permission",
                            "created": 1669092640,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "ada-search-document",
                    "parent": null
                },
                {
                    "id": "text-search-curie-query-001",
                    "object": "model",
                    "created": 1651172509,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-Iion0NCpsXPNtIkQ0owQLi7V",
                            "object": "model_permission",
                            "created": 1677273417,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "text-search-curie-query-001",
                    "parent": null
                },
                {
                    "id": "text-search-babbage-doc-001",
                    "object": "model",
                    "created": 1651172509,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-ao2r26P2Th7nhRFleHwy2gn5",
                            "object": "model_permission",
                            "created": 1669084981,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "text-search-babbage-doc-001",
                    "parent": null
                },
                {
                    "id": "curie-search-document",
                    "object": "model",
                    "created": 1651172508,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-LDsN5wW8eKVuh1OsyciHntE9",
                            "object": "model_permission",
                            "created": 1677273417,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "curie-search-document",
                    "parent": null
                },
                {
                    "id": "text-search-curie-doc-001",
                    "object": "model",
                    "created": 1651172509,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-taUGRSku7bQLa24SNIwYPEsi",
                            "object": "model_permission",
                            "created": 1677273417,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "text-search-curie-doc-001",
                    "parent": null
                },
                {
                    "id": "babbage-search-query",
                    "object": "model",
                    "created": 1651172509,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-wSs1hMXDKsrcErlbN8HmzlLE",
                            "object": "model_permission",
                            "created": 1669084981,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "babbage-search-query",
                    "parent": null
                },
                {
                    "id": "text-babbage-001",
                    "object": "model",
                    "created": 1649364043,
                    "owned_by": "openai",
                    "permission": [
                        {
                            "id": "modelperm-a3Ph5FIBbJxsoA4wvx7VYC7R",
                            "object": "model_permission",
                            "created": 1675105935,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": false,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "text-babbage-001",
                    "parent": null
                },
                {
                    "id": "text-search-davinci-doc-001",
                    "object": "model",
                    "created": 1651172505,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-qhSf1j2MJMujcu3t7cHnF1DN",
                            "object": "model_permission",
                            "created": 1669066353,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "text-search-davinci-doc-001",
                    "parent": null
                },
                {
                    "id": "text-search-babbage-query-001",
                    "object": "model",
                    "created": 1651172509,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-Kg70kkFxD93QQqsVe4Zw8vjc",
                            "object": "model_permission",
                            "created": 1669084981,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "text-search-babbage-query-001",
                    "parent": null
                },
                {
                    "id": "curie-similarity",
                    "object": "model",
                    "created": 1651172510,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-zhWKExSloaQiJgzjVHFmh2wR",
                            "object": "model_permission",
                            "created": 1675106290,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "curie-similarity",
                    "parent": null
                },
                {
                    "id": "curie",
                    "object": "model",
                    "created": 1649359874,
                    "owned_by": "openai",
                    "permission": [
                        {
                            "id": "modelperm-oPaljeveTjEIDbhDjzFiyf4V",
                            "object": "model_permission",
                            "created": 1675106503,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": false,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "curie",
                    "parent": null
                },
                {
                    "id": "text-similarity-davinci-001",
                    "object": "model",
                    "created": 1651172505,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-OvmcfYoq5V9SF9xTYw1Oz6Ue",
                            "object": "model_permission",
                            "created": 1669066356,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "text-similarity-davinci-001",
                    "parent": null
                },
                {
                    "id": "text-davinci-002",
                    "object": "model",
                    "created": 1649880484,
                    "owned_by": "openai",
                    "permission": [
                        {
                            "id": "modelperm-l4EU6QlN1HcS0so0jU16kyg8",
                            "object": "model_permission",
                            "created": 1679355287,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": false,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "text-davinci-002",
                    "parent": null
                },
                {
                    "id": "gpt-3.5-turbo-0301",
                    "object": "model",
                    "created": 1677649963,
                    "owned_by": "openai",
                    "permission": [
                        {
                            "id": "modelperm-HiGWSFPQdHUJNy8bLjGnqZPF",
                            "object": "model_permission",
                            "created": 1687815251,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": false,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "gpt-3.5-turbo-0301",
                    "parent": null
                },
                {
                    "id": "text-davinci-003",
                    "object": "model",
                    "created": 1669599635,
                    "owned_by": "openai-internal",
                    "permission": [
                        {
                            "id": "modelperm-OCpZQfjQpoXnuT1DcEr3TtVy",
                            "object": "model_permission",
                            "created": 1686222972,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": false,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "text-davinci-003",
                    "parent": null
                },
                {
                    "id": "davinci-similarity",
                    "object": "model",
                    "created": 1651172509,
                    "owned_by": "openai-dev",
                    "permission": [
                        {
                            "id": "modelperm-lYYgng3LM0Y97HvB5CDc8no2",
                            "object": "model_permission",
                            "created": 1669066353,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": true,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "davinci-similarity",
                    "parent": null
                },
                {
                    "id": "gpt-3.5-turbo-16k",
                    "object": "model",
                    "created": 1683758102,
                    "owned_by": "openai-internal",
                    "permission": [
                        {
                            "id": "modelperm-rOHN7RiGTUPYMVm20fdcELbe",
                            "object": "model_permission",
                            "created": 1687911947,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": false,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "gpt-3.5-turbo-16k",
                    "parent": null
                },
                {
                    "id": "gpt-3.5-turbo-16k-0613",
                    "object": "model",
                    "created": 1685474247,
                    "owned_by": "openai",
                    "permission": [
                        {
                            "id": "modelperm-3kBQk89sj5Yba0UUUTevNPee",
                            "object": "model_permission",
                            "created": 1687911948,
                            "allow_create_engine": false,
                            "allow_sampling": true,
                            "allow_logprobs": true,
                            "allow_search_indices": false,
                            "allow_view": true,
                            "allow_fine_tuning": false,
                            "organization": "*",
                            "group": null,
                            "is_blocking": false
                        }
                    ],
                    "root": "gpt-3.5-turbo-16k-0613",
                    "parent": null
                }
            ]
        }
    );
});

module.exports = router;
