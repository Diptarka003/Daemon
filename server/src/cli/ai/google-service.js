import { config } from "../../config/google.config.js";
import chalk from "chalk"
import {google} from "@ai-sdk/google"
import {generateText, streamText} from "ai"

export class AIService{
    constructor(){
        if(!config.googleApiKey)
        {
            console.log("Google API key is not set in env")
        }
        this.model= google(config.model,{
            apiKey:config.googleApiKey
        })
    }

    async sendMessage(messages,onChunk,tools=undefined, onToolCall=null){
         try{
             const streamConfig={
                model: this.model,
                messages:messages
             }
             const result = streamText(streamConfig)
             let fullResponse=""
              for await (const chunk of result.textStream)
              {
                fullResponse+=chunk
                if(onChunk)
                {
                    onChunk(chunk)
                }
              }
              
              const fullResult= result
              return {
                content: fullResponse,
                finishResponse:fullResult.finishReason,
                usage:fullResult.usage
              }
         }
         catch(error){
               console.log(chalk.red("AI Service Error:", error))
         }
    }

    async getMessage(messages, tools=undefined){
    let fullResponse = "";
    await this.sendMessage(messages, (chunk)=>{
        fullResponse += chunk
    })

    return fullResponse
   }

  async generateStructured(schema, prompt) {
    try {
      const result = await generateObject({
        model: this.model,
        schema: schema,
        prompt: prompt,
      });
      
      return result.object;
    } catch (error) {
      console.error(chalk.red("AI Structured Generation Error:"), error.message);
      throw error;
    }
  }
}