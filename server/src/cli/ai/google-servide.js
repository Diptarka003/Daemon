import { config } from "../../config/google.config";
import chalk from "chalk"
import google from "@ai-sdk/google"
import {streamText} from "ai"

export class AIservice{
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
}