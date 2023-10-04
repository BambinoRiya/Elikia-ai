import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: "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", dangerouslyAllowBrowser: true 
  });


// const{Configuration, OpenAIApi} = require('openai');
// const configuration  = new Configuration({apiKey: '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'});
// const openai = new OpenAIApi(configuration);

export async function main(message){
    const res = await openai.chat.completions.create({
        model: 'text-davinci-003',
        messages: [{ role: 'user', content: 'Say this is a test' }],
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });
    return res.data.choice[0].text;
}



// const{Configuration, OpenAIApi} = require('openai')
// const configuration = new Configuration({apiKey: "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"});
// const openai = new OpenAIApi(configuration);

// export async function sendMsgToOpenAI(message){
//     const res = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: message,
//         temperature: 0.7,
//         max_tokens: 256,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0
//     });
//     return res.data.choices[0].text;
// }


