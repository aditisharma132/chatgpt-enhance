import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-VFQvTqqjXfwUKFO4GIOQUQlz",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function callApi(){
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
      });
      console.log(response.data.choices[0].text)
}

callApi()